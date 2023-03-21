import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import filterReducer from "../features/filter/filterSlice";
import productReducer from "../features/product/productSlice";
import productsReducer from "../features/products/productsSlice";
import relatedProductSlice from "../features/relatedProducts/relatedProductSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    product: productReducer,
    carts: cartReducer,
    filter: filterReducer,
    users: authSlice,
    relatedProducts: relatedProductSlice,
  },
});
