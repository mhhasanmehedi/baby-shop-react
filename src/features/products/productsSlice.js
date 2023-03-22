import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addProduct,
  getProducts,
  deleteProduct,
  editProduct,
} from "./productsAPI";

// initial state
const initialState = {
  isLoading: false,
  products: [],
  isError: false,
  error: "",
};

// get all products async thunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await getProducts();
    return products;
  }
);

// Create product async thunk
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (data) => {
    const product = await addProduct(data);
    return product;
  }
);

// Update product async thunk
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, data }) => {
    const product = await editProduct(id, data);
    return product;
  }
);

// Delete Product async thunk
export const removeProduct = createAsyncThunk(
  "products/removeProduct",
  async (id) => {
    const product = await deleteProduct(id);
    return product;
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
      })
      .addCase(createProduct.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(updateProduct.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;

        const indexToUpdate = state.products.findIndex(
          (product) => product.id === action.payload.id
        );

        state.products[indexToUpdate] = action.payload;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(removeProduct.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;

        state.products = state.products.filter((t) => t.id !== action.meta.arg);
      })
      .addCase(removeProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default productsSlice.reducer;
