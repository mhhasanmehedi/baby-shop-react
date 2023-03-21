import { getRelatedProducts } from "./relatedProductsApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  relatedProducts: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchRelatedProducts = createAsyncThunk(
  "relatedProducts/fetchRelatedProducts",
  async ({ category, id }) => {
    const relatedProducts = await getRelatedProducts({ category, id });
    return relatedProducts;
  }
);

const relatedProductsSlice = createSlice({
  name: "relatedProducts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedProducts.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedProducts = action.payload;
      })
      .addCase(fetchRelatedProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedProductsSlice.reducer;
