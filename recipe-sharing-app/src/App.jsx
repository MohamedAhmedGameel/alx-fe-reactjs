// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import Home from "./components/Home";
import AddRecipeForm from "./components/AddRecipeForm"; // Import AddRecipeForm

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />{" "}
        {/* Route for AddRecipeForm */}
      </Routes>
    </Router>
  );
};

export default App;
