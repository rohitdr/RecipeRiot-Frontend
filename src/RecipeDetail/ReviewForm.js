import { motion } from 'framer-motion'
import React from 'react'
import { FaStar } from 'react-icons/fa'
export default function ReviewForm() {
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
            className="hover:text-orange-400 transition"
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
          resize-none"  placeholder="Share Your Cooking Experience...."></textarea>
      </div>
      <button className=" my-2 px-4 py-1 sm:px-6 sm:py-3
        rounded-full
        bg-orange-500
        text-black
        font-semibold
        hover:scale-105
        transition">
        Post Review
      </button>
    </motion.div>
</div>
  )
}
