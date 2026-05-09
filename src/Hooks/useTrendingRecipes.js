import { useQuery } from "@tanstack/react-query"

const useTrendingRecipe=(fn)=>{
return useQuery({
    
    queryKey:["trending"],
    queryFn:()=>fn(),
    staleTime:5000
})
}
export default useTrendingRecipe