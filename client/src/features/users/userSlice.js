import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  isError: false,
  message: "",
};

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
