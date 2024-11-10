// src/App.jsx

import React, { useState } from "react";
import ProfilePage from "./components/ProfilePage";
import UserContext from "./contexts/UserContext";

function App() {
  // Example user data
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john@example.com",
    age: 30,
  });

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
