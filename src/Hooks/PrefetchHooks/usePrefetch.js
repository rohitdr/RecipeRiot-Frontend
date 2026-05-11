import { keepPreviousData, usePrefetchQuery, useQueries, useQueryClient } from '@tanstack/react-query'
import React from 'react'

export default function usePrefetch() {
    const queryClient=useQueryClient()
  const prefetchRecipe = ({categoryName,categoryType,getRecipes,page,sort}) => {
    const cached = queryClient.getQueryData(["recipes", categoryName,categoryType,page,sort]);

    if (cached) return; 

    queryClient.prefetchQuery({
       queryKey:["recipes",categoryName,categoryType,page,sort],
    queryFn:()=>{
        return getRecipes(categoryName,categoryType,page,sort)
    },
      keepPreviousData: true,
    placeholderData: keepPreviousData,
  staleTime: 1000 * 60 * 5,
  gcTime: 1000 * 60 * 10,
    });
  };
  return { prefetchRecipe };

}
