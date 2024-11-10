// src/components/UserDetails.jsx

import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

function UserDetails() {
  // Consume user data from context
  const userData = useContext(UserContext);

  if (!userData) {
    return <p>Loading user data...</p>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Age: {userData.age}</p>
    </div>
  );
}

export default UserDetails;
