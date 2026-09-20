import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useContext } from "react"
import { toast } from "sonner"
import AuthContext from "../../../Context/AuthContext"
import { updateProfileImage } from "../services/api"


export const useProfileImageMutation=()=>{
    const {handleError}=useContext(AuthContext)
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:(data)=>updateProfileImage(data),
         retry:false,
         onSuccess:(data)=>{
     toast.success(data.message)
        },
        onSettled:()=>{
queryClient.invalidateQueries({
   queryKey:["Me"]
   })
        },
     onError:(error,)=> handleError(error)
    

    })
}