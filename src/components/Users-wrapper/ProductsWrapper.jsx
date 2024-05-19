import React from "react";
import "./User.css";
import { useDeleteUserMutation } from "../../context/api/userApi";

function UsersWrapper({ users, isAdmin }) {
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async (id) => {
    try {
      await deleteUser(id).unwrap();
      // Optional: Add code to update the UI after successful deletion
    } catch (error) {
      console.error("Failed to delete user:", error);
      // Optional: Add code to handle the error, like showing a message to the user
    }
  };

  const userElements = users
    ?.slice()
    .reverse()
    .map((el) => (
      <div key={el.id} className="card">
        <img src={el.avatar} alt={`${el.name}'s avatar`} />
        <h3>{el.name}</h3>
        <div className="pro">
          <h2>{el.age} Years</h2>
        </div>
        {isAdmin && (
          <div className="actions">
            <button onClick={() => handleDelete(el.id)} className="cart_btn">
              Delete
            </button>
          </div>
        )}
      </div>
    ));

  return <div className="wrapper">{userElements}</div>;
}

export default UsersWrapper;
