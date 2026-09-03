import React, { useContext, useEffect, useState } from 'react'
import RecipeItem from '../Components/RecipeItem'
import AuthContext from '../Context/AuthContext'
import Pagination from '../Components/Pagination'
import { useUserRecipes } from '../Hooks/useUserRecipes'
import { useNavigate } from 'react-router-dom'
import RecipeSkeleton from '../Components/Skeletons/RecipeSkeleton'
import NoRecipesFound from '../Components/NoResult'
import usePrefetch from '../Hooks/PrefetchHooks/usePrefetch'
import usePrefetchUserRecipe from '../Hooks/PrefetchHooks/usePrefetchUserRecipe'

export default function Recipe() {
const {Me}=useContext(AuthContext)
const [page,setPage]=useState(1)
const navigate=useNavigate()
const{prefetchUserRecipe}=usePrefetchUserRecipe()
const {data,isLoading}=useUserRecipes(page,Me)
useEffect(()=>{
  if(page<data?.totalPages){
    prefetchUserRecipe(page+1)
  }
},[page])
  return (
<section className='max-w-7xl mx-auto'>
<div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 px-4 sm:px-2">
  {isLoading && [...Array(10)].map((_,index)=>  <div key={index}  className="w-full sm:max-w-[280px] mx-auto">
            <RecipeSkeleton  />
    </div>)}
  {!isLoading && data?.recipes?.length>0 &&data?.recipes?.map((recipe) => (
    <div key={recipe._id} className='w-full sm:max-w-[280px] mx-auto'>
        <RecipeItem  recipe={recipe} edit="true"/>
        </div>
  ))}
  {!isLoading && data?.recipe?.length === 0 && (
  <NoRecipesFound />
)}
 {data?.recipes?.length>0 &&<button
    className="
      h-full min-h-[320px]
      flex flex-col items-center justify-center
      rounded-3xl
      border-2 border-dashed border-orange-400/40
      bg-orange-500/5
      hover:bg-orange-500/10
      hover:scale-[1.02]
      transition
      cursor-pointer
    "
    onClick={()=>{navigate('/addrecipe')}}
  >
    
    <div className="text-6xl text-orange-400 mb-4">
      +
    </div>

    <h2 className="text-2xl font-bold">
      Add New Recipe
    </h2>

    <p className="text-white/50 mt-2 text-center px-6">
      Share your next delicious creation with RecipeRiot.
    </p>
  </button>}

</div>
{!isLoading && data?.recipe?.length !== 0 && 
<Pagination page={page} setPage={setPage} totalPages={data?.totalPages}></Pagination>}
</section>
  )
}
