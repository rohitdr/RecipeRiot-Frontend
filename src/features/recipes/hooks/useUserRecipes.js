import { keepPreviousData, useQuery } from "@tanstack/react-query"


import { userRecipesApi } from "../services/recipe.api"
import useMe from "../../auth/hooks/useMe"

export  const useUserRecipes=(page)=>{
    const {data:Me}=useMe()
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