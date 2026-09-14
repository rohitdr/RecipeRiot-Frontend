import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { signUpApi } from "../services/auth.api"
import { useContext } from "react"
import AuthContext from "../../../Context/AuthContext"

export const useSignUp=()=>{
      const { handleError } = useContext(AuthContext);
    const navigate=useNavigate()
    return useMutation({
        mutationFn:async(data)=>{
         return await signUpApi(data)
        },
         retry:false,
        onError:(error)=>handleError(error),
         onSuccess:()=>{
     toast.success("Your Account created successfully ")
     navigate('/login')
        }
    })
}