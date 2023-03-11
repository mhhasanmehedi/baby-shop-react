import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./categoriesAPI";

// initial state
const initialState = {
  isLoading: false,
  categories: [],
  isError: false,
  error: "",
};

// async thunk
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const categories = await getCategories();
    return categories;
  }
);

// create slice
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.categories = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default categoriesSlice.reducer;
