
import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
export default function Footer() {
  const navigate=useNavigate()
 const exploreList=[
  {name:"Home",link:"/home"},
  {name:"Profile",link:"/profile"},
  {name:"Category",link:"/category/Meal%20Type/Breakfast"},
  {name:"About",link:"/about"}
 ]
 const profileList=[
  {name:"My Portfolio",link:"https://rohit-portfolio-mern.vercel.app/"},
  {name:"RecipeRiot",link:"https://recipe-riot-frontend.vercel.app/"},
  {name:"ChatNova",link:"https://chat-nova-frontend-4nna.vercel.app/"},
  {name:"GitHun",link:"https://github.com/rohitdr"}
 ]
  return (
  <section className= ' relative text-white px-8 sm:px-10 py-10 items-center overflow-hidden'>

       {/* 🌈 Glow Effects */}
       <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-orange-500/10 blur-[140px] rounded-full"></div>
       <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-pink-500/10 blur-[140px] rounded-full"></div>

    <div className='grid grid-cols-1 md:grid-cols-4 gap-10  max-w-7xl mx-auto z-20 '>
        <div className='flex flex-col'>
            <div>
                  <h2 className="text-2xl font-extrabold">
             Recipe<span className="text-orange-400">Riot</span>
            </h2>
              <p className="text-white/60 mt-3 text-sm">
              Discover, cook & share amazing recipes with food lovers around the world.
           </p>
            </div>
               </div>

 <div>
             <h3 className="font-semibold mb-3">Explore</h3>
             <ul className="space-y-2 text-white/60 text-sm">
             {exploreList.map(({name,link},index)=>{
  return <li className="hover:text-white cursor-pointer" key={index} onClick={()=>{navigate(link)}}>{name}</li>
             })}
           
             </ul>
           </div>
                   <div>
             <h3 className="font-semibold mb-3">Rohit Kumar</h3>
             <ul className="space-y-2 text-white/60 text-sm">
                {profileList.map(({name,link},index)=>{
  return <li className="hover:text-white cursor-pointer" key={index} onClick={()=>{window.open(link,"_blank")}}>{name}</li>
             })}
              </ul>
          </div>
      
       <div>
             <h3 className="font-semibold mb-3">Join Us</h3>
             <p className="text-white/60 text-sm mb-4">
               Share your recipes & connect with food lovers 🍽️
             </p>

             <motion.button
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={()=>navigate(`/addRecipe`)}
               className="px-5 py-2 rounded-lg text-sm font-semibold
               bg-gradient-to-r from-orange-500 to-pink-500"
             >
               Post a Recipe
                            </motion.button>
           </div>
         </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
           © {new Date().getFullYear()} RecipeRiot. All rights reserved.
        </div>
       



  </section>
  )
}
