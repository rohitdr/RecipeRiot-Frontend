
import axios from "axios"
import api from "./ApiInstances"

export  function loginApi(data){
    return api.post('/auth/login',data)
}
export  function getLoggedUserApi(){
    return api.get('/user/getUser')
}
export  function signUpApi(data){
    return api.post('/auth/createUser',data)
}
export  function forgetPasswordApi(data){
    return api.patch('/auth/forgetPassword',data)
}
export  function changePasswordApi(data){
    return api.patch('/auth/changePassword',data)
}
export  function logoutApi(){
    return api.post('/auth/logout')
}
export  function userUpdateApi(data){
    return api.patch('/user/updateUser',data)
}
export  function userLikeRecipeApi(data){
    return api.patch('/user/likeRecipe',data)
}
export  function userLikedRecipesApi(page){
    return api.get(`/user/likedRecipes?page=${page}&limit=${15}`)
}
export  function userRecipesApi(page){
    return api.get(`/user/recipes?page=${page}&limit=${15}`)
}
export const uploadCloudinaryApi =(data)=>{
    return axios.post( `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_DATABASE_NAME}/auto/upload`,data);
}
