import { keepPreviousData, useQueryClient } from '@tanstack/react-query'

import { getRecipeByIdApi } from './../../features/recipes/services/recipeDetails.api';

export default function usePrefetchRecipe() {


    const queryClient=useQueryClient()
  const prefetchRecipe = (id) => {
    const cached = queryClient.getQueryData(["recipe",id]);

    if (cached) return; 

    queryClient.prefetchQuery({
      queryKey:["recipe",id],
    queryFn:async () => {
      const response = await getRecipeByIdApi(id);
      return response.data;
    },
    enabled:!!id,
             keepPreviousData:true,
             placeholderData:keepPreviousData,
  staleTime: 1000 * 60 * 5,
  gcTime: 1000 * 60 * 10,
    });
  };
  return { prefetchRecipe };

}
