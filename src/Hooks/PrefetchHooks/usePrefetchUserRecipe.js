import { keepPreviousData, usePrefetchQuery, useQueries, useQueryClient } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { userRecipesApi } from '../../Api/UserApi';
import AuthContext from '../../Context/AuthContext';

export default function usePrefetchUserRecipe() {
  const {Me}=useContext(AuthContext)
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
