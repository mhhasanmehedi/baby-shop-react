import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./authAPI";

// initial state
const initialState = {
  users: [],
  currentUser: {
    email: "mehedihasan@gmail.com",
    password: "mehedihasanrahat",
  },
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const users = await getUsers();
  return users;
});

// create slice
const authSlice = createSlice({
  name: "users",
  initialState,

  extraReducers: (builder) =>
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users.push(action.payload);
    }),
});

export default authSlice.reducer;
