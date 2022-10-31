import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: "001", name: "Abdelrahman" },
    { id: "002", name: "hossam" },
    { id: "003", name: "ahmed" },
    { id: "004", name: "mohamed" }
  ],
  isEditingMode: false,
  editingUser: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, { payload }) {
      const { id, name } = payload;
      state.users = [...state.users, { id, name }];
    },
    removeUser(state, { payload }) {
      state.users = state.users.filter(user => user.id !== payload.id);
    },
    editUser(state, { payload }) {
      const { id, name } = payload;
      state.users = state.users.map(user => {
        if (user.id === id) user.name = name;
        return user;
      });
    },
    setEditMode(state, { payload }) {
      const { id, isEdit } = payload;
      state.isEditingMode = isEdit;
      state.editingUser = isEdit
        ? state.users.find(user => user.id === id)
        : null;
    }
  }
});

export const { addUser, removeUser, editUser, setEditMode } = userSlice.actions;
export default userSlice.reducer;
