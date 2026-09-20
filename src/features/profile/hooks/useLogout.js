import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import AuthContext from "../../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { logoutApi } from "../services/api";

export const useLogoutMutation=()=>{
    const {handleError,setIsAuthenticated}=useContext(AuthContext)
    const queryClient=useQueryClient()
    const navigate=useNavigate()
    return useMutation({
        mutationFn:async ()=>{
           const response=await logoutApi();
           return response.data
        },
        retry:false,
        onError:(error)=>handleError(error),
        onSuccess:()=>{
            localStorage.removeItem("accessToken")
            setIsAuthenticated(false)
  queryClient.removeQueries({
  queryKey: ["Me"]
})

queryClient.removeQueries({
  queryKey: ["user-likedRecipes"]
})
queryClient.removeQueries({
  queryKey: ["user-recipes"]
})
  toast.info("You have been loggout out successfully")
            navigate('/home')
        }
    })
}