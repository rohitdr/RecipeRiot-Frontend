import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { userLikedRecipesApi, userLikeRecipeApi, userRecipesApi } from "../Api/UserApi"

export  const useUserRecipes=(page,Me)=>{
    return useQuery({
        queryKey:["user-recipes",page],
        queryFn:async()=>{
            const response = await userRecipesApi(page)
            return response.data
        },
        keepPreviousData:true,
        placeholderData:keepPreviousData,
        enabled:!!Me
    })
}