// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import necessary routing components
import RecipeDetails from "./components/RecipeDetails"; // Import RecipeDetails component
import Home from "./components/Home"; // Assuming you have a Home component

const App = () => {
  return (
    <Router>
      {" "}
      {/* Wrap the entire app in Router to enable routing */}
      <Routes>
        {/* Define routes for Home page and RecipeDetails page */}
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
