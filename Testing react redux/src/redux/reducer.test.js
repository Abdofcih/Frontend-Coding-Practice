import reducers from "./usersSlice";

const initialState = {
  users: [{ id: "001", name: "Abdelrahman12" }, { id: "002", name: "hossam" }],
  isEditingMode: false,
  editingUser: null
};

test("reducers/addUser", () => {
  const testUser = { id: "1667171748493", name: "ahmed" };
  let state;
  state = reducers(initialState, {
    type: "user/addUser",
    payload: testUser
  });
  expect(state).toEqual({
    ...initialState,
    users: [...initialState.users, testUser]
  });
});

test("reducers/removeUser", () => {
  const id = "002";
  let state;
  state = reducers(initialState, {
    type: "user/removeUser",
    payload: { id: "002" }
  });
  expect(state).toEqual({
    ...initialState,
    users: initialState.users.filter(user => user.id !== id)
  });
});

test("reducers/editUser", () => {
  const newUser = { id: "002", name: "newName" };
  let state;
  state = reducers(initialState, {
    type: "user/editUser",
    payload: newUser
  });
  expect(state.users).toContainEqual(newUser);
});

test("reducers/setEditMode", () => {
  const isEdit = true;
  const id = "002";
  let state;
  state = reducers(initialState, {
    type: "user/setEditMode",
    payload: { id: "002", isEdit }
  });
  expect(state).toEqual({
    ...initialState,
    isEditingMode: true,
    editingUser: isEdit ? state.users.find(user => user.id === id) : null
  });
});
