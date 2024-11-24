import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { showToast } from "../../utils/toastConfig";
import { commentService } from "../../Service/DataServices";

// --- Comment Slice CRUD Operations ---
export const fetchComments = createAsyncThunk(
  "comments/fetchAll",
  async (taskId, { rejectWithValue }) => {
    try {
      const response = await commentService.fetchAll(taskId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createComment = createAsyncThunk(
  "comments/create",
  async ({ taskId, commentData }, { rejectWithValue }) => {
    try {
      const response = await commentService.register(taskId, commentData);
      showToast(response.data.message, "success");
      return response.data;
    } catch (error) {
      showToast(error.response.data.message, "error");
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateComment = createAsyncThunk(
  "comments/update",
  async ({ commentId, data }, { rejectWithValue }) => {
    try {
      const response = await commentService.update(commentId, data);
      showToast(response.data.message, "success");
      return { commentId, data: response.data };
    } catch (error) {
      showToast(error.response.data.message, "error");
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "comments/delete",
  async (commentId, { rejectWithValue }) => {
    try {
      await commentService.delete(commentId);
      return commentId;
    } catch (error) {
      showToast(error.response.data.message, "error");
      return rejectWithValue(error.response.data);
    }
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState: { list: [], status: null, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        const { commentId, data } = action.payload;
        const existingComment = state.list.find(
          (comment) => comment.id === commentId
        );
        if (existingComment) {
          Object.assign(existingComment, data); // Update comment data in the list
        }
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (comment) => comment.id !== action.payload
        );
      });
  },
});

// Export commentSlice reducer
export const commentReducer = commentSlice.reducer;
