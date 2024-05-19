import React from "react";
import User from "../../components/Users-wrapper/ProductsWrapper";
import { useGetUsersQuery } from "../../context/api/userApi";
function Product() {
  let { data } = useGetUsersQuery();
  return (
    <div>
      <User isAdmin={false} users={data} />
    </div>
  );
}

export default Product;
