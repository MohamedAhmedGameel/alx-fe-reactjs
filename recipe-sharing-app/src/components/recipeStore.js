// src/store/recipeStore.js

import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
    searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )})),

  
  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  
  // Set multiple recipes (e.g., when fetching from an API)
  setRecipes: (recipes) => set({ recipes }),

  // Update an existing recipe
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),

  // Delete a recipe by ID
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
  })),
}));

export default useRecipeStore;
