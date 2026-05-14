import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addRecipeApi, deleteRecipeApi, editRecipeApi, getImageApi, postCommentApi } from "../Api/RecipeApi"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import axios from "axios"
export const usePostCommnetMutation=(recipeId,handleError)=>{
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
export const useAddRecipeMutation=(addRecipefn,handleError)=>{
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
export const useEditRecipeMutation=(editRecipe,handleError)=>{
    const navigate=useNavigate()
      const queryClient=useQueryClient()
    return useMutation({
        mutationFn:async({id,data,image})=>editRecipe(id,data,image),
        onSuccess:(data,variables)=>{
             queryClient.invalidateQueries({
    queryKey: ["recipe", variables.id]
  })

  queryClient.invalidateQueries({
    queryKey: ["user-recipes"]
  })
  toast.success(data.message)
  navigate('/profile')
        },
        onError:(error)=>handleError(error)
    })
}
export const useAutoGenerateImage=(setFormData,setImage)=>{
    return useMutation({
        mutationFn:async(query)=>{
             const res = await getImageApi(query)
   return res.data.photos[0].src.large;
        },
        onError:()=>{
            toast.error("failed to generate image")
        },
        onSuccess:(data)=>{
            setFormData(prev=>({...prev,image:{url:data}}))
            setImage(null)
        }
    })
}
