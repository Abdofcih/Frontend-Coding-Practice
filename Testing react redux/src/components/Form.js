import React, { useState, useEffect } from "react";
import { addUser, editUser, setEditMode } from "../redux/usersSlice";
import { useDispatch, useSelector } from "react-redux";
const Form = () => {
  const { isEditingMode, editingUser } = useSelector(state => state.userState);
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const [btnText, setBtnText] = useState("Add");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isEditingMode) {
      setName(editingUser.name);
      setBtnText("Edit");
      setError(false);
    } else {
      setName("");
      setBtnText("Add");
    }
  }, [editingUser, isEditingMode]);

  const checkError = value => {
    !value || value.length == 0 ? setError(true) : setError(false);
  };

  const handleChange = e => {
    const { value } = e.target;
    setName(value);
    console.log(name, name.length);
    checkError(value);
  };

  const handleAdd = e => {
    e.preventDefault();
    checkError(name);

    if (isEditingMode && name) {
      dispatch(editUser({ id: editingUser.id, name }));
      dispatch(setEditMode({ isEdit: false }));
    } else if (name) {
      const id = new Date().getTime().toString();
      dispatch(addUser({ id, name }));
      setName("");
    }
  };

  return (
    <div className="form-container">
      <form>
        <div>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={handleChange}
          />
          <p
            data-testid="error"
            className="error"
            style={{ visibility: error ? "visible" : "hidden" }}
          >
            Name is required
          </p>
        </div>
        <button data-testid="add" className="btn btn-add" onClick={handleAdd}>
          {btnText}
        </button>
      </form>
    </div>
  );
};
export default Form;
