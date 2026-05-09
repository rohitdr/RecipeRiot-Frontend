import { motion } from "framer-motion";
import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { useLikeMutation } from "../Mutations/userMutations";

export default function RecipeItem({recipe,size="normal", edit=null}) {
const Navigate=useNavigate()
const {Me,likeRecipe,handleError}=useContext(AuthContext)
const likeRecipeMutation=useLikeMutation(handleError)
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
  const rating =
    recipe?.Comments?.length > 0
      ? recipe.Comments[0].rating
      : 0;

  const user = recipe?.Comments?.[0];
const handleLikeClick=()=>{
likeRecipeMutation.mutate(recipe)
}
const isLiked = Me?.likedRecipes?.some(
  (liked) =>
    liked?._id === recipe?._id || liked === recipe?._id
)
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`relative w-full aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer group`}
    >
      {/* Image */}
      <motion.img
        src={recipe?.image?.url}
        alt={recipe?.label}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.15 }
        }}
        transition={{ duration: 0.5 }}
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
          ⭐ {rating}
        </span>

        <button disabled={likeRecipeMutation.isPending} onClick={handleLikeClick} className={`bg-black/60 ${sizeClass[size].likePadding}  rounded-full backdrop-blur`}>
          <FaHeart className={`${isLiked?"text-red-600":"text-white/70"}`} ></FaHeart>
        </button>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 w-full p-4">
        
        {/* Title */}
        <h2 className={`text-white ${sizeClass[size].titleSize}  font-bold leading-tight`}>
          {recipe?.label}
        </h2>

        {/* Reveal Section */}
      {!edit && <motion.div
          className="mt-2 flex justify-between items-center"
          variants={{
            rest: { opacity: 0, y: 20 },
            hover: { opacity: 1, y: 0 }
          }}
          transition={{ delay: 0.1 }}
        >
          {/* User */}
          {user && (
            <div className="flex items-center gap-2">
              <img
                src={user.Profileimage}
                className="w-6 h-6 rounded-full border border-orange-400"
              />
              <span className="text-[11px] text-gray-300">
                {user.username}
              </span>
            </div>
          )}

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={()=>{Navigate(`/recipePage/${recipe._id}`)}}
            className={`text-xs px-3 py-1 ${sizeClass[size].footerPadding} rounded-full bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg shadow-orange-500/30 ${size==="large" && ""}`}
          >
            View →
          </motion.button>
        </motion.div>}
      {edit && <motion.div
          className="mt-2 flex justify-between items-center"
          variants={{
            rest: { opacity: 0, y: 20 },
            hover: { opacity: 1, y: 0 }
          }}
          transition={{ delay: 0.1 }}
        >
         

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`text-xs px-3 py-1 ${sizeClass[size].footerPadding} rounded-full bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg shadow-orange-500/30 ${size==="large" && ""}`}
          >
          edit
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`text-xs px-3 py-1 ${sizeClass[size].footerPadding} rounded-full bg-red-500 border border-red-500/30 shadow-lg shadow-orange-500/30 ${size==="large" && ""}`}
          >
           delete
          </motion.button>
        </motion.div>}
        
      </div>
    </motion.div>
  );
}