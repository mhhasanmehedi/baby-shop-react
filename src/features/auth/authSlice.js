import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addUser, editUser, getUsers } from "./authAPI";

// initial state
const initialState = {
  users: [],
  isLoading: false,
  isError: false,
  error: "",
  currentUser: JSON.parse(sessionStorage.getItem("currentLoggedIn")) || null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const users = await getUsers();
  return users;
});

export const createUser = createAsyncThunk("users/createUser", async (data) => {
  const user = await addUser(data);
  return user;
});

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ id, data }) => {
    const user = await editUser(id, data);
    return user;
  }
);

// create slice
const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.currentUser = action.payload;

      sessionStorage.setItem(
        "currentLoggedIn",
        JSON.stringify(state.currentUser)
      );
    },

    signOut: (state) => {
      state.currentUser = null;
      sessionStorage.setItem(
        "currentLoggedIn",
        JSON.stringify(state.currentUser)
      );
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(createUser.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;

        const indexToUpdate = state.users.findIndex(
          (user) => user.id === action.payload.id
        );

        state.users[indexToUpdate] = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      }),
});

export default authSlice.reducer;
export const { signIn, signOut } = authSlice.actions;
