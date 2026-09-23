import api from "../../../Api/ApiInstances"

export const getCommentsApi =(id,page)=>{
return api.get(`/comment/comments/${id}?page=${page}&limit=${5}`)
}
export const postCommentApi =(data)=>{
return api.post(`/comment/addComment`,data)
}
export const getRecipeByIdApi =(id)=>{
return api.get(`/recipe/recipebyid/${id}`)
}
