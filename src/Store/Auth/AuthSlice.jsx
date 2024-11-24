import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import loginService from "../../Service/Login.Service";
import { showToast } from "../../utils/toastConfig";

const initialState = {
  userData: localStorage.getItem("token")
    ? {
        user_data: JSON.parse(localStorage.getItem("user_data")),
        token: localStorage.getItem("token"),
      }
    : null,
  loading: false,
  error: null,
  position: null,
};

// Async thunk for user login
export const makeLogin = createAsyncThunk(
  "login/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await loginService.login({ email, password });
      if (response) {
        const { token } = response.data.authorization;
        const user = response.data.user;
        const status = response.data.status;

        // Store user data and token in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("user_data", JSON.stringify(user));
        return { ...user, token, status };
      }
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || "Invalid Username or Password"
      );
    }
  }
);

// Async thunk for user logout
export const logoutUser = createAsyncThunk(
  "login/logout",
  async (_, { rejectWithValue }) => {
    try {
      await loginService.logout();
      localStorage.removeItem("token");
      localStorage.removeItem("user_data");
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || "Logout failed. Please try again."
      );
    }
  }
);

// Async thunk for user signup
export const signup = createAsyncThunk(
  "login/signup",
  async (
    { hod_name, email, contact_number, password, password_confirmation },
    { rejectWithValue }
  ) => {
    try {
      const response = await loginService.signup({
        hod_name,
        email,
        contact_number,
        password,
        password_confirmation,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || "Signup failed. Please try again."
      );
    }
  }
);

// Async thunk for password recovery
export const forgotPassword = createAsyncThunk(
  "auth/forgot-password",
  async (email, { rejectWithValue }) => {
    try {
      const response = await loginService.forgotPassword(email);
      return response.data.message;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || "Failed to send password reset email"
      );
    }
  }
);

// Create a slice for login
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(makeLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.position = null; 
      })
      .addCase(makeLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload; // Only update userData
        const status = action.payload.status;
        state.position =  status.includes('intern')? "intern" : "hod";
        showToast("Logged in successfully!", "success");
      })
      .addCase(makeLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.position = null;
        showToast(action.payload, "error");

      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload; // Only update userData
        showToast("Signup successful!", "success");
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
        showToast(state.error, "error");
      })
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        showToast(action.payload, "success");
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        showToast(state.error, "error");
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.userData = null; // Reset userData on logout
        showToast("Logged out successfully!", "success");
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        showToast(state.error, "error");
      });
  },
});

// Selectors for getting the current user and login state
export const selectCurrentUser = (state) => state.login.userData;
export const selectLogin = (state) => state.login.userData;
export const selectSignup = (state) => state.login.users; // This can be removed if not used
export const selectLoginError = (state) => state.login.error;
export const selectLoginLoading = (state) => state.login.loading;
export const selectPosition = (state) => state.login.position;
// Export the reducer
export default loginSlice.reducer;
