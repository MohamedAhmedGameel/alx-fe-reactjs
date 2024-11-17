// src/components/DeleteRecipeButton.jsx

import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId); // Delete the recipe from the store
      navigate("/"); // Navigate back to the home page or a different route after deletion
    }
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
