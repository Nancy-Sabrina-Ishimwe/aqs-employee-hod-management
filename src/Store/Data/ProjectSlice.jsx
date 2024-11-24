import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { showToast } from "../../utils/toastConfig";
import { projectService } from "../../Service/DataServices";

// --- Employee Slice CRUD Operations ---
export const fetchProjects = createAsyncThunk(
  "projects/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await projectService.fetchAll();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createProject = createAsyncThunk(
  "projects/create",
  async (employeeData, { rejectWithValue }) => {
    try {
      const response = await projectService.register(employeeData);
      showToast(response.data.message, "success");
      return response.data;
    } catch (error) {
      showToast(error.response.data.message, "error");
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteProject = createAsyncThunk(
  "projects/delete",
  async (projectId, { rejectWithValue }) => {
    try {
      await projectService.delete(projectId);
      return projectId;
    } catch (error) {
      showToast(error.response.data.message, "error");
      return rejectWithValue(error.response.data);
    }
  }
);

const projectSlice = createSlice({
  name: "projects",
  initialState: { list: [], status: null, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      // .addCase(updateProject.fulfilled, (state, action) => {
      //   const { projectId, data } = action.payload;
      //   const existingProject = state.list.find(
      //     (project) => project.id === projectId
      //   );
      //   if (existingProject) {
      //     Object.assign(existingProject, data); // Update project data in the list
      //   }
      // })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (project) => project.id !== action.payload
        );
      });
  },
});

// Export all slices

export const projectReducer = projectSlice.reducer;
