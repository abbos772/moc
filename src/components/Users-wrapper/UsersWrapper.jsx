import React, { memo, useState } from "react";
import "./User.css";
import { useDeleteUserMutation } from "../../context/api/userApi";
import EditModel from "../EditModel/EditModel";

function UsersWrapper({ users, isAdmin }) {
  const [editUser, setEditUSer] = useState(null);

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
            style={{ background: "#5161ce" }}
            className="cart_btn"
            onClick={() => setEditUSer(el)}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  ));

  return (
    <div className="wrapper">
      {userElements}
      {editUser ? <EditModel data={editUser} setData={setEditUSer} /> : <></>}
    </div>
  );
}

export default memo(UsersWrapper);
