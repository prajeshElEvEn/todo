import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  users: [],
  isLoading: false,
  isError: false,
  message: "",
};

export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (userData, thunkAPI) => {
    try {
      //   return await registerService(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUser = createAsyncThunk(
  "user/getUser",
  async (userData, thunkAPI) => {
    try {
      //   return await registerService(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (userData, thunkAPI) => {
    try {
      //   return await registerService(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (userData, thunkAPI) => {
    try {
      //   return await registerService(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders
      .addCase(getUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
        state.isError = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.users = [];
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.user._id === action.payload._id) {
          state.user = action.payload;
        }
        state.users = state.users.map((user) =>
          user._id === action.payload._id ? action.payload : user
        );
        state.isError = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isError = true;
        state.message = action.payload;
      });
  },
});
