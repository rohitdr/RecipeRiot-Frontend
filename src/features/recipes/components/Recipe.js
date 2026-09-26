import  {  useEffect, useState } from 'react'

import { Link } from 'react-router-dom'


import Pagination from '../../../Components/navigation/Pagination'
import NoRecipesFound from '../../../Components/feedback/NoResult'
import usePrefetchUserRecipe from '../../../Hooks/PrefetchHooks/usePrefetchUserRecipe'
import { useUserRecipes } from './../hooks/useUserRecipes';
import RecipeItem from '../../../Components/RecipeItem'
import RecipeSkeleton from './RecipeSkeleton'


export default function Recipe() {
const [page,setPage]=useState(1)
const{prefetchUserRecipe}=usePrefetchUserRecipe()
const {data,isLoading}=useUserRecipes(page)
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
 {data?.recipes?.length>0 &&<Link
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
   to={'/addrecipe'}
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
  </Link>}

</div>
{!isLoading && data?.recipe?.length !== 0 && 
<Pagination page={page} setPage={setPage} totalPages={data?.totalPages}></Pagination>}
</section>
  )
}
