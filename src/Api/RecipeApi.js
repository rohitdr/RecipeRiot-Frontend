import api from "./ApiInstances"
import axios from "axios"
export const getRecipeByCategoryApi =(name,type,page,limit,sort)=>{
return api.get(`/recipe/recipeByCategroy/${type}/${name}?page=${page}&limit=${limit}&sort=${sort}`)
}

export const searchRecipeApi =(query,page,limit)=>{
return api.get(`/recipe/search/${query}?page=${page}&limit=${limit}`)
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

