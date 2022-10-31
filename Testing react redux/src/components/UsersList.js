import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

function UsersList() {
  const { users } = useSelector(state => state.userState);
  return (
    <ul>
      {users.map(user => {
        return <User key={user.id} {...user}></User>;
      })}
    </ul>
  );
}

export default UsersList;
