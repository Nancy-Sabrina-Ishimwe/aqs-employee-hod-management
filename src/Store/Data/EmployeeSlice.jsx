import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { showToast } from "../../utils/toastConfig";
import { employeeService } from "../../Service/DataServices";

// --- Employee Slice CRUD Operations ---
export const fetchEmployees = createAsyncThunk(
  "employees/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await employeeService.fetchAll();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createEmployee = createAsyncThunk(
  "employees/create",
  async (employeeData, { rejectWithValue }) => {
    try {
      const response = await employeeService.register(employeeData);
      showToast(response.data.message, "success");
      return response.data;
    } catch (error) {
      showToast(error.response.data.message, "error");
      return rejectWithValue(error.response.data);
    }
  }
);

// export const updateEmployee = createAsyncThunk(
//   "employees/update",
//   async ({ employeeId, data }, { rejectWithValue }) => {
//     try {
//       const response = await employeeService.updateEmployee(employeeId, data);
//       return { employeeId, data: response.data };
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const deleteEmployee = createAsyncThunk(
//   "employees/delete",
//   async (employeeId, { rejectWithValue }) => {
//     try {
//       await employeeService.deleteEmployee(employeeId);
//       return employeeId;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

const employeeSlice = createSlice({
  name: "employees",
  initialState: { list: [], status: null, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
    // .addCase(updateEmployee.fulfilled, (state, action) => {
    //   const { employeeId, data } = action.payload;
    //   const existingEmployee = state.list.find(
    //     (employee) => employee.id === employeeId
    //   );
    //   if (existingEmployee) {
    //     Object.assign(existingEmployee, data); // Update employee data in the list
    //   }
    // })
    // .addCase(deleteEmployee.fulfilled, (state, action) => {
    //   state.list = state.list.filter(
    //     (employee) => employee.id !== action.payload
    //   );
    // });
  },
});

// Export all slices
export const employeeReducer = employeeSlice.reducer;
