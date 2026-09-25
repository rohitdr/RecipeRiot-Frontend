import { useMutation, useQueryClient } from "@tanstack/react-query"
import {  deleteRecipeApi } from "../Api/RecipeApi"
import { toast } from "sonner"



export const useRecipeDeleteMutation=(handleError)=>{
    const queryClient=useQueryClient()
    return useMutation({
        mutationFn:async(id)=>{
         const response = await deleteRecipeApi(id)
         return response.data
        },
        onSuccess:(data)=>{
             queryClient.invalidateQueries({
            queryKey:["user-recipes"]
        })
            toast.success(data.message)
        },
        onError:(error)=>handleError(error)
    })
}


