import api from "./ApiInstances"
export const getRecipeByCategoryApi =(name,type,page,limit,sort)=>{
return api.get(`/recipe/recipeByCategroy/${type}/${name}?page=${page}&limit=${limit}&sort=${sort}`)
}





export const deleteRecipeApi =(id)=>{
return api.delete(`/recipe/deleteRecipe/${id}`)
}




