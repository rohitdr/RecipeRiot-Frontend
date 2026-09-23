


import { useParams } from "react-router-dom";
import useRecipe from '../features/recipes/hooks/useRecipe';
import Hero from './../features/recipes/components/recipeDetails/Hero';
import Ingridients from './../features/recipes/components/recipeDetails/Ingridients';
import Nutrients from './../features/recipes/components/recipeDetails/Nutrients';
import HealthLabel from './../features/recipes/components/recipeDetails/HealthLabel';
import Comments from './../features/recipes/components/recipeDetails/Comments';
import ReviewForm from './../features/recipes/components/recipeDetails/ReviewForm';
import DietLabel from './../features/recipes/components/recipeDetails/DietLabel';
import AppLoader from './../Components/loaders/AppLoader';

export default function RecipeDetails() {
      const {recipeId}=useParams()
      const {data,isLoading}=useRecipe(recipeId)
   
 if(isLoading) return <AppLoader></AppLoader>
  return (
    <div className='relative min-h-screen overflow-hidden bg-[#06070d] text-white'>
       <Hero recipe={data?.recipe}></Hero>
       <Ingridients ingredientLines={data?.recipe?.ingredientLines}></Ingridients>
    <Nutrients totalNutrients={data?.recipe?.totalNutrients}/>
  <HealthLabel healthLabels={data?.recipe?.healthLabels}/>
  <DietLabel dietLabels={data?.recipe?.dietLabels} />


<section className="mx-auto max-w-7xl px-6 ">
<ReviewForm></ReviewForm>
<Comments ></Comments>
</section>
<section className="max-w-7xl mx-auto px-6 py-10 sm:py-24 text-center">
  <h1 className="text-3xl sm:text-5xl font-black text-white">
    Ready to cook something else?
  </h1>

  <p className="text-white/50 mt-4 max-w-xl mx-auto">
    Discover more delicious recipes crafted for every mood.
  </p>

  <button className="mt-8 px-8 py-4  rounded-full bg-orange-500 text-black font-bold hover:scale-105 transition">
    Explore More Recipes
  </button>
</section>

    </div>
  )
}
