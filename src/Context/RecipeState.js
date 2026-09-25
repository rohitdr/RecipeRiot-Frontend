
import RecipeContext from "./RecipeContext";

import {  getRecipeByCategoryApi, searchRecipeApi } from "../Api/RecipeApi";


export default function RecipeState(props) {

 
  const getRecipeByCategory= async (categoryName,categoryType,pageParam,sort)=>{
     const response = await getRecipeByCategoryApi(categoryName,categoryType,pageParam,15,sort);
     return response.data
  }
 
  const searchRecipe= async (query,page)=>{
     const response = await searchRecipeApi(query,page,15);
     return response.data
  }

 




  return (

    <RecipeContext.Provider
      value={{    getRecipeByCategory,
   
        searchRecipe}}
    >
      {props.children}
    </RecipeContext.Provider>
  );
}
