import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { getImageApi } from "../services/recipe.api";

export const useGenerateImage=(setFormData,setImage)=>{
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