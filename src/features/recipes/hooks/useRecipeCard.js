import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useMe from '../../profile/hooks/useMe'
import { useDeleteRecipe } from './useDeleteRecipe'
import { useLikeRecipe } from './useLikeRecipe'
import useIsMobile from '../../../Utility/useIsMobile'
import usePrefetchRecipe from './usePrefetchRecipe';
import useHoverPrefetch from '../../../Hooks/useHoverPrefetch'

export const useRecipeCard=(recipe)=> {
 const navigate=useNavigate()
const {data:Me}=useMe()
const recipeDeleteMutation=useDeleteRecipe()
const likeRecipeMutation=useLikeRecipe()
const [openDailogBox,setOpenDailogBox]=useState(false)
const {prefetchRecipe}=usePrefetchRecipe()
const {handleHover}=useHoverPrefetch(prefetchRecipe)
const isMobile=useIsMobile()

const handleEditHover=()=>{
if(Me?._id===recipe?.user?._id){
handleHover(recipe._id)
}
}
const handleRecipeHover=()=>{
  handleHover(recipe._id)
}
const handleDelete=()=>{
recipeDeleteMutation.mutate(recipe._id,{
  onSuccess:()=>{
    setOpenDailogBox(false)
  }
})
}
const handleLike=()=>{
  if(!Me){
    navigate('/login')
    return
  }
likeRecipeMutation.mutate(recipe)
}
const isLiked = Me?.likedRecipes?.some(
  (liked) =>
    liked?._id === recipe?._id || liked === recipe?._id
)
const handleEdit=()=>{
  if(isMobile){
    prefetchRecipe(recipe._id)
  }
  navigate(`/editrecipe/${recipe._id}`)
}
const handleView=()=>{
  if(isMobile){
    prefetchRecipe(recipe._id)
  }
 navigate(`/recipepage/${recipe._id}`)
}

return{
isLiked,
handleDelete,
handleEdit,
handleEditHover,
handleRecipeHover,
handleLike,
handleView,
 isLiking: likeRecipeMutation.isPending,
    isDeleting: recipeDeleteMutation.isPending,
    openDailogBox,
    setOpenDailogBox
}

}
