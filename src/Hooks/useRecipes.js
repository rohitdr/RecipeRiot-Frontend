import {  useQuery,keepPreviousData } from "@tanstack/react-query";
import { getRecipeByCategoryApi } from "../features/recipes/services/recipe.api";
const useRecipes=(categoryName,categoryType,page,sort)=>{
return useQuery({
    queryKey:["recipes",categoryName,categoryType,page,sort],
    queryFn: async ()=>{
     const response = await getRecipeByCategoryApi(categoryName,categoryType,page,15,sort);
     return response.data
  },
    staleTime: 1000 * 60 * 5,
  gcTime: 1000 * 60 * 10,
      keepPreviousData: true,
    placeholderData: keepPreviousData

})
}
export default useRecipes;
