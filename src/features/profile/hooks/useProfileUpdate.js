import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { useContext } from "react"
import AuthContext from "../../../Context/AuthContext"
import { userUpdateApi } from './../services/api';

export const useProfileUpdateMutation=()=>{
    const {handleError}=useContext(AuthContext)
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:async(data)=>{
            const response= await userUpdateApi(data)
    return response.data
},
         retry:false,
         onSuccess:(data)=>{
     toast.success(data.message)
        },
        onSettled:()=>{
queryClient.invalidateQueries({
   queryKey:["Me"]
   })
        },
     onError:(error)=>handleError(error)

    })
}