import { keepPreviousData, usePrefetchQuery, useQueries, useQueryClient } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { userLikeRecipeApi, userRecipesApi } from '../../Api/UserApi';
import AuthContext from '../../Context/AuthContext';
import RecipeContext from '../../Context/RecipeContext';

export default function usePrefetchRecipe() {
  const {Me}=useContext(AuthContext)
  const {getrecipeByid}=useContext(RecipeContext)
    const queryClient=useQueryClient()
  const prefetchRecipe = (id) => {
    const cached = queryClient.getQueryData(["recipe",id]);

    if (cached) return; 

    queryClient.prefetchQuery({
      queryKey:["recipe",id],
    queryFn:()=>{
       return getrecipeByid(id)
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
