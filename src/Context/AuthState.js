import {  useState } from 'react'
import AuthContext from './AuthContext'
import {getLoggedUserApi} from '../Api/UserApi'

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
 
 



  return (

 <AuthContext.Provider value={{Me,isMeLoading,handleError,isServerDown,isAuthenticated,setIsAuthenticated}}>
    {children}
 </AuthContext.Provider>
      

)
}
