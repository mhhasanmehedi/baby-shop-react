import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addCategory,
  editCategory,
  getCategories,
  getCategory,
  removeCategory,
} from "./categoriesAPI";

// initial state
const initialState = {
  isLoading: false,
  categories: [],
  category: {},
  isError: false,
  error: "",
};

// fetch categories async thunk
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const categories = await getCategories();
    return categories;
  }
);

// fetch category async thunk
export const fetchCategory = createAsyncThunk(
  "categories/fetchCategory",
  async (id) => {
    const category = await getCategory(id);
    return category;
  }
);

// Create categories async thunk
export const createCategory = createAsyncThunk(
  "categories/createCategory",
  async (data) => {
    const category = await addCategory(data);
    return category;
  }
);

// Update Category async thunk
export const updateCategory = createAsyncThunk(
  "categories/updateCategory",
  async ({ id, data }) => {
    const category = await editCategory(id, data);
    return category;
  }
);

// Delete Categories async thunk
export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (id) => {
    const category = await removeCategory(id);
    return category;
  }
);

// create slice
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder
      // fetch categories
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.categories = [];
        state.isError = true;
        state.error = action.error?.message;
      })

      // fetch Category
      .addCase(fetchCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.category = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })

      // Create category
      .addCase(createCategory.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.categories.push(action.payload);
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })

      // Update Category
      .addCase(updateCategory.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;

        const indexToUpdate = state.categories.findIndex(
          (category) => category.id === action.payload.id
        );

        state.categories[indexToUpdate] = action.payload;
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })

      // Delete Category
      .addCase(deleteCategory.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;

        state.categories = state.categories.filter(
          (t) => t.id !== action.meta.arg
        );
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default categoriesSlice.reducer;
