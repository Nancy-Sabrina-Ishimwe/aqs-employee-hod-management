import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { showToast } from "../../utils/toastConfig";
import { taskService } from "../../Service/DataServices";

// --- Task Slice CRUD Operations ---
export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await taskService.fetchAll();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createTask = createAsyncThunk(
  "tasks/create",
  async (taskData, { rejectWithValue }) => {
    try {
      const response = await taskService.register(taskData);
      showToast(response.data.message, "success");
      return response.data;
    } catch (error) {
      showToast(error.response.data.message, "error");
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateTask = createAsyncThunk(
  "tasks/update",
  async ({ taskId, data }, { rejectWithValue }) => {
    try {
      const response = await taskService.update(taskId, data);
      showToast(response.data.message, "success");
      return { taskId, data: response.data };
    } catch (error) {
      showToast(error.response.data.message, "error");
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/delete",
  async (taskId, { rejectWithValue }) => {
    try {
      await taskService.delete(taskId);
      return taskId;
    } catch (error) {
      showToast(error.response.data.message, "error");
      return rejectWithValue(error.response.data);
    }
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: { list: [], status: null, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const { taskId, data } = action.payload;
        const existingTask = state.list.find((task) => task.id === taskId);
        if (existingTask) {
          Object.assign(existingTask, data); // Update task data in the list
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.list = state.list.filter((task) => task.id !== action.payload);
      });
  },
});

// Export taskSlice
export const taskReducer = taskSlice.reducer;
