import { useMutation, useQueryClient } from "@tanstack/react-query"
import {  deleteRecipeApi } from "../Api/RecipeApi"
import { toast } from "sonner"
import { useContext } from "react"
import AuthContext from "../Context/AuthContext"


export const useAddRecipeMutation=(addRecipefn)=>{
    const {handleError}=useContext(AuthContext)
    const queryClient=useQueryClient()
    return useMutation({
        mutationFn:async({data,image})=>addRecipefn(data,image),
        onSuccess:(data)=>{
        queryClient.invalidateQueries({
            queryKey:["user-recipes"]
        })
        toast.success(data.message)
        },
        onError:(error)=>handleError(error)
    })
}
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


