import React from "react";
import { useGetUsersQuery } from "../../../context/api/userApi";
import UsersWrapper from "../../../components/Users-wrapper/UsersWrapper";
import { Outlet } from "react-router-dom";
import "./Manage.css";
function Manage() {
  let { data } = useGetUsersQuery();
  return (
    <div>
      <UsersWrapper isAdmin={true} users={data} />
      <Outlet />
    </div>
  );
}

export default Manage;
