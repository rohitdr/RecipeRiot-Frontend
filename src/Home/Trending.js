import React, { useContext, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import RecipeItem from "../Components/RecipeItem";
import useTrendingRecipe from "../Hooks/useTrendingRecipes";
import RecipeContext from "../Context/RecipeContext";
import { useNavigate } from "react-router-dom";
import RecipeSkeleton from "../Components/Skeletons/RecipeSkeleton";
export default function Trending() {
  const {getTrendingRecipe}=useContext(RecipeContext)
    const {data,isLoading}=useTrendingRecipe(getTrendingRecipe)
  return (
    <section className="px-6 py-10 sm:py-20 text-white ">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-lg   sm:text-xl    md:text-2xl lg:text-3xl font-bold">
              🔥 Trending Recipes
            </h2>
            <p className="text-white/50 text-sm mt-1">
              What people are cooking right now
            </p>
          </div>

          {/* <button className="text-sm text-orange-400 hover:text-orange-300 transition">
            View all →
          </button> */}
        </div>

        {/* Cards */}
        <div className="flex gap-8 overflow-x-auto overflow-y-hidden no-scrollbar">
  {isLoading && [...Array(7)].map((_,index)=>{return <div  key={index}   className="w-64 h-80 flex-shrink-0"><RecipeSkeleton/></div> })}
          {!isLoading && data && data?.recipes.map((recipe,index) => (
            <motion.div
              key={recipe._id}
               initial={{opacity:0,y:100,x:40}} whileInView={{opacity:1,y:0,x:0}} transition={{delay:index*0.01}} viewport={{once:true}}
              className="w-52 h-64 sm:w-64 sm:h-80 flex-shrink-0"
            >
              <RecipeItem  recipe={recipe} />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
 
  );
}