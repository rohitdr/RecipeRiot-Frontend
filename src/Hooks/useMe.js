import { useQuery } from "@tanstack/react-query"

const  useMe=(fn)=>{
    return useQuery({
    queryKey:["Me"],
    queryFn:()=>fn(),
    enabled:!!localStorage.getItem("accessToken"),
    })
    
    
}
export default useMe;