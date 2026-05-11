import { keepPreviousData, usePrefetchQuery, useQueries, useQueryClient } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { userLikedRecipesApi, userLikeRecipeApi, userRecipesApi } from '../../Api/UserApi';
import AuthContext from '../../Context/AuthContext';

export default function usePrefetchLikedRecipe() {
  const {Me}=useContext(AuthContext)
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
