import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { postCommentApi } from "../../services/recipeDetails.api"
import { useContext } from "react"
import AuthContext from './../../../../Context/AuthContext';

export const useAddComment=(recipeId,)=>{
    const {handleError}=useContext(AuthContext)
    const queryClient=useQueryClient()
 return useMutation({
    mutationFn:(data)=>postCommentApi(data),
    onError:(error)=>handleError(error),
    onSuccess:()=>{
        queryClient.invalidateQueries({
            queryKey:["comments",recipeId]
        })
        toast.success("Comment has been posted ")
    }
 })
}