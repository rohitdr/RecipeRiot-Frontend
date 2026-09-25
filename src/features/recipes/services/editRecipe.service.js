import { uploadCloudinaryApi } from "../../profile/services/api";
import { editRecipeApi } from "./recipe.api";

 export const updateRecipe=async(id,data,file)=>{
 try{
      if(file){
  const formData=new FormData() 
         formData.append("file",file) 
       formData.append("upload_preset",process.env.REACT_APP_UPLOAD_PRESET);
        const res = await uploadCloudinaryApi(formData);
       let image = {
        publicId: res.data.public_id,
        url: res.data.secure_url,
      };
      const recipe = { ...data,image }
      const response= await editRecipeApi(id,{...recipe,link:false})
       return response.data
      }
       const response= await editRecipeApi(id,{...data,link:true})
       return response.data
    }catch (error){
      console.log(error)
      throw error
    }
  }