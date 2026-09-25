import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { updateRecipe } from "../services/editRecipe.service"
import { useContext } from "react"
import AuthContext from "../../../Context/AuthContext"

export const useEditRecipe=()=>{
    const {handleError}=useContext(AuthContext)
    const navigate=useNavigate()
      const queryClient=useQueryClient()
    return useMutation({
        mutationFn:async({id,data,image})=>updateRecipe(id,data,image),
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