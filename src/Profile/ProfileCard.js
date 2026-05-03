import { motion } from 'framer-motion'
import React from 'react'

 import { FaCamera } from "react-icons/fa";
export default function ProfileCard() {
  return (
        <motion.div
       initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        className='flex flex-col gap-2 items-center bg-white/[0.03] border border-white/10 py-8 rounded-3xl h-fit'>
            <div className='relative w-fit '>
         <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"  className="w-32 h-32 rounded-full object-cover border-4 border-orange-500" alt="User Image" />
           <button className="absolute bottom-2 right-2 bg-orange-500 p-3 rounded-full text-black">
               <FaCamera />
             </button>
            </div>
            <h1 className="text-2xl font-bold pt-2">Rohit Kumar</h1>
            <p>rohitdr098@gmail.com</p>
            <div className="flex gap-3 text-center py-2">
              <div className="bg-white/5 p-3 rounded-2xl">
               <h3 className="font-bold text-orange-400">24</h3>
               <p className="text-xs text-white/50">Recipes</p>
             </div>

             <div className="bg-white/5 p-3 rounded-2xl">
               <h3 className="font-bold text-orange-400">18</h3>
               <p className="text-xs text-white/50">Saved</p>
             </div>

             <div className="bg-white/5 p-3 rounded-2xl">
               <h3 className="font-bold text-orange-400">120</h3>
               <p className="text-xs text-white/50">Followers</p>
            </div>
            </div>
        </motion.div>
  )
}
