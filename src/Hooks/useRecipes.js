import {  useQuery,keepPreviousData } from "@tanstack/react-query";
const useRecipes=(categoryName,categoryType,getRecipes,page,sort)=>{
return useQuery({
    queryKey:["recipes",categoryName,categoryType,page,sort],
    queryFn:()=>{
        return getRecipes(categoryName,categoryType,page,sort)
    },
    staleTime: 1000 * 60 * 5,
  gcTime: 1000 * 60 * 10,
      keepPreviousData: true,
    placeholderData: keepPreviousData

})
}
export default useRecipes;
