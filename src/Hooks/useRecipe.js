import { useQuery } from "@tanstack/react-query"

const useRecipe=(id,getrecipeByid)=>{
  
return useQuery({
    queryKey:["recipe",id],
    queryFn:()=>{
       return getrecipeByid(id)
    },
    enabled:!!id
})
}
export default useRecipe