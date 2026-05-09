import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { userLikedRecipesApi, userLikeRecipeApi } from "../Api/UserApi"

export  const useLikedRecipesList=(page,Me)=>{
    return useQuery({
        queryKey:["user-likedRecipes",page],
        queryFn:async()=>{
            const response = await userLikedRecipesApi(page)
            return response.data
        },
        keepPreviousData:true,
        placeholderData:keepPreviousData,
        enabled:!!Me
    })
}