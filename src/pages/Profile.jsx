
import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";

const Profile = () => {
  const {  loading, user } = useContext(Context);
  return (
    loading ? (
    <Loader />
  ) :( 
    <div>
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
      
    </div>
  )
  );
};

export default Profile;