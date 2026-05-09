
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useContext, useEffect } from 'react'
import Hero from "../RecipeDetail/Hero";
import Ingridients from "../RecipeDetail/Ingridients";
import Nutrients from "../RecipeDetail/Nutrients";
import HealthLabel from "../RecipeDetail/HealthLabel";
import Comments from "../RecipeDetail/Comments";
import ReviewForm from "../RecipeDetail/ReviewForm";
import { useParams } from "react-router-dom";
import useRecipe from "../Hooks/useRecipe";
import RecipeContext from "../Context/RecipeContext";
import DietLabel from "../RecipeDetail/DietLabel";

export default function RecipeDetails() {
  const {getRecipeById}=useContext(RecipeContext)
      const {recipeId}=useParams()
      const {data,isLoading}=useRecipe(recipeId,getRecipeById)
      useEffect(()=>{
        if(!data) return
console.log(data)
      },[data])
 if(isLoading) return "hood"
  return (
    <div className='relative min-h-screen overflow-hidden bg-[#06070d] text-white'>
       <Hero recipe={data?.recipe}></Hero>
       <Ingridients ingredientLines={data?.recipe?.ingredientLines}></Ingridients>
    <Nutrients totalNutrients={data?.recipe?.totalNutrients}/>
  <HealthLabel healthLabels={data?.recipe?.healthLabels}/>
  <DietLabel dietLabels={data?.recipe?.dietLabels} />


<section className="mx-auto max-w-7xl px-6 ">
<ReviewForm></ReviewForm>
<Comments></Comments>
</section>
<section className="max-w-7xl mx-auto px-6 py-24 text-center">
  <h1 className="text-3xl sm:text-5xl font-black text-white">
    Ready to cook something else?
  </h1>

  <p className="text-white/50 mt-4 max-w-xl mx-auto">
    Discover more delicious recipes crafted for every mood.
  </p>

  <button className="mt-8 px-8 py-4 rounded-full bg-orange-500 text-black font-bold hover:scale-105 transition">
    Explore More Recipes
  </button>
</section>

    </div>
  )
}
