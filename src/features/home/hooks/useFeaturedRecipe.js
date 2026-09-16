import { useQuery } from "@tanstack/react-query"
import { getFeaturedRecipes } from "../services/api"

const useFeaturedRecipe=()=>{
return useQuery({
    
    queryKey:["featured"],
    queryFn:getFeaturedRecipes,
    staleTime:5000
})
}
export default useFeaturedRecipe