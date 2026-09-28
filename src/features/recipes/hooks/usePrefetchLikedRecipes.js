import { keepPreviousData, useQueryClient } from '@tanstack/react-query'

import { userLikedRecipesApi } from '../services/recipe.api';
import useMe from '../../profile/hooks/useMe';

export default function usePrefetchLikedRecipe() {
  const {data:Me}=useMe()
    const queryClient=useQueryClient()
  const prefetchLikedRecipe = (page) => {
    const cached = queryClient.getQueryData(["user-likedRecipes",page]);

    if (cached) return; 

    queryClient.prefetchQuery({
      queryKey:["user-likedRecipes",page],
             queryFn:async()=>{
                 const response = await userLikedRecipesApi(page)
                 return response.data
             },
             keepPreviousData:true,
             placeholderData:keepPreviousData,
             enabled:!!Me,
  staleTime: 1000 * 60 * 5,
  gcTime: 1000 * 60 * 10,
    });
  };
  return { prefetchLikedRecipe };

}
