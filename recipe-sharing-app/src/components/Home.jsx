// src/components/Home.jsx

import React from "react";
import { useRecipeStore } from "../store/recipeStore";
import FavoritesList from "./FavoritesList";
import RecommendationsList from "./RecommendationsList";

const Home = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  const handleFavoriteToggle = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId); // Remove from favorites
    } else {
      addFavorite(recipeId); // Add to favorites
    }
  };

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <div>
        <h2>All Recipes</h2>
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => handleFavoriteToggle(recipe.id)}>
              {favorites.includes(recipe.id)
                ? "Remove from Favorites"
                : "Add to Favorites"}
            </button>
          </div>
        ))}
      </div>
      <FavoritesList /> {/* Display the list of favorite recipes */}
      <RecommendationsList /> {/* Display personalized recommendations */}
    </div>
  );
};

export default Home;
