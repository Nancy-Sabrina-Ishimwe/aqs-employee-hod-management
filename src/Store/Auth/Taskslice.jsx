import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



// Thunk to fetch tasks from the backend
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('/api/tasks'); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [], // List of tasks
    status: 'idle', // loading status ('idle' | 'loading' | 'succeeded' | 'failed')
    error: null, // error message if request fails
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Selector to get tasks from the Redux store
export const selectTasks = (state) => state.tasks.items;

// Export reducer to configure in the store
export default tasksSlice.reducer;
