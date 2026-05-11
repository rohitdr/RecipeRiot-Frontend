import React, { useContext, useState } from 'react'
import RecipeItem from '../Components/RecipeItem'
import AuthContext from '../Context/AuthContext'
import { useLikedRecipesList } from '../Hooks/useLikedRecipesList'
import Pagination from '../Components/Pagination'
import RecipeSkeleton from '../Components/Skeletons/RecipeSkeleton'
import NoRecipesFound from '../Components/NoResult'
export default function Liked() {
  const [page,setPage]=useState(1)
const {Me}=useContext(AuthContext)
const {data:likedRecipes,isLoading}=useLikedRecipesList(page,Me)
  return (
  <section className='max-w-7xl mx-auto'>
  <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
  {isLoading && [...Array(10)].map((_,index)=>  <div key={index}  className="w-full max-w-[280px] mx-auto">
          <RecipeSkeleton  />
  </div>)}
    {!isLoading && likedRecipes?.recipes?.length>0 && likedRecipes?.recipes?.map((recipe) => (
      <div key={recipe._id}  className="w-full max-w-[280px] mx-auto">
          <RecipeItem  recipe={recipe} />
  </div>
    ))}
    {!isLoading && likedRecipes?.recipes?.length === 0 && (
  <NoRecipesFound />
)}
    </div>{ likedRecipes?.recipes?.length !== 0 && <Pagination page={page} setPage={setPage} totalPages={likedRecipes?.totalPages}></Pagination>}
  
  </section>
  )
}
