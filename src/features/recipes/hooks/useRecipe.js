import { useQuery } from "@tanstack/react-query"
import { getRecipeByIdApi } from "../services/recipeDetails.api";

const useRecipe=(id)=>{
  
return useQuery({
    queryKey:["recipe",id],
    queryFn: async () => {
      const response = await getRecipeByIdApi(id);
      return response.data;
    },
    enabled:!!id
})
}
export default useRecipe