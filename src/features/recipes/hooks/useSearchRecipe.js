import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { searchRecipeApi } from "../services/recipe.api"

const useSearchRecipe=(query,page)=>{
    
    return useQuery({
     queryKey:["search",query,page],
     queryFn:async ()=>{
     const response = await searchRecipeApi(query,page,15);
     return response.data
  },
       keepPreviousData: true,
       placeholderData:keepPreviousData,
    enabled: !!query,
    refetchOnWindowFocus:false,
    retry:false,
    
    })
}
export default useSearchRecipe