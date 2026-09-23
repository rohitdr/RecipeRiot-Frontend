
import RecipeContext from "./RecipeContext";

import { addRecipeApi, editRecipeApi, getRecipeByCategoryApi, getRecipeByIdApi, searchRecipeApi } from "../Api/RecipeApi";
import { uploadCloudinaryApi } from "../features/profile/services/api";

export default function RecipeState(props) {

 
  const getRecipeByCategory= async (categoryName,categoryType,pageParam,sort)=>{
     const response = await getRecipeByCategoryApi(categoryName,categoryType,pageParam,15,sort);
     return response.data
  }
 
  const searchRecipe= async (query,page)=>{
     const response = await searchRecipeApi(query,page,15);
     return response.data
  }

  const addRecipe=async(data,file)=>{
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
  const editRecipe=async(id,data,file)=>{
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



  return (

    <RecipeContext.Provider
      value={{    getRecipeByCategory,
   
        searchRecipe,
    
        addRecipe,
        editRecipe}}
    >
      {props.children}
    </RecipeContext.Provider>
  );
}
