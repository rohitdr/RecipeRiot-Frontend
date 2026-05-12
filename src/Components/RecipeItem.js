import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { useLikeMutation } from "../Mutations/userMutations";
import DeleteRecipeDialog from "./DailogBoxes/DangerDailogBox";
import { useRecipeDeleteMutation } from "../Mutations/RecipeMutation";
import usePrefetchRecipe from "../Hooks/PrefetchHooks/usePrefetchRecipe";
import useHoverPrefetch from "../Hooks/PrefetchHooks/useHoverPrefetch";
import useIsMobile from "../Utility/useIsMobile";

export default function RecipeItem({recipe,size="normal",edit=null, mode}) {
const navigate=useNavigate()
const {Me,likeRecipe,handleError}=useContext(AuthContext)
const recipeDeleteMutation=useRecipeDeleteMutation(handleError)
const likeRecipeMutation=useLikeMutation(handleError)
const [openDailogBox,setOpenDailogBox]=useState(false)
const [isOpen, setIsOpen] = useState(false);
const {prefetchRecipe}=usePrefetchRecipe()
const {handleHover}=useHoverPrefetch(prefetchRecipe)
const isMobile=useIsMobile()
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
const handleEditMouseEnter=()=>{
if(Me?._id===recipe?.user?._id){
handleHover(recipe._id)
}
}
const handleRecipeDeleteClick=()=>{
recipeDeleteMutation.mutate(recipe._id,{
  onSuccess:()=>{
    setOpenDailogBox(false)
  }
})
}
const handleLikeClick=()=>{
  if(!Me){
    navigate('/login')
    return
  }
likeRecipeMutation.mutate(recipe)
}
const isLiked = Me?.likedRecipes?.some(
  (liked) =>
    liked?._id === recipe?._id || liked === recipe?._id
)
const handleEditClick=()=>{
  if(isMobile){
    prefetchRecipe(recipe._id)
  }
  navigate(`/editRecipe/${recipe._id}`)
}
const handleViewClick=()=>{
  if(isMobile){
    prefetchRecipe(recipe._id)
  }
 navigate(`/recipePage/${recipe._id}`)
}
const handleOpen = () => {
  setIsOpen(true);
};

const handleClose = () => {
  setIsOpen(false);
};
  return (
    <motion.div
initial="rest" whileHover="hover"  animate="rest"
      onMouseEnter={()=>{handleHover(recipe._id)}}
      className={`relative w-full aspect-[4/5]
  md:aspect-[3/4]
  lg:aspect-[1/1] rounded-2xl overflow-hidden cursor-pointer group`}
    >
      {/* Image */}
      <motion.img
        src={recipe?.image?.url}
        alt={recipe?.label}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
     variants={{ rest: { scale: 1 }, hover: { scale: 1.15 } }} transition={{ duration: 0.5 }}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
        variants={{
          rest: { opacity: 0.6 },
          hover: { opacity: 0.9 }
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Glow sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        variants={{ hover: { x: "100%" } }}
        transition={{ duration: 0.8 }}
      />

      {/* Top Info (minimal) */}
      <div className="absolute top-3 left-3 right-3 flex justify-between items-center text-xs">
        <span className={`bg-black/60 ${sizeClass[size].ratingPadding} px-2 py-1 rounded-full text-orange-400 backdrop-blur`}>
          ⭐ {recipe?.averageRating || 0}
        </span>

        <button disabled={likeRecipeMutation.isPending} onClick={handleLikeClick} className={`bg-black/60 ${sizeClass[size].likePadding}  rounded-full backdrop-blur hover:scale-110`}>
          <FaHeart className={`${isLiked?"text-red-600":"text-white/70"}`} ></FaHeart>
        </button>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 w-full p-4">
        
        {/* Title */}
     <h2 className="text-white font-bold line-clamp-2 leading-tight text-[clamp(0.9rem,1.2vw,1.4rem)] ">
          {recipe?.label}
        </h2>

        {/* Reveal Section */}
      {!edit && <div className="
  mt-2 flex justify-between items-center
  opacity-100 md:opacity-0 md:translate-y-20 md:group-hover:translate-y-0 md:group-hover:opacity-100
  transition-all duration-300
">
          {/* User */}
            <div className="flex items-center gap-2 min-w-0">
              <img
                src={recipe?.user?.profileImage?.url ||  "https://res.cloudinary.com/do2twyxai/image/upload/v1776313793/e4jvjyvfwvvo0kyalzie.jpg" }
                className="w-6 h-6 rounded-full border border-orange-400 shrink-0"
                alt="Recipe User"
                  loading='lazy'
              />
              <span className="text-[11px] text-gray-300 truncate max-w-[80px] sm:max-w-[120px]">
                {recipe?.user?.username || "Rohit"}
              </span>
            </div>
         

          {/* Button */}
         {mode !=="view" && <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleViewClick}
            className="shrink-0
      text-[10px] sm:text-xs md:text-sm
      px-2 sm:px-3 md:px-4
      py-1 sm:py-1.5
      rounded-full
      bg-gradient-to-r
      from-orange-500
      to-pink-500
      shadow-lg
      shadow-orange-500/30
      whitespace-nowrap"
          >
            View →
          </motion.button>}
        </div>}
      {edit &&  <div className="
  mt-2 flex justify-between items-center
  opacity-100 md:opacity-0 md:translate-y-20 md:group-hover:translate-y-0 md:group-hover:opacity-100
  transition-all duration-300
">

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleEditClick}
            onMouseEnter={handleEditMouseEnter}
           className="shrink-0
        text-[10px] sm:text-xs 
      px-5 sm:px-3 
      py-2 sm:py-1
      rounded-full
      bg-gradient-to-r
      from-orange-500
      to-pink-500
      shadow-lg
      shadow-orange-500/30
      whitespace-nowrap"
          
          >
          Edit
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={()=>{setOpenDailogBox(true)}}
            className="shrink-0
      text-[10px] sm:text-xs 
      px-5 sm:px-3 
      py-2 sm:py-1
      rounded-full
      bg-gradient-to-r
      from-orange-500
      to-pink-500
      shadow-lg
      shadow-orange-500/30
      whitespace-nowrap"
          >
           Delete
          </motion.button>
        </div>}
        
      </div>
      <DeleteRecipeDialog open={openDailogBox} setOpen={setOpenDailogBox} handleDelete={handleRecipeDeleteClick} pending={recipeDeleteMutation.isPending}></DeleteRecipeDialog>
    </motion.div>
  );
}