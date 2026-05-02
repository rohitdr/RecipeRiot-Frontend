import React from 'react'
import { motion } from 'framer-motion'
export default function Hero({recipe}) {
  return (
    <section className='relative h-screen flex overflow-hidden items-end py-2 '>
       
         <motion.img
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
             transition={{ duration: 1.5 }}
              src={recipe.image.url} className='absolute w-full h-full object-cover' alt="recipe image" loading='lazy' />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-pink-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06070d] via-orange-900/20 to-transparent" />

         <div className=' flex flex-col px-5 md:px-20 py-20 max-w-4xl gap-4'>
  <h1 className='relative text-4xl md:text-7xl font-extrabold'>{recipe.label}</h1>
        <p className='relative  text-white/70'>By {recipe.source}</p>
        
         <div className='relative flex flex-wrap gap-4'>
         <span className='text-black font-bold  rounded-full px-3 py-1 bg-orange-500 hover:scale-110 transition '>
          🔥 {Math.round(recipe.calories)} kcal
            </span>
         <span className='bg-white/5 font-bold border-white/20 border px-3 py-1 rounded-full hover:scale-110 transition hover:border-orange-500'>Healthy</span>
         <span className='bg-white/5 px-3 py-1 font-bold border-white/20 border rounded-full hover:scale-110 transition hover:border-orange-500'>{recipe.dishType}</span>
         <span className='bg-white/5 px-3 py-1 font-bold border-white/20 border rounded-full hover:scale-110 transition hover:border-orange-500'>{recipe.mealType}</span>
         <span className='bg-white/5 px-3 py-1 font-bold border-white/20 border rounded-full hover:scale-110 transition hover:border-orange-500'>{recipe.cuisineType}</span>
         </div>
       </div>
        </section>
  )
}
