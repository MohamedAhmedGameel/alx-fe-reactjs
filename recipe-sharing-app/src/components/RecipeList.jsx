// src/components/SearchBar.jsx

import React from "react";
import { useRecipeStore } from "../store/recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term); // Update the search term in the store
    filterRecipes(); // Filter recipes whenever the search term changes
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={handleChange}
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;
