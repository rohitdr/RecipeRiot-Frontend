import {  useState } from 'react'
import AuthContext from './AuthContext'
import { toast } from 'sonner'
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



 
 



  return (

 <AuthContext.Provider value={{handleError,isServerDown,isAuthenticated,setIsAuthenticated}}>
    {children}
 </AuthContext.Provider>
      

)
}
