import React from "react";
import UsersWrapper from "../../components/Users-wrapper/UsersWrapper";
import { useGetUsersQuery } from "../../context/api/userApi";

function Home() {
  let { data } = useGetUsersQuery();

  return (
    <div>
      <UsersWrapper isAdmin={false} users={data} />
    </div>
  );
}

export default Home;
