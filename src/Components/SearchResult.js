
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import useSearchRecipe from '../Hooks/useSearchRecipe'
import RecipeContext from '../Context/RecipeContext'
import { motion } from 'framer-motion'
import RecipeSkeleton from './Skeletons/RecipeSkeleton'
import RecipeItem from './RecipeItem'


export default function SearchResult() {
  const {searchRecipe}=useContext(RecipeContext)
  const {query}=useParams()
  const [page,setPage]=useState(1)
    const {data,isLoading}=useSearchRecipe(query,page,searchRecipe)

  return (
    <section className='min-h-screen bg-[#0b0f19] text-white py-24 px-3'>
   <div className='flex flex-col gap-6 max-w-7xl mx-auto '>
   <div className='rounded-3xl bg-gradient-to-r from-orange-500/20 to-red-500/10 border border-white/10 p-8 '>
  
  
   <div className='text-orange-400 text-sm'>
      CATEGORY COLLECTION
   </div>
   <div className='flex gap-4 flex-col py-2'>
      <h1 className='text-2xl sm:text-4xl lg:text-6xl font-bold'>Search Results for "{query}"</h1>
           <p className='max-w-2xl text-white/70'>Explore handpicked recipes from this category—crafted for every craving, mood, and occasion</p>
   </div>
   <div className='flex gap-4 pt-4'>
   <div className='text-xs lg:text-base rounded-3xl bg-white/10 px-2 sm:px-4 py-2 '>{data?.totalResults || 0} Recipes</div>
    <div className=' text-xs lg:text-base rounded-3xl bg-white/10 px-2 sm:px-4 py-2'> Most Loved Category</div>
   </div> </div>
  <div className="flex flex-wrap gap-3 text-xs lg:text-base">
  
    <button className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition">
      Newest
    </button>
  
    <button className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md shadow-orange-500/20">
      Trending
    </button>
  
    <button className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition">
      Quick Meals
    </button>
  
    <button className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition">
      Top Rated
    </button>
  
  </div>
   <div className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 '>
       
    {isLoading && [...Array(10)].map((_,index) => (
              <div
                key={index}
             className="w-full max-w-[280px] mx-auto"
              >
              <RecipeSkeleton></RecipeSkeleton>
              </div>
            ))}
        
   {!isLoading&& data && data.recipe.map((recipe,index) => (
              <motion.div
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:1}}
              viewport={{once:true}}
                key={recipe._id}
             className="w-full max-w-[280px] mx-auto"
              >
                <RecipeItem  recipe={recipe} />
              </motion.div>
            ))}
   </div>
  <div className="flex justify-center py-10 px-3">
  
    <div className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-xl px-3 sm:px-4 py-2 rounded-xl shadow-lg">
  
      {/* Prev */}
      <button disabled={page===1} onClick={()=>{setPage(prev=>prev-1)}} className="px-3 py-2 text-xs sm:text-sm text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition disabled:cursor-not-allowed">
        Prev
      </button>
  
      {/* Page numbers (responsive visibility) */}
      <div className="flex items-center gap-1 sm:gap-2">
        {Array.from({length:data?.totalPages||0}).slice(Math.max(page-3,0),Math.min(page+2,data?.totalPages)).map((_,i)=>{
          const pageNumber = Math.max(page-3,0)+i+1
          return <button key={i} onClick={()=>{setPage(pageNumber)}} className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-xs sm:text-sm  transition   ${
            pageNumber === page
              ? "bg-white text-black font-semibold"
              : "text-white/60 hover:bg-white/10 hover:text-white"
          }`}>
        {pageNumber}
        </button>
        })}
      
      </div>
      {/* Next */}
      <button disabled={page===data?.totalPages} onClick={()=>{setPage(prev=>prev+1)}} className="px-3 py-2 text-xs sm:text-sm text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition disabled:cursor-not-allowed">
        Next
      </button>
  
    </div>
  </div>
   </div>
    </section>
  )
}
