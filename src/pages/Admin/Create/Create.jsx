import React, { useState } from "react";
import { usePostUserMutation } from "../../../context/api/userApi";
import "./Create.css";
import { Outlet } from "react-router-dom";
let initialState = {
  name: "",
  age: "",
};

function Create() {
  let [create] = usePostUserMutation();
  const [newUser, setNewUser] = useState(initialState);
  const handlCreate = (e) => {
    e.preventDefault(), create(newUser);
  };
  return (
    <div className="inp">
      <h2>Create User</h2>
      <form onSubmit={handlCreate} action="">
        <input
          value={newUser.name}
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, name: e.target.value }))
          }
          type="input"
          className="input"
          placeholder="Name"
          name="name"
          id="name"
          required
        />

        <input
          className="input"
          value={newUser.age}
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, age: e.target.value }))
          }
          type="number"
        />
        <button>Submit</button>
      </form>
      <Outlet />
    </div>
  );
}

export default Create;
