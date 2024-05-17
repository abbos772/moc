import React from "react";
import "./User.css";
import { useDeleteUserMutation } from "../../context/api/userApi";

function UsersWrapper({ users, isAdmin }) {
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = (id) => {
    deleteUser(id);
  };

  const userElements = users?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.avatar} alt="" />
      <h3>{el.name}</h3>
      <div className="pro">
        <h2>{el.age} Years</h2>
      </div>
      {isAdmin && (
        <div className="pro2">
          <button onClick={() => handleDelete(el.id)} className="cart_btn">
            Delete
          </button>
          <button
            style={{ background: "rgb(49, 162, 255)" }}
            className="cart_btn"
          >
            Create
          </button>
        </div>
      )}
    </div>
  ));

  return <div className="wrapper">{userElements}</div>;
}

export default UsersWrapper;
