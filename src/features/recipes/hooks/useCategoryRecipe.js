import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import usePrefetch from "../../../Hooks/PrefetchHooks/usePrefetch"
import useRecipes from "../../../Hooks/useRecipes"
import { toCamelCase } from "../../../Utility/Utility"

export const useCategoryRecipe=()=>{


  const {categoryName,categoryType}=useParams()
  const [page,setPage]=useState(1)
  const [sort,setSort]=useState("Newest")
const {prefetchRecipe}=usePrefetch()
  const sortOptions=["Newest","Top Rated","Trending","Mintue Meals","Low Calories","High Calories"]
 useEffect(()=>{
setPage(1)
setSort("Newest")
 },[categoryName,categoryType])

  const {data,isFetching}=useRecipes(categoryName.toLocaleLowerCase(),toCamelCase(categoryType),page,toCamelCase(sort))
 useEffect(()=>{
  if(page<data?.totalPages){
    
    prefetchRecipe({categoryName:categoryName.toLocaleLowerCase(),categoryType:toCamelCase(categoryType),page:page+1,sort:toCamelCase(sort)})
  }
 },[categoryName,categoryType,sort,page])


   
  return {
    categoryName,
    data,
    isFetching,

    page,
    setPage,

    sort,
    setSort,

    sortOptions,
  };
}