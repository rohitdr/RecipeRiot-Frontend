import api, { pexelApi } from "../../../Api/ApiInstances";

export  function userLikedRecipesApi(page){
    return api.get(`/user/likedRecipes?page=${page}&limit=${15}`)
}
export const addRecipeApi =(data)=>{
return api.post(`/recipe/addRecipe`,data)
}
export const editRecipeApi =(id,data)=>{
return api.put(`/recipe/editRecipe/${id}`,data)
}
export const getImageApi =(query)=>{
return pexelApi.get(`/search?query=${query}&per_page=1`,
    {
      headers: {
        Authorization: process.env.REACT_APP_PEXEL_API_KEY
      }
    }
  )
}
export const searchRecipeApi =(query,page,limit)=>{
return api.get(`/recipe/search/${query}?page=${page}&limit=${limit}`)
}
export  function userRecipesApi(page){
    return api.get(`/user/recipes?page=${page}&limit=${15}`)
}
export const getRecipeByCategoryApi =(name,type,page,limit,sort)=>{
return api.get(`/recipe/recipeByCategroy/${type}/${name}?page=${page}&limit=${limit}&sort=${sort}`)
}