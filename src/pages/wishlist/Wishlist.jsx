import React from "react";
import { useSelector } from "react-redux";
import Products from "../../components/Users-wrapper/UsersWrapper";

const Wishlist = () => {
  let wishlist = useSelector((state) => state.wishlist.value);
  console.log(wishlist);

  return (
    <div>
      {wishlist.length ? <Products data={wishlist} /> : <p>Like yoq</p>}
    </div>
  );
};

export default Wishlist;
