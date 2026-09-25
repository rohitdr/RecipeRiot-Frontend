
import RecipeContext from "./RecipeContext";

import {  getRecipeByCategoryApi } from "../Api/RecipeApi";


export default function RecipeState(props) {

 
  const getRecipeByCategory= async (categoryName,categoryType,pageParam,sort)=>{
     const response = await getRecipeByCategoryApi(categoryName,categoryType,pageParam,15,sort);
     return response.data
  }





  return (

    <RecipeContext.Provider
      value={{    getRecipeByCategory,
   
       }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
}
