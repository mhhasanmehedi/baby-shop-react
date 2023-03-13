import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  categories: [],
  search: "",
  sortStatus: "default",
  view: "grid",
};

// create slice
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    categorySelected: (state, action) => {
      const isAlreadyAdded = state.categories.includes(action.payload)
        ? true
        : false;
      if (!isAlreadyAdded) {
        state.categories.push(action.payload);
      }
    },
    categoryRemoved: (state, action) => {
      const indexToRemove = state.categories.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.categories.splice(indexToRemove, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
    viewChanged: (state, action) => {
      state.view = action.payload;
    },
    sortChanged: (state, action) => {
      state.sortStatus = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const {
  categorySelected,
  categoryRemoved,
  searched,
  viewChanged,
  sortChanged,
} = filterSlice.actions;
