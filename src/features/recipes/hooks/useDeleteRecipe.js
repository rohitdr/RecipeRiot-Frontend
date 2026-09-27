import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useContext } from "react"
import AuthContext from "../../../Context/AuthContext"
import { toast } from "sonner"
import { deleteRecipeApi } from "../services/recipe.api"

export const useDeleteRecipe=()=>{
    const {handleError}=useContext(AuthContext)
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