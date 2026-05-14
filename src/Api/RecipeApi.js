import api from "./ApiInstances"
import axios from "axios"
export const getRecipeByCategoryApi =(name,type,page,limit,sort)=>{
return api.get(`/recipe/recipeByCategroy/${type}/${name}?page=${page}&limit=${limit}&sort=${sort}`)
}
export const getRecipeByIdApi =(id)=>{
return api.get(`/recipe/recipebyid/${id}`)
}
export const searchRecipeApi =(query,page,limit)=>{
return api.get(`/recipe/search/${query}?page=${page}&limit=${limit}`)
}
export const getTrendingRecipeApi =()=>{
return api.get(`/recipe/trending`)
}
export const getFeaturedRecipeApi =()=>{
return api.get(`/recipe/featured`)
}
export const addRecipeApi =(data)=>{
return api.post(`/recipe/addRecipe`,data)
}
export const editRecipeApi =(id,data)=>{
return api.put(`/recipe/editRecipe/${id}`,data)
}
export const deleteRecipeApi =(id)=>{
return api.delete(`/recipe/deleteRecipe/${id}`)
}
export const postCommentApi =(data)=>{
return api.post(`/comment/addComment`,data)
}
export const getCommentsApi =(id,page)=>{
return api.get(`/comment/comments/${id}?page=${page}&limit=${5}`)
}
export const getImageApi =(query)=>{
return axios.get(
    `https://api.pexels.com/v1/search?query=${query}&per_page=1`,
    {
      headers: {
        Authorization: process.env.REACT_APP_PEXEL_API_KEY
      }
    }
  )
}

