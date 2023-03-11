import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategoryProducts } from "./categoryProductsAPI";

// initial state
const initialState = {
  isLoading: false,
  categoryProducts: [],
  isError: false,
  error: "",
};

// async thunk
export const fetchCategoryProducts = createAsyncThunk(
  "categoryProducts/fetchCategoryProducts",
  async (category) => {
    const categoryProducts = await getCategoryProducts(category);
    return categoryProducts;
  }
);

// create slice
const categoryProductsSlice = createSlice({
  name: "categoryProducts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoryProducts = action.payload;
      })
      .addCase(fetchCategoryProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.categoryProducts = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default categoryProductsSlice.reducer;
