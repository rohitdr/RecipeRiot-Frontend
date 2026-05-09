import React, { useContext, useState } from 'react'
import ProfileInfo from './ProfileInfo'
import ProfileCard from './ProfileCard'
import Settings from './Settings'
import Recipe from './Recipe'
import Liked from './Liked'
import AuthContext from '../Context/AuthContext'

export default function Profile() {
    const [activeTab,setActiveTab]=useState("profile")
    const {Me}=useContext(AuthContext)
    {console.log(Me)}
  return (
    
  <section className='min-h-screen  py-24 bg-[#06070d] text-white'>
    <div className='max-w-7xl mx-auto'>
          <div className="flex flex-wrap gap-3 mb-8 px-4 border-b border-white/10 pb-6">
    {["profile", "recipes", "Liked", "settings"].map((tab) => ( 
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
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
{activeTab==="settings" &&   <Settings user={Me}></Settings>}
{activeTab==="recipes" &&  <Recipe user={Me}></Recipe>}
{activeTab==="Liked" &&  <Liked user={Me}/>}
     
  </section>
  )
}
