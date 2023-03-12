import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productsAPI";

// initial state
const initialState = {
  isLoading: false,
  products: [],
  isError: false,
  error: "",
};

// async thunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ categories, search }) => {
    const products = await getProducts(categories, search);
    return products;
  }
);

// create slice
const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default productsSlice.reducer;
