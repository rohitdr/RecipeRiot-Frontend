import React, { useContext } from "react";
import { motion } from "framer-motion";
import RecipeItem from "../Components/RecipeItem";
import useFeaturedRecipe from "../Hooks/useFeaturedRecipe";
import RecipeContext from "../Context/RecipeContext";
import RecipeSkeleton from "../Components/Skeletons/RecipeSkeleton";
export default function Featured() {
  const {getFeaturedRecipe}=useContext(RecipeContext) 
    const {data,isLoading}=useFeaturedRecipe(getFeaturedRecipe) 
 
  return (
<section className="relative px-4 py-24 text-white overflow-hidden ">
  {/* glow */}
  <div className="absolute top-[-80px] right-[-80px] w-[250px] h-[250px] bg-orange-500/10 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-[-80px] left-[-80px] w-[250px] h-[250px] bg-pink-500/10 blur-[120px] rounded-full"></div>
  <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className=" text-xl sm:text-2xl lg:text-4xl font-extrabold">
            ⭐ Featured <span className="text-orange-400">Recipes</span>
          </h2>
          <p className="text-white/60 mt-2 text-xs sm:text-base">
            Handpicked recipes you shouldn’t miss
          </p>
        </motion.div>

        {/* 🔥 GRID (different from trending) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8 lg:gap-y-6">

  {/* BIG CARD */}
 <div className="col-span-2 row-span-2">
   {isLoading &&  <RecipeSkeleton /> }
    {!isLoading && data && <RecipeItem  size="feautedLarge" recipe={data?.recipes[0]} />}
  </div>

  {/* SMALL CARDS */}
  {isLoading && [...Array(4)].map((_,index)=>{return <RecipeSkeleton key={index}/> })}
  {!isLoading && data && data?.recipes.slice(1).map((recipe) => (
    <div className="" key={recipe._id}>
        
        <RecipeItem size="feautedNormal"  recipe={recipe} />

    </div>
  ))}

</div>

      </div>
    </section>
  );
}
