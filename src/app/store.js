import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import categoryProductsReducer from "../features/categoryProducts/categoryProductsSlice";
import filterReducer from "../features/filter/filterSlice";
import productReducer from "../features/product/productSlice";
import productsReducer from "../features/products/productsSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    product: productReducer,
    categoryProducts: categoryProductsReducer,
    carts: cartReducer,
    filter: filterReducer,
  },
});
