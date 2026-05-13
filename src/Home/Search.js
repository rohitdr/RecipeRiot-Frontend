
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner';
export default function Search() {
  const Navigate=useNavigate();
    const [query,setQuery]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!query.trim()){
toast.info("Enter something to search")
          return
        }
        setQuery("")
        setTimeout(() => {
            Navigate(`/search/${query}`)
        }, 0);
       
    }
  return (
   <section className='relative -mt-32 sm:-mt-20 z-20 px-5 sm:px-0'>
    <motion.div 
    className=' max-w-3xl mx-auto'
       initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
    >
        <form onSubmit={handleSubmit} className='flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-4 py-3 shadow-xl'>
    <input type="search" name="search" id="home-search" value={query} onChange={(e)=>{setQuery(e.target.value)}}  className='w-full flex-1 px-4 text-white outline-none rounded-xl bg-transparent placeholder:text-white/50'/>
    <button
    className="ml-3 px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium hover:scale-105 transition"
    type='submit'
     >
        Search
    </button>
        </form>
        <div className='flex gap-3 justify-center overflow-x-auto py-4 px-5 mt-5'>
            {["Healthy", "Desserts", "Breakfast", "Vegan", "Indian"].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-xs sm:text-sm hover:bg-white/20 transition"
            >
              {tag}
            </button>
          ))}

        </div>

    </motion.div>

   </section>
  )
}
