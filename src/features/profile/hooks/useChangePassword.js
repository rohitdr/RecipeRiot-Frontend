import { useMutation } from "@tanstack/react-query"
import { useContext } from "react"
import AuthContext from "../../../Context/AuthContext"
import { toast } from "sonner"
import { changePasswordApi } from "../services/api"

export const useChangePasswordMutation=()=>{
    const {handleError}=useContext(AuthContext)
    return useMutation({
        mutationFn:async(data)=>{
         return await changePasswordApi(data)
        },
         retry:false,
        onError:(error)=>handleError(error),
         onSuccess:()=>{
     toast.success("Your Password Changed successfully ")
        }
    })
}