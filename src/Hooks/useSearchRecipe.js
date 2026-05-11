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
    retry:false,
    
    })
}
export default useSearchRecipe