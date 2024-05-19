import React from "react";
import "./EditModel.css";
import { usePutUserMutation } from "../../context/api/userApi";

function EditModel({ setData, data }) {
  let [updateUser] = usePutUserMutation();

  const handle = async (e) => {
    e.preventDefault();
    let user = {
      name: data.name,
      age: data.age,
    };
    try {
      await updateUser({ body: user, id: data.id }).unwrap();

      setData(null);
    } catch (error) {
      console.error("Failed to update the user: ", error);
    }
  };

  return (
    <div>
      <div onClick={() => setData(null)} className="edit__overlay"></div>
      <form onSubmit={handle} className="edit_wrapper">
        <div className="form-group">
          <span>Name</span>
          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, name: e.target.value }))
            }
            value={data.name}
            className="form-field"
            type="text"
            placeholder="Name"
          />
        </div>

        <div className="form-group">
          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, age: e.target.value }))
            }
            value={data.age}
            className="form-field"
            type="number"
            placeholder="Age"
          />
          <span>Age</span>
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={() => setData(null)}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditModel;
