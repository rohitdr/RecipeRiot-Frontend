import { useEffect, useState } from "react";
import { useAddRecipe } from "./useAddRecipe";
import { useEditRecipe } from "./useEditRecipe";
import { useParams } from "react-router-dom";
import useRecipe from "./useRecipe";
import { initialRecipe } from "../constants/recipe.initial";
import { useGenerateImage } from "./useImageGenerate";
import validateRecipeForm from "../schemas/addRecipe.schema";
import { toast } from "sonner";

export default function useRecipeForm(){
      const [image,setImage]=useState(null)
  const addRecipeMutation=useAddRecipe()
  const editRecipeMutation=useEditRecipe()
  const {id}=useParams();
  const isEditMode=!!id
      const {data}=useRecipe(id)
  const [formData,setFormData]=useState(initialRecipe)
  const autoImageMutation=useGenerateImage(setFormData,setImage)
  useEffect(()=>{
    if(data){
      setFormData(data.recipe)
    }
      },[data])
   useEffect(()=>{
 if(!image) return
 const url = URL.createObjectURL(image)
setFormData(prev=>({...prev,image:{url:url}}))
 return ()=> URL.revokeObjectURL(url)
   },[image])
   const handleSubmit=()=>{

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
  const isPending = isEditMode
    ? editRecipeMutation.isPending
    : addRecipeMutation.isPending;
   return {
    formData,
    setFormData,

    image,
    setImage,

    handleSubmit,

    isEditMode,
    isPending,

    autoImageMutation,
  };
}