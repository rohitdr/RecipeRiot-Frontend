import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getCommentsApi } from "../Api/RecipeApi"

const useCommnets=(recipeId,page)=>{
return useQuery({
    queryKey:["comments",recipeId,page],
    queryFn:async ()=>{
        const response =await getCommentsApi(recipeId,page)
        return response.data
    },
    placeholderData:keepPreviousData,
    keepPreviousData:true
    
})
}
export default useCommnets