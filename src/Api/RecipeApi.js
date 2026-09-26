import api from "./ApiInstances"






export const deleteRecipeApi =(id)=>{
return api.delete(`/recipe/deleteRecipe/${id}`)
}




