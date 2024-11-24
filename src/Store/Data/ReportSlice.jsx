import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { showToast } from "../../utils/toastConfig";
import { reportService } from "../../Service/DataServices";

// --- Report Slice CRUD Operations ---
export const fetchReports = createAsyncThunk(
  "reports/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await reportService.fetchAll();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createReport = createAsyncThunk(
  "reports/create",
  async (reportData, { rejectWithValue }) => {
    try {
      const response = await reportService.register(reportData);
      showToast(response.data.message, "success");
      return response.data;
    } catch (error) {
      showToast(error.response.data.message, "error");
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateReport = createAsyncThunk(
  "reports/update",
  async ({ reportId, data }, { rejectWithValue }) => {
    try {
      const response = await reportService.update(reportId, data);
      return { reportId, data: response.data };
    } catch (error) {
      showToast(error.response.data.message, "error");
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteReport = createAsyncThunk(
  "reports/delete",
  async (reportId, { rejectWithValue }) => {
    try {
      await reportService.delete(reportId);
      return reportId;
    } catch (error) {
      showToast(error.response.data.message, "error");
      return rejectWithValue(error.response.data);
    }
  }
);

const reportSlice = createSlice({
  name: "reports",
  initialState: { list: [], status: null, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReports.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchReports.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchReports.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createReport.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateReport.fulfilled, (state, action) => {
        const { reportId, data } = action.payload;
        const existingReport = state.list.find(
          (report) => report.id === reportId
        );
        if (existingReport) {
          Object.assign(existingReport, data); // Update report data in the list
        }
      })
      .addCase(deleteReport.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (report) => report.id !== action.payload
        );
      });
  },
});

// Export reportSlice

export const reportReducer = reportSlice.reducer;
