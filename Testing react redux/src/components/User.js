import React from "react";
import { removeUser, setEditMode } from "../redux/usersSlice";
import { useDispatch } from "react-redux";
const User = ({ id, name }) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(setEditMode({ id, isEdit: true }));
  };
  const handleDelete = () => {
    console.log("delete", id);
    dispatch(removeUser({ id }));
  };

  return (
    <li>
      <p>{name}</p>
      <p className="btns-container">
        <button className="btn btn-edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn btn-delete" onClick={handleDelete}>
          Delete
        </button>
      </p>
    </li>
  );
};

export default User;
