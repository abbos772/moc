import React, { useState } from "react";
import "./Admin.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
const Admin = () => {
  return (
    <>
      <div>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Admin;
