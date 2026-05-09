import { useQuery } from "@tanstack/react-query"

const useFeaturedRecipe=(fn)=>{
return useQuery({
    
    queryKey:["featured"],
    queryFn:()=>fn(),
    staleTime:5000
})
}
export default useFeaturedRecipe