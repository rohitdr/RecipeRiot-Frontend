import {  useState } from 'react'
import AuthContext from './AuthContext'
import {getLoggedUserApi, uploadCloudinaryApi, userUpdateApi,} from '../Api/UserApi'

import { toast } from 'sonner'
import useMe from '../Hooks/useMe'
export default function AuthState({children}) {

  const [isServerDown,setIsServerDown]=useState(false)
const [isAuthenticated, setIsAuthenticated] = useState(
  !!localStorage.getItem("accessToken")
)
  
    const handleError =(error)=>{
  if(!error.response){
    toast.error("Network error. Please check your connection")
    return 
  }
  const status = error.response?.status;
   if(status>=500){
    setIsServerDown(true)
   }
   else if(status === 401){
   toast.error(error.response?.data?.message ||"Session expired. Please Login again")
   }
   else if(status >=400){
    toast.error(error.response?.data?.message || "Something went wrong")
  

   }
   else{
    toast.error("Unexpected error occurred")

   }
}
const getLoggedUser=async()=>{
   try{
            const response= await getLoggedUserApi()
         
          return response.data.user 
        }
        catch(error){
          throw error
        }
}

const {data:Me,isLoading:isMeLoading}=useMe(getLoggedUser,isAuthenticated)
 
  const updateProfileImage=async(file)=>{
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



  return (

 <AuthContext.Provider value={{Me,isMeLoading,handleError,updateProfileImage,isServerDown,isAuthenticated,setIsAuthenticated}}>
    {children}
 </AuthContext.Provider>
      

)
}
