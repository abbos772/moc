import { useState } from "react";
import Navber from "./components/Navbar/Navber";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Create from "./pages/Admin/Create/Create";
import Manage from "./pages/Admin/manage/Manage";
import Admin from "./pages/Admin/Admin";
import Wishlist from "./pages/wishlist/Wishlist";
import Product from "./pages/Product/Product";
function App() {
  return (
    <>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="create" element={<Create />} />
          <Route path="manage" element={<Manage />} />

          <Route />
        </Route>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
