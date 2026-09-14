import { keepPreviousData, useQueryClient } from '@tanstack/react-query'
import { useContext } from 'react'
import RecipeContext from '../../Context/RecipeContext';

export default function usePrefetchRecipe() {

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
