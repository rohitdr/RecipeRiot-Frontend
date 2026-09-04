import { useQuery } from "@tanstack/react-query"

const  useMe=(fn,isAuthenticated)=>{
    return useQuery({
    queryKey:["Me"],
    queryFn:()=>fn(),
    enabled:isAuthenticated,
    retry:false
    })
    
    
    
}
export default useMe;