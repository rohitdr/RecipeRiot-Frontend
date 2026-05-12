
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import RecipeItem from './RecipeItem'
import { useParams } from 'react-router-dom'
import useRecipes from '../Hooks/useRecipes'
import RecipeContext from '../Context/RecipeContext'
import RecipeSkeleton from './Skeletons/RecipeSkeleton'
import { toast } from 'sonner'
import Pagination from './Pagination'
import NoRecipesFound from './NoResult'
import { toCamelCase } from '../Utility/Utility'
import usePrefetch from '../Hooks/PrefetchHooks/usePrefetch'

export default function CategoryRecipe() {
  const {categoryName,categoryType}=useParams()
  const {getRecipeByCategory}=useContext(RecipeContext)
  const [sort,setSort]=useState("Newest")
const {prefetchRecipe}=usePrefetch()
  const sortOptions=["Newest","Top Rated","Trending","Mintue Meals","Low Calories","High Calories"]
 const [page,setPage]=useState(1)
 useEffect(()=>{
setPage(1)
setSort("Newest")
 },[categoryName,categoryType])

  const {data,isLoading,isFetching}=useRecipes(categoryName.toLocaleLowerCase(),toCamelCase(categoryType),getRecipeByCategory,page,toCamelCase(sort))
 useEffect(()=>{
  if(page<data?.totalPages){
    
    prefetchRecipe({categoryName:categoryName.toLocaleLowerCase(),categoryType:toCamelCase(categoryType),getRecipes:getRecipeByCategory,page:page+1,sort:toCamelCase(sort)})
  }
 },[categoryName,categoryType,sort,page])

  const isMobile=window.innerWidth<640
const container={
  hidden:{opacity:1},
  show:{opacity:1,
    transition:{
      staggerChildren:isMobile?0.02:0.06
    }
  }
}
const item={
  hidden:{opacity:0,y:20,scale:0.95},
  show:{opacity:1,y:0,scale:1,
    transition:{
      duration:0.3,
      ease:"easeOut"
    }
  }
}
  return (
  <section className='min-h-screen bg-[#0b0f19] text-white py-24 px-3'>
 <div className='flex flex-col gap-6 max-w-7xl mx-auto '>
 <div className='rounded-3xl bg-gradient-to-r from-orange-500/20 to-red-500/10 border border-white/10 p-8 '>


 <div className='text-orange-400 text-sm'>
    CATEGORY COLLECTION
 </div>
 <div className='flex gap-4 flex-col py-2'>
    <h1 className='text-2xl sm:text-4xl lg:text-6xl font-bold'>{categoryName} Recipes</h1>
         <p className='max-w-2xl text-white/70'>Explore handpicked recipes from this category—crafted for every craving, mood, and occasion</p>
 </div>
 <div className='flex gap-4 pt-4'>
 <div className='text-xs lg:text-base rounded-3xl bg-white/10 px-2 sm:px-4 py-2 '>{data?.totalResults} Recipes</div>
  <div className=' text-xs lg:text-base rounded-3xl bg-white/10 px-2 sm:px-4 py-2'> Most Loved Category</div>
 </div> </div>
<div className="flex  gap-3 text-xs lg:text-base overflow-x-auto w-full ">
 {sortOptions.map((item)=>{
 return   <button onClick={()=>{setSort(item)}} className={`px-4 py-2 text-nowrap rounded-full  transition ${sort===item?"bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md shadow-orange-500/20":"bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"}`}>
    {item}
  </button>
 })}

</div>
 <motion.div variants={container} initial="hidden" animate="show" className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 px-4 '>
     
  {!data && [...Array(10)].map((_,index) => (
            <motion.div
            variants={item} 
              key={index}
           className="w-full sm:max-w-[280px] mx-auto"
            >
            <RecipeSkeleton></RecipeSkeleton>
            </motion.div>
          ))}
      
 {data?.recipe?.length > 0 && data.recipe.map((recipe,index) => (
            <motion.div
               variants={item} 
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
       { data?.recipe?.length === 0 && (
  <NoRecipesFound />
)}
 </motion.div>
 <Pagination page={page} setPage={setPage} totalPages={data?.totalPages}></Pagination>
{/* <div className="flex justify-center py-10 px-3">

  <div className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-xl px-3 sm:px-4 py-2 rounded-xl shadow-lg">

  
    <button disabled={page===1} onClick={()=>{setPage(prev=>prev-1)}} className="px-3 py-2 text-xs sm:text-sm text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition disabled:cursor-not-allowed">
      Prev
    </button>

  
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
  
    <button disabled={page===data?.totalPages} onClick={()=>{setPage(prev=>prev+1)}} className="px-3 py-2 text-xs sm:text-sm text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition disabled:cursor-not-allowed">
      Next
    </button>

  </div>
</div> */}
 </div>
  </section>
  )
}
