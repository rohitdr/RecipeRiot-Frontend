import { keepPreviousData, useQuery } from "@tanstack/react-query"

const useSearchRecipe=(query,page,fn)=>{
    return useQuery({
     queryKey:["search",query,page],
     queryFn:()=>{
        return fn(query,page)
     },
       keepPreviousData: true,
       placeholderData:keepPreviousData,
    enabled: !!query,
    refetchOnWindowFocus:false,
  staleTime: 1000 * 60 * 5,
    
    })
}
export default useSearchRecipe