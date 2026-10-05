import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { useContext } from "react"
import { forgetPasswordApi } from "../services/auth.api"
import AuthContext from "../../../app/Context/AuthContext"

export const useForgetPasswordMutation=()=>{
       const { handleError } = useContext(AuthContext);
    const navigate=useNavigate()
    return useMutation({
        mutationFn:async(data)=>{
         return await forgetPasswordApi(data)
        },
         retry:false,
        onError:(error)=>handleError(error),
         onSuccess:()=>{
     toast.success("Your Password Changed successfully ")
     navigate('/login')
        }
    })
}