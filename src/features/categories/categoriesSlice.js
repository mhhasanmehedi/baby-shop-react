import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCategory, getCategories } from "./categoriesAPI";

// initial state
const initialState = {
  isLoading: false,
  categories: [],
  isError: false,
  error: "",
};

// fetch categories async thunk
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const categories = await getCategories();
    return categories;
  }
);

// Create categories async thunk
export const createCategory = createAsyncThunk(
  "categories/createCategory",
  async (data) => {
    const category = await addCategory(data);
    return category;
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
      })
      .addCase(createCategory.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.categories.push(action.payload);
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default categoriesSlice.reducer;
