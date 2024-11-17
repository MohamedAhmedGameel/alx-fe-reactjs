// src/store/recipeStore.js

import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [], // Array to store favorite recipe IDs
  recommendations: [], // Array to store recommended recipes

  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId],
  })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId),
  })),

  // Generate personalized recommendations based on favorite recipes
  generateRecommendations: () => set(state => {
    // Simple recommendation logic based on the user's favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // Set recipes data
  setRecipes: (recipes) => set({ recipes }),

  // Set favorites data (if needed for external sources)
  setFavorites: (favorites) => set({ favorites }),

}));

export default useRecipeStore;
