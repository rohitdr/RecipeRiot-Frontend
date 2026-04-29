
import React from 'react'
import { motion } from 'framer-motion'
export default function Hero() {
  return (
  <section>
    <div className=' relative min-h-screen flex justify-center items-center overflow-hidden'>
       <div className='absolute inset-0 '>
        <img  
         src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920"
         alt="Food"
         className='h-full w-full object-cover' />
         
       </div>
       <div className='absolute inset-0 bg-black/60'></div>
    <motion.div
    initial={{opacity:0,y:40}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.8}}

    className='relative max-w-xl text-center p-2 sm:p-0'>
         <div className='leading-tight'>
          <span className='text-white font-extrabold text-4xl sm:text-6xl'>Cook Bold.</span>
          <span className='text-orange-400 font-extrabold text-4xl sm:text-6xl'>Share Loud.</span>
         </div>
         <p className='text-center text-white/60'>   Discover, create, and share crazy delicious recipes with the world.</p>
           <div className='flex justify-center gap-4 my-6'>
      <div className=''>
        <button type="button" className='text-white  bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2  rounded-lg shadow-xl hover:scale-105 transition'>Explore Recipe</button>
      </div>
      <div className=''>
        <button type="button" className='text-white bg-white/10 px-4 py-2 hover:scale-105  rounded-lg shadow-xl border border-white/40 transition'>Add Recipe</button>
      </div>
      </div>
      <div>
        <form action=""></form>
      </div>
    </motion.div>  
    
      </div>
  </section>
  )
}
