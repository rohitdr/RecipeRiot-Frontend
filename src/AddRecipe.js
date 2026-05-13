
 import React, { useContext, useEffect, useState } from "react";
 import { motion } from "framer-motion";
 import { FaPlus, FaTrash, FaImage, FaRocket, FaSpinner } from "react-icons/fa";
import { FaP } from "react-icons/fa6";
import RecipeItem from "./Components/RecipeItem";
import RecipePreview from "./AddRecipe/RecipePreview";
import Ingredients from "./AddRecipe/Ingredients";
import RecipeForm from "./AddRecipe/RecipeForm";
import Nutrients from "./AddRecipe/Nutrients";
import AuthContext from "./Context/AuthContext";
import validateRecipeForm from "./AddRecipe/Validation";
import { toast } from "sonner";
import RecipeContext from "./Context/RecipeContext";
import { useAddRecipeMutation, useEditRecipeMutation } from "./Mutations/RecipeMutation";
import { useParams } from "react-router-dom";
import useRecipe from "./Hooks/useRecipe";

export default function AddRecipe() {
  const {Me,handleError}=useContext(AuthContext)
  const [image,setImage]=useState(null)
  const {addRecipe,getRecipeById,editRecipe}=useContext(RecipeContext)
  const addRecipeMutation=useAddRecipeMutation(addRecipe,handleError)
  const editRecipeMutation=useEditRecipeMutation(editRecipe,handleError)
  const {id}=useParams();
  const isEditMode=!!id
      const {data}=useRecipe(id,getRecipeById)
  const [formData,setFormData]=useState({label:"",totalTime:"",source:"",calories:"",totalWeight:"",image: {
            url: "https://res.cloudinary.com/do2twyxai/image/upload/v1771996404/recipes/pakdre8w9g3z99rj9uue.jpg",
          },ingredientLines:[""],dietLabels:[""],healthLabels:[""],totalNutrients: {
    ENERC_KCAL: {
      label: "Calories",
      quantity: "",
      unit: "kcal",
    },
    FAT: {
      label: "Fat",
      quantity: "",
      unit: "g",
    },
    CHOCDF: {
      label: "Carbs",
      quantity: "",
      unit: "g",
    },
    FIBTG: {
      label: "Fiber",
      quantity: "",
      unit: "g",
    },
    SUGAR: {
      label: "Sugar",
      quantity: "",
      unit: "g",
    },
    PROCNT: {
      label: "Protein",
      quantity: "",
      unit: "g",
    },
    CHOLE: {
      label: "Cholesterol",
      quantity: "",
      unit: "mg",
    },
    CA: {
      label: "Calcium",
      quantity: "",
      unit: "mg",
    },
    FE: {
      label: "Iron",
      quantity: "",
      unit: "mg",
    },
    VITA_RAE: {
      label: "Vitamin A",
      quantity: "",
      unit: "mcg",
    },
    VITC: {
      label: "Vitamin C",
      quantity: "",
      unit: "mg",
    },
    THIA: {
      label: "Thiamin",
      quantity: "",
      unit: "mg",
    },
    RIBF: {
      label: "Riboflavin",
      quantity: "",
      unit: "mg",
    },
    NIA: {
      label: "Niacin",
      quantity: "",
      unit: "mg",
    },
    VITB6A: {
      label: "Vitamin B6",
      quantity: "",
      unit: "mg",
    },
    FOLAC: {
      label: "Folate",
      quantity: "",
      unit: "mcg",
    },
    VITB12: {
      label: "Vitamin B12",
      quantity: "",
      unit: "mcg",
    },
    VITK1: {
      label: "Vitamin K",
      quantity: "",
      unit: "mcg",
    },
    VITD: {
      label: "Vitamin D",
      quantity: "",
      unit: "IU",
    },
    TOCPHA: {
      label: "Vitamin E",
      quantity: "",
      unit: "mg",
    },
    WATER: {
      label: "Water",
      quantity: "",
      unit: "g",
    },
  },cuisineType: [],
mealType: [],
dishType: []})
  useEffect(()=>{
    if(data){
      console.log(data)
      setFormData(data.recipe)
    
    }
      },[data])
   useEffect(()=>{
 if(!image) return
 const url = URL.createObjectURL(image)
setFormData(prev=>({...prev,image:{url:url}}))
 return ()=> URL.revokeObjectURL(url)
   },[image])
   const handleClick=()=>{
console.log(formData)
const error = validateRecipeForm(formData,image,isEditMode)
if(error){
toast.error(error)
  return
}
if(isEditMode){
  editRecipeMutation.mutate({id,data:formData,image})
  return
}
addRecipeMutation.mutate({data:formData,image})
   }
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
           <RecipeForm formData={formData}  setFormData={setFormData} image={image} setImage={setImage} ></RecipeForm>
        <Ingredients setFormData={setFormData} formData={formData}></Ingredients>

<Nutrients formData={formData} setFormData={setFormData} ></Nutrients>
          <div className="flex gap-4 mt-4 sm:mt-10">
            <button type="submit" disabled={isEditMode ? editRecipeMutation.isPending:addRecipeMutation.isPending} onClick={handleClick} className="flex-1 bg-orange-500 hover:bg-orange-600 text-xs sm:text-base py-2 sm:py-4 rounded-2xl font-semibold flex items-center justify-center gap-2">
             {!isEditMode && (addRecipeMutation.isPending?<FaSpinner className="animate-spin text-white"></FaSpinner> : "Publish Recipe")}
             {isEditMode && (editRecipeMutation.isPending?<FaSpinner className="animate-spin text-white"></FaSpinner> : "Update Recipe")}
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
