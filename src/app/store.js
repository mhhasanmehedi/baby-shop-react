import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "../features/carts/cartsSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import categoryProductsReducer from "../features/categoryProducts/categoryProductsSlice";
import productReducer from "../features/product/productSlice";
import productsReducer from "../features/products/productsSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    product: productReducer,
    categoryProducts: categoryProductsReducer,
    carts: cartsReducer,
  },
});
