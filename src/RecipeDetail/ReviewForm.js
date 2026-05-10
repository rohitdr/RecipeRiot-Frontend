import { motion } from 'framer-motion'
import React, { useContext, useState } from 'react'
import { FaStar,FaSpinner } from 'react-icons/fa'
import { usePostCommnetMutation } from '../Mutations/RecipeMutation'
import AuthContext from '../Context/AuthContext'
import { toast } from 'sonner'
import { useNavigate, useParams } from 'react-router-dom'
export default function ReviewForm() {
  const navigate=useNavigate()
  const {handleError,Me}=useContext(AuthContext)
  const [rating,setRating]=useState(0)
  const [hoverStar,setHoverStar]=useState(0)
  const {recipeId}=useParams() 
   const [comment,setComment]=useState("")
   const commentMutation=usePostCommnetMutation(recipeId,handleError)
   const handleChange=({target:{value}})=>{
setComment(value)
   }
   const handleClick=()=>{
    if(!comment.length){
        toast.error("Comment cannot be blank")
        return
    }
  if(comment.length<4){
    toast.error("Comment Should be more than 4 characters")
    return
  }
   if(!Me){
    navigate('/login')
    return
  }
  const payload={recipeId,comment,rating}
  commentMutation.mutate(payload)
   }
  return (
   <div>
    <div className="">
        <h1 className=" text-3xl md:text-5xl font-extrabold ">Review & Ratings</h1>
        <p className="text-white/70 py-2">What food lovers are saying about this reciepe</p>
    </div>
    <motion.div 
       initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="  my-2 bg-white/[0.03]
      border border-white/10
      backdrop-blur-xl rounded-3xl px-4 sm:px-8 py-6">
        <h2 className=" text-xl sm:text-2xl font-bold">Leave Your Review</h2>
      <p className="mt-6 text-white/70">Your Rating</p>
    
      <div className="flex gap-2 text-2xl text-white/30 cursor-pointer mt-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            onClick={()=>{setRating(prev=>prev===1?0:star)}}
            onMouseEnter={()=>{setHoverStar(star)}}
            onMouseLeave={()=>{setHoverStar(0)}}
            className={`${(rating>=star || hoverStar>=star) && "text-orange-400"} transition  `}
          />
        ))}
      </div>
      <div>
      <textarea className=" w-full h-24 sm:h-32
          rounded-2xl
          bg-black/20
          border border-white/10
          p-4
          text-white
          placeholder:text-white/40
          outline-none
          focus:border-orange-400/30
          resize-none" onChange={handleChange}  placeholder="Share Your Cooking Experience...."></textarea>
      </div>
      <button type='submit' disabled={!comment.length || commentMutation.isPending} onClick={handleClick} className=" my-2 px-4 py-1 sm:px-6 sm:py-3
        rounded-full
        bg-orange-500
        text-black
        font-semibold
        hover:scale-105
        transition
        disabled:cursor-not-allowed
        disabled:opacity-30">
        {commentMutation.isPending?<FaSpinner className='animate-spin text-white'></FaSpinner>:"Post Review"}
      </button>
    </motion.div>
</div>
  )
}
