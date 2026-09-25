import { uploadCloudinaryApi } from "../../profile/services/api";
import { addRecipeApi } from "./recipe.api";

 export const createRecipe=async(data,file)=>{
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
    
     const response= await addRecipeApi({...recipe,link:false})
      return response.data
  }
  else{
      
     const response= await addRecipeApi({...data,link:true})
      return response.data
  }
      
    }catch (error){
      console.log(error)
      throw error
    }
  }