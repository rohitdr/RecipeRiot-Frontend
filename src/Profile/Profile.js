import React, { useState } from 'react'
import ProfileInfo from './ProfileInfo'
import ProfileCard from './ProfileCard'
import Settings from './Settings'
import Recipe from './Recipe'
import Liked from './Liked'

export default function Profile() {
    const [activeTab,setActiveTab]=useState("profile")
  return (
  <section className='min-h-screen  py-24 bg-[#06070d] text-white'>
    <div className='max-w-7xl mx-auto'>
          <div className="flex flex-wrap gap-3 mb-8 border-b border-white/10 pb-6">
    {["profile", "recipes", "Liked", "settings"].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-5 py-2 rounded-full font-semibold transition ${
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
<div className='grid max-w-7xl lg:grid-cols-[300px_1fr] mx-auto gap-6 px-4 '>
        
  <ProfileCard></ProfileCard>

  
{activeTab==="profile" &&   <ProfileInfo></ProfileInfo>}
{activeTab==="settings" &&   <Settings></Settings>}
{activeTab==="recipes" &&  <Recipe></Recipe>}
{activeTab==="Liked" &&  <Liked/>}
 
     
  </div>
  
     
  </section>
  )
}
