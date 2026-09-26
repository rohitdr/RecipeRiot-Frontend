

import { useCategoryRecipe } from '../features/recipes/hooks/useCategoryRecipe'
import SortOptions from '../features/recipes/components/SortOptions';
import CategoryGrid from '../features/recipes/components/CategroyGrid';
import Pagination from '../Components/navigation/Pagination';
import AppLoader from '../Components/loaders/AppLoader';

export default function CategoryRecipe() {
const {
    categoryName,
    data,
    isFetching,

    page,
    setPage,

    sort,
    setSort,

    sortOptions,
  }=useCategoryRecipe()


  return (
  <section className='min-h-screen bg-[#0b0f19] text-white py-24 px-3'>
 <div className='flex flex-col gap-6 max-w-7xl mx-auto '>
 <div className='rounded-3xl bg-gradient-to-r from-orange-500/20 to-red-500/10 border border-white/10 p-5 sm:p-8 '>


 <div className='text-orange-400 text-sm'>
    CATEGORY COLLECTION
 </div>
 <div className='flex gap-4 flex-col py-2'>
    <h1 className='text-2xl sm:text-4xl lg:text-6xl font-bold'>{categoryName} Recipes</h1>
         <p className='max-w-2xl text-white/70'>Explore handpicked recipes from this category—crafted for every craving, mood, and occasion</p>
 </div>
 <div className='flex gap-4 pt-4'>
 <div className='text-xs lg:text-base rounded-3xl bg-white/10 px-2 sm:px-4 py-2 '>{data?.totalResults} Recipes</div>
  <div className=' text-xs lg:text-base rounded-3xl bg-white/10 px-2 sm:px-4 py-2'> Most Loved Category</div>
 </div> </div>
<SortOptions options={sortOptions} selectedSort={sort} onSortChange={setSort}></SortOptions>
<div className='h-2'>
{isFetching && data && (
  <div className="flex justify-center py-4 ">
    <AppLoader height="h-2" spinnerHight='h-2' spinnerWidth='w-1' text=''/>
  </div>
)}</div>
<CategoryGrid data={data}></CategoryGrid>
 <Pagination page={page} setPage={setPage} totalPages={data?.totalPages}></Pagination>

 </div>
  </section>
  )
}
