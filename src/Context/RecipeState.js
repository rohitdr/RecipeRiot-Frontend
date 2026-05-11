import  { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import RecipeContext from "./RecipeContext";
import api from "../Api/ApiInstances";
import { addRecipeApi, editRecipeApi, getFeaturedRecipeApi, getRecipeByCategoryApi, getRecipeByIdApi, getTrendingRecipeApi, searchRecipeApi } from "../Api/RecipeApi";
import loginApi, { uploadCloudinaryApi } from "../Api/UserApi";
export default function RecipeState(props) {

 
  const getRecipeByCategory= async (categoryName,categoryType,pageParam,sort)=>{
     const response = await getRecipeByCategoryApi(categoryName,categoryType,pageParam,15,sort);
     return response.data
  }
  const getRecipeById= async (id)=>{
     const response = await getRecipeByIdApi(id);
     return response.data
  }
  const searchRecipe= async (query,page)=>{
     const response = await searchRecipeApi(query,page,15);
     return response.data
  }
  const getTrendingRecipe= async ()=>{
     const response = await getTrendingRecipeApi();
     return response.data
  }
  const getFeaturedRecipe= async ()=>{
     const response = await getFeaturedRecipeApi();
     return response.data
  }
  const addRecipe=async(data,file)=>{
 try{

         const formData=new FormData() 
         formData.append("file",file)
       formData.append("upload_preset",process.env.REACT_APP_UPLOAD_PRESET);
        const res = await uploadCloudinaryApi(formData);
       let image = {
        publicId: res.data.public_id,
        url: res.data.secure_url,
      };
      const recipe = { ...data,image }
    
     const response= await addRecipeApi(recipe)
      return response.data
    }catch (error){
      console.log(error)
      throw error
    }
  }
  const editRecipe=async(id,data,file)=>{
 try{
      if(file){
  const formData=new FormData() 
         formData.append("file",file) 
       formData.append("upload_preset",process.env.REACT_APP_UPLOAD_PRESET);
        const res = await uploadCloudinaryApi(formData);
       let image = {
        publicId: res.data.public_id,
        url: res.data.secure_url,
      };
      const recipe = { ...data,image }
      const response= await editRecipeApi(id,recipe)
       return response.data
      }
       const response= await editRecipeApi(id,data)
       return response.data
    }catch (error){
      console.log(error)
      throw error
    }
  }



  return (

    <RecipeContext.Provider
      value={{    getRecipeByCategory,
        getRecipeById,
        searchRecipe,
        getTrendingRecipe,
        getFeaturedRecipe,
        addRecipe,
        editRecipe}}
    >
      {props.children}
    </RecipeContext.Provider>
  );
}
