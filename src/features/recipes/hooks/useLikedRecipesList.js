import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import AuthContext from "../../../Context/AuthContext"
import { userLikedRecipesApi } from "../services/recipe.api"

export  const useLikedRecipesList=(page)=>{
    const {Me}=useContext(AuthContext)
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