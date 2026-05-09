import { useQuery } from "@tanstack/react-query"

const useRecipe=(id,getrecipeByid)=>{
    console.log(id)
return useQuery({
    queryKey:["recipe",id],
    queryFn:()=>{
        console.log("hello")
       return getrecipeByid(id)
    },
    enabled:!!id
})
}
export default useRecipe