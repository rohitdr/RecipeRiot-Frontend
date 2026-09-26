import { keepPreviousData, useQueryClient } from '@tanstack/react-query'
import { getRecipeByCategoryApi } from '../../features/recipes/services/recipe.api';


export default function usePrefetch() {
    const queryClient=useQueryClient()
  const prefetchRecipe = ({categoryName,categoryType,page,sort}) => {
    const cached = queryClient.getQueryData(["recipes", categoryName,categoryType,page,sort]);

    if (cached) return; 

    queryClient.prefetchQuery({
       queryKey:["recipes",categoryName,categoryType,page,sort],
    queryFn: async ()=>{
         const response = await getRecipeByCategoryApi(categoryName,categoryType,page,sort);
         return response.data
      },
      keepPreviousData: true,
    placeholderData: keepPreviousData,
  staleTime: 1000 * 60 * 5,
  gcTime: 1000 * 60 * 10,
    });
  };
  return { prefetchRecipe };

}
