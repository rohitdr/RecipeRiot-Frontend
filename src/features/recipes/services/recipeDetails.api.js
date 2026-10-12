import api from "../../../app/api/ApiInstances"


export const getCommentsApi =(id,page)=>{
return api.get(`/recipes/${id}/comments?page=${page}&limit=${5}`)
}
export const postCommentApi =(data)=>{
return api.post(`/recipes/${data.recipeId}/comments`,data)
}
export const getRecipeByIdApi =(id)=>{
return api.get(`/recipe/recipebyid/${id}`)
}
