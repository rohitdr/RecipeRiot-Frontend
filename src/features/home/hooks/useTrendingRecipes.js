import { useQuery } from "@tanstack/react-query"
import { getTrendingRecipes } from "../services/api"

const useTrendingRecipe=()=>{
return useQuery({
    
    queryKey:["trending"],
    queryFn:getTrendingRecipes,
    staleTime:5000
})
}
export default useTrendingRecipe