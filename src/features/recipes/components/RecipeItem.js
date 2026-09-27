import { motion } from "framer-motion";

import { useRecipeCard } from "../hooks/useRecipeCard";
import RecipeBottom from "./recipeCard/RecipeBottom";
import RecipeTop from "./recipeCard/RecipeTop";
import RecipeImageOverlay from "./recipeCard/RecipeImageOverlay";
import DeleteRecipeDialog from './../../../Components/DailogBoxes/DangerDailogBox';
export default function RecipeItem({recipe,variant="normal",editable=false, mode}) {
  const {
isLiked,
handleDelete,
handleEdit,
handleEditHover,
handleLike,
handleView,
handleRecipeHover,
 isLiking,
    isDeleting,
    openDailogBox,
    setOpenDailogBox
}=useRecipeCard(recipe)

const sizeClass={
  normal:{
    footerPadding:"",
    titleSize:"text-lg",
    ratingPadding:"px-2 py-1",
    likePadding:"px-2 py-2"
  },
  feautedNormal:{
    footerPadding:"",
    titleSize:" text-sm md:text-lg",
    ratingPadding:"px-2 py-1",
    likePadding:"px-2 py-2"
  },
  feautedLarge:{
    footerPadding:"py-3 px-8",
     titleSize:"text-xl md:text-3xl",
       ratingPadding:"px-4 py-3",
     likePadding:"px-4 py-4"
  }
}



  return (
    <motion.article
initial="rest" whileHover="hover"  animate="rest"
      onMouseEnter={handleRecipeHover}
      className={`relative w-full aspect-[4/5]
  md:aspect-[3/4]
  lg:aspect-[1/1] rounded-2xl overflow-hidden cursor-pointer group`}
    >
   <RecipeImageOverlay recipe={recipe}></RecipeImageOverlay>

      {/* Top Info (minimal) */}
    <RecipeTop size={sizeClass[variant]} handleLike={handleLike} recipe={recipe} isLiked={isLiked} isLiking={isLiking} ></RecipeTop>
      <RecipeBottom recipe={recipe} editable={editable} mode ={mode} handleEdit={handleEdit} handleView ={handleView} handleEditHover={handleEditHover} setOpenDailogBox={setOpenDailogBox}></RecipeBottom>
      <DeleteRecipeDialog open={openDailogBox} setOpen={setOpenDailogBox} handleDelete={handleDelete} pending={isDeleting}></DeleteRecipeDialog>
    </motion.article>
  );
}