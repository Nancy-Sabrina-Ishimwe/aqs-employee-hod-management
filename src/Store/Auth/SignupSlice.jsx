import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import loginService from '../../Service/Login.Service';

export const signupUser = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await loginService.signup(userData);
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response.data); 
    }
  }
);

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetSignupState: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; 
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      });
  },
});

export const { resetSignupState } = signupSlice.actions;

export default signupSlice.reducer;
