

 import { motion } from "framer-motion";
 import {  FaSpinner } from "react-icons/fa";

import RecipePreview from './../features/recipes/components/addRecipe/RecipePreview';
import Ingredients from './../features/recipes/components/addRecipe/Ingredients';
import RecipeForm from './../features/recipes/components/addRecipe/RecipeForm';
import Nutrients from './../features/recipes/components/addRecipe/Nutrients';

import useRecipeForm from './../features/recipes/hooks/useRecipeForm';
import useMe from "../features/profile/hooks/useMe";


export default function AddRecipe() {
const {data:Me}=useMe()
 const  {
    formData,
    setFormData,

    image,
    setImage,

    handleSubmit,

    isEditMode,
    isPending,

    autoImageMutation,
  }=useRecipeForm()
  return (
   <section className="min-h-screen bg-[#06070d] text-white px-2 md:px-16 py-20">
      <motion.div
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      className="text-center my-8">
<h1 className=" text-3xl sm:text-5xl font-bold">Share Your Recipe</h1>
<p className="text-gray-400 text-xs sm:text-base mt-3">
          Turn your cooking magic into something the world can try.
         </p>
         <span className="inline-block mt-4 px-4 text-xs sm:text-base py-2 rounded-full bg-orange-500/20 text-orange-400">
           Chef Mode On 👨‍🍳
         </span>
      </motion.div>
      <div className="grid lg:grid-cols-2 gap-3">
          <div   className="bg-white/5 backdrop-blur-lg p-4 md:p-8 rounded-3xl border border-white/10">
           <RecipeForm formData={formData} autoImageMutation={autoImageMutation}   setFormData={setFormData} image={image} setImage={setImage} ></RecipeForm>
        <Ingredients setFormData={setFormData} formData={formData}></Ingredients>

<Nutrients formData={formData} setFormData={setFormData} ></Nutrients>
          <div className="flex gap-4 mt-4 sm:mt-10">
            <button type="submit" disabled={isPending} onClick={handleSubmit} className="flex-1 bg-orange-500 hover:bg-orange-600 text-xs sm:text-base py-2 sm:py-4 rounded-2xl font-semibold flex items-center justify-center gap-2">
             {!isEditMode && (isPending?<FaSpinner className="animate-spin text-white"></FaSpinner> : "Publish Recipe")}
             {isEditMode && (isPending?<FaSpinner className="animate-spin text-white"></FaSpinner> : "Update Recipe")}
            </button>
            <button  disabled className="flex-1 border border-gray-600 py-4 rounded-2xl disabled:opacity-30">
              Save Draft
            </button>
          </div>
          </div>
<RecipePreview recipe={{...formData,user:Me}} ></RecipePreview>
        
      </div>
    </section>
  )
}
