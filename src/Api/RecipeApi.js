import api from "./ApiInstances"

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

