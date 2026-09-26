import { keepPreviousData, useQuery } from "@tanstack/react-query"

import { userLikedRecipesApi } from "../services/recipe.api"
import useMe from "../../profile/hooks/useMe"

export  const useLikedRecipesList=(page)=>{
   const {data:Me}=useMe()
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