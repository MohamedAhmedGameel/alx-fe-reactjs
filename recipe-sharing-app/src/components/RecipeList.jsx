// src/components/RecipeList.jsx

import React from "react";
import { useRecipeStore } from "../store/recipeStore";
import { Link } from "react-router-dom"; // Import Link for navigation

const RecipeList = () => {
  // Get filtered recipes from Zustand store
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  // If no filtered results, show all recipes
  const recipes =
    filteredRecipes.length > 0
      ? filteredRecipes
      : useRecipeStore((state) => state.recipes);

  return (
    <div className="recipe-list">
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`} className="view-recipe-link">
              View Recipe
            </Link>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
