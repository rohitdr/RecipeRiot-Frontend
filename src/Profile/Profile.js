import React, { lazy, Suspense, useContext, useEffect, useState } from 'react'
import ProfileInfo from './ProfileInfo'
import ProfileCard from './ProfileCard'

import AuthContext from '../Context/AuthContext'
import useHoverPrefetch from '../Hooks/PrefetchHooks/useHoverPrefetch'
import usePrefetch from '../Hooks/PrefetchHooks/usePrefetch'
import usePrefetchUserRecipe from '../Hooks/PrefetchHooks/usePrefetchUserRecipe'
import useIsMobile from '../Utility/useIsMobile'
import usePrefetchLikedRecipe from '../Hooks/PrefetchHooks/usePrefetchLikedRecipes'
import AppLoader from '../Components/AppLoader'
const Settings=lazy(()=>import('./Settings'))
const Recipe=lazy(()=>import('./Recipe'))
const Liked=lazy(()=>import('./Liked'))

export default function Profile() {
    const [activeTab,setActiveTab]=useState("profile")
    const {Me}=useContext(AuthContext)
    const{prefetchUserRecipe}=usePrefetchUserRecipe()
    const {prefetchLikedRecipe}=usePrefetchLikedRecipe()
    const {handleHover}=useHoverPrefetch(prefetchUserRecipe)
    const {handleHover:handleHoverLiked}=useHoverPrefetch(prefetchLikedRecipe)
    const isMobile=useIsMobile()
  const handleMouseEnter=(tab)=>{
    if(tab==="recipes"){
      handleHover(1)
    }
    if(tab==="Liked"){
      handleHoverLiked(1)
    }
  }
  const handleClick=(tab)=>{
    if(isMobile && tab==="recipes"){
 prefetchUserRecipe(1)
    }
    if(isMobile && tab==="Liked"){
     prefetchLikedRecipe(1)
    }
       setActiveTab(tab)
  }
  return (
    
  <section className='min-h-screen  py-24 bg-[#06070d] text-white'>
    <div className='max-w-7xl mx-auto'>
          <div className="flex overflow-x-auto gap-3 mb-8 px-4 border-b border-white/10 pb-6">
    {["profile", "recipes", "Liked", "settings"].map((tab) => ( 
      <button
        key={tab}
        onClick={()=>{handleClick(tab)}}
        onMouseEnter={()=>handleMouseEnter(tab)}
        className={`px-3 sm:px-5 py-2 text-sm sm:text-base rounded-full font-semibold transition ${
          activeTab === tab
            ? "bg-orange-500 text-black"
            : "bg-white/5 text-white hover:border-orange-400 border border-white/10"
        }`}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)}
      </button>
    ))}
  </div>
    </div>

  {activeTab==="profile" &&  <div className='grid max-w-7xl lg:grid-cols-[300px_1fr] mx-auto gap-6 px-4 '>
  <ProfileCard user={Me}></ProfileCard>  
   <ProfileInfo user={Me}></ProfileInfo>
  </div>}
  <Suspense fallback={<AppLoader></AppLoader>}>
{activeTab==="settings" &&   <Settings user={Me}></Settings>}
{activeTab==="recipes" &&  <Recipe user={Me}></Recipe>}
{activeTab==="Liked" &&  <Liked user={Me}/>}
     </Suspense>
  </section>
  )
}
