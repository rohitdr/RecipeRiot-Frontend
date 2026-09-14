import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { loginApi } from "../services/auth.api";
import { useContext } from "react";
import AuthContext from "../../../Context/AuthContext";

export const useLogin=()=>{
     const { handleError ,setIsAuthenticated} = useContext(AuthContext);
     const navigate=useNavigate()
    return useMutation({
        mutationFn:async (data)=>{
           const response=await loginApi(data);
           return response.data
        },
        retry:false,
        onError:(error)=>handleError(error),
        onSuccess:async (data)=>{
        localStorage.setItem("accessToken",data.accessToken)
        setIsAuthenticated(true)
     toast.success("You Logged in Successlly ")
     navigate('/home')
        }
    })
}