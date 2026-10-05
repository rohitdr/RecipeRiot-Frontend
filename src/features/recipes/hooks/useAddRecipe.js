import { useContext } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { createRecipe } from './../services/addRecipe.service';
import AuthContext from "../../../app/Context/AuthContext";

export const useAddRecipe=()=>{
    const {handleError}=useContext(AuthContext)
    const queryClient=useQueryClient()
    return useMutation({
        mutationFn:async({data,image})=>createRecipe(data,image),
        onSuccess:(data)=>{
        queryClient.invalidateQueries({
            queryKey:["user-recipes"]
        })
        toast.success(data.message)
        },
        onError:(error)=>handleError(error)
    })
}