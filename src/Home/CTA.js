
import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
export default function CTA() {
  const Navigate=useNavigate()
  return (
   <section className=' relative  py-20 overflow-hidden px-6 text-white text-center'>
     <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-orange-500/20 blur-[150px] rounded-full"></div>
     <div className="absolute bottom-[-100px] right-10 w-[300px] h-[300px] bg-pink-500/20 blur-[150px] rounded-full"></div>

<div className=' flex justify-center items-center'>

   <div className='flex flex-col items-center'> 
    <motion.div
     initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
    >        <span className='text-2xl md:text-4xl font-extrabold'> Ready To Cook Something </span><span  className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent font-extrabold text-2xl  md:text-4xl">Amazing?</span>
  </motion.div>
    <p className="text-white/60 mt-3">
          Discover, cook, and share your favorite recipes with the community
     </p>
    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 z-10">
           <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={()=>Navigate(`/addRecipe`)}
            className="px-6 py-3 rounded-xl font-semibold 
            bg-gradient-to-r from-orange-500 to-pink-500 
            shadow-lg shadow-orange-500/20"
          >
            Start Cooking Now 🍳
          </motion.button>


           <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
             onClick={()=>Navigate(`/category/health/vegan`)}
            className="px-6 py-3 rounded-xl font-semibold 
            border border-white/20 hover:bg-white/10 transition"
          >
            Browse Recipes
           </motion.button>

        </div>
</div>
    

</div>
   </section>
  )
}
