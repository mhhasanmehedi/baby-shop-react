import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProduct } from "./productAPI";

// initial state
const initialState = {
  product: {},
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id) => {
    const product = await getProduct(id);
    return product;
  }
);

// create slice
const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.product = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default productSlice.reducer;
