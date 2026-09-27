import React from 'react'
import { FaHeart } from 'react-icons/fa'
export default function RecipeTop({recipe,isLiked,isLiking,handleLike,size}) {
  return (
     <div className="absolute top-3 left-3 right-3 flex justify-between items-center text-xs">
        <span className={`bg-black/60 ${size.ratingPadding} px-2 py-1 rounded-full text-orange-400 backdrop-blur`}>
          ⭐ {recipe?.averageRating || 0}
        </span>

        <button disabled={isLiking} onClick={handleLike} className={`bg-black/60 ${size.likePadding}  rounded-full backdrop-blur hover:scale-110`}>
          <FaHeart className={`${isLiked?"text-red-600":"text-white/70"}`} ></FaHeart>
        </button>
      </div>
  )
}
