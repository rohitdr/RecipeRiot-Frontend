
import api, { cloudinaryApi } from "../../../Api/ApiInstances";

export  function userUpdateApi(data){
    return api.patch('/user/updateUser',data)
}
export const uploadCloudinaryApi =(data)=>{
    return cloudinaryApi.post('',data);
}
export  function userLikeRecipeApi(data){
    return api.patch('/user/likeRecipe',data)
}
 export  function changePasswordApi(data){
    return api.patch('/auth/changePassword',data)
}
export  function logoutApi(){
    return api.post('/auth/logout')
}
 export const updateProfileImage=async(file)=>{
    try{
         const formData=new FormData()
         formData.append("file",file)
       formData.append("upload_preset",process.env.REACT_APP_UPLOAD_PRESET);
        const res = await uploadCloudinaryApi(formData);
       let image = {
        publicId: res.data.public_id,
        url: res.data.secure_url,
      };
      const data = { image }
     const response= await userUpdateApi(data)
      return response.data
    }catch (error){
      throw error
    }
  }
 export  function getLoggedUserApi(){
    return api.get('/user/getUser')
}
