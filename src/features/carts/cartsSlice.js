import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCarts, postCarts } from "./cartsAPI";

// initial state
const initialState = {
  carts: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchCarts = createAsyncThunk("carts/fetchCarts", async () => {
  const carts = await getCarts();
  return carts;
});

export const createCarts = createAsyncThunk(
  "carts/createCarts",
  async (data) => {
    const updatedData = {};
    const itemInCart = carts.find((item) => item.id === data.id);
    if (itemInCart) {
      updatedData.quantity = itemInCart.quantity + 1;
    } else {
      updatedData({ ...data, quantity: 1 });
    }

    const carts = await postCarts(updatedData);
    return carts;
  }
);

// create slice
const cartsSlice = createSlice({
  name: "carts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarts.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchCarts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carts = action.payload;
      })
      .addCase(fetchCarts.rejected, (state, action) => {
        state.isLoading = false;
        state.carts = [];
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(createCarts.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createCarts.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.carts.push(action.payload);
      })
      .addCase(createCarts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default cartsSlice.reducer;
