import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(sessionStorage.getItem("cartItems")) || [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const itemInCart = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (itemInCart) {
        // If the item is already in the cart, increase its quantity by 1
        itemInCart.quantity += 1;
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        state.cartItems.push({ ...item, quantity: 1 });
      }

      // Sync cart items with session storage
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== itemId
      );

      // Sync cart items with session storage
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const itemInCart = state.cartItems.find(
        (cartItem) => cartItem.id === itemId
      );
      if (itemInCart) {
        itemInCart.quantity += 1;

        // Sync cart items with session storage
        sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const itemInCart = state.cartItems.find(
        (cartItem) => cartItem.id === itemId
      );
      if (itemInCart) {
        if (itemInCart.quantity === 1) {
          // If the quantity is 1, remove the item from the cart
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== itemId
          );
        } else {
          itemInCart.quantity -= 1;
        }

        // Sync cart items with session storage
        sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
