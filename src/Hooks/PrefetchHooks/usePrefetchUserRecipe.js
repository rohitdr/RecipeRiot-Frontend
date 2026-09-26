import { keepPreviousData, useQueryClient } from '@tanstack/react-query'


import useMe from '../../features/profile/hooks/useMe';
import { userRecipesApi } from '../../features/recipes/services/recipe.api';

export default function usePrefetchUserRecipe() {
  const {data:Me}=useMe()
    const queryClient=useQueryClient()
  const prefetchUserRecipe = (page) => {
    const cached = queryClient.getQueryData(["user-recipes",page]);

    if (cached) return; 

    queryClient.prefetchQuery({
      queryKey:["user-recipes",page],
             queryFn:async()=>{
                 const response = await userRecipesApi(page)
                 return response.data
             },
             keepPreviousData:true,
             placeholderData:keepPreviousData,
             enabled:!!Me,
  staleTime: 1000 * 60 * 5,
  gcTime: 1000 * 60 * 10,
    });
  };
  return { prefetchUserRecipe };

}
