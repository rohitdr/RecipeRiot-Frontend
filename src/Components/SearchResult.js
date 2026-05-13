
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import useSearchRecipe from '../Hooks/useSearchRecipe'
import RecipeContext from '../Context/RecipeContext'
import { motion } from 'framer-motion'
import RecipeSkeleton from './Skeletons/RecipeSkeleton'
import RecipeItem from './RecipeItem'
import Pagination from './Pagination'
import NoRecipesFound from './NoResult'
export default function SearchResult() {
  const {searchRecipe}=useContext(RecipeContext)
  const {query}=useParams()
  const [page,setPage]=useState(1)
    const {data,isLoading}=useSearchRecipe(query,page,searchRecipe)

  return (
    <section className='min-h-screen bg-[#0b0f19] text-white py-24 px-3'>
   <div className='flex flex-col gap-6 max-w-7xl mx-auto '>
   <div className='rounded-3xl bg-gradient-to-r from-orange-500/20 to-red-500/10 border border-white/10 p-4 sm:p-8 '>
  
  
   <div className='text-orange-400 text-sm'>
      CATEGORY COLLECTION
   </div>
   <div className='flex gap-4 flex-col py-2'>
      <h1 className='text-2xl sm:text-4xl lg:text-6xl font-bold'>Search Results for "{query}"</h1>
           <p className='max-w-2xl text-white/70'>Explore handpicked recipes from this category—crafted for every craving, mood, and occasion</p>
   </div>
   <div className='flex gap-4 pt-4'>
   <div className='text-xs lg:text-base rounded-3xl bg-white/10 px-3 sm:px-4 py-2 '>{data?.totalResults || 0} Recipes</div>
    <div className=' text-xs lg:text-base rounded-3xl bg-white/10 px-3 sm:px-4 py-2'> Most Loved Category</div>
   </div> </div>

   <div className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 '>
       
    {!data && [...Array(10)].map((_,index) => (
              <div
                key={index}
             className="w-full sm:max-w-[280px] mx-auto"
              >
              <RecipeSkeleton></RecipeSkeleton>
              </div>
            ))}
        
   { data && data.recipe.map((recipe,index) => (
              <motion.div
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:1}}
              viewport={{once:true}}
                key={recipe._id}
             className="w-full sm:max-w-[280px] mx-auto"
              >
                <RecipeItem  recipe={recipe} />
              </motion.div>
            ))}
            {data && data?.recipe?.length===0 && <NoRecipesFound/>}
   </div>
 {data?.recipe?.length>0 &&<Pagination page={page} setPage={setPage} totalPages={data?.totalPages}></Pagination>}
   </div>
    </section>
  )
}
