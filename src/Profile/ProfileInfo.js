
 import React, { useState } from "react";
 import { motion } from "framer-motion";
 import {  FaSave } from "react-icons/fa";
export default function ProfileInfo() {
  return (

        <motion.div
                  initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{opacity:0,y:30}}
         
        className=" bg-white/[0.03] border border-white/10 py-6 rounded-3xl px-8">
         <form className="flex flex-col">
            <h1 className="text-2xl sm:text-5xl font-bold">Profile Information</h1>
            <p className="text-white/70 py-1">Update Your Personal detail for RecipeRiot</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 py-3">
         <div className="flex flex-col">
         <label htmlFor="" className="text-white/70 font-bold text-sm py-1">Full Name</label>
         <input
            className="w-full mt-2 bg-black/20 border border-white/10 rounded-2xl p-4 outline-none focus:border-orange-400"
         type="text" name="" id="" />
         </div>
         <div className="flex flex-col">
         <label htmlFor="" className="text-white/70 font-bold text-sm py-1">Email</label>
       <input
          className="w-full mt-2 bg-black/20 border border-white/10 rounded-2xl p-4 outline-none focus:border-orange-400"
       type="email" name="" id="" />
         </div>
         <div className="flex flex-col">
         <label htmlFor="" className="text-white/70 font-bold text-sm py-1">Username</label>
       <input
          className="w-full mt-2 bg-black/20 border border-white/10 rounded-2xl p-4 outline-none focus:border-orange-400"
       type="email" name="" id="" />
         </div>
         <div className="flex flex-col">
         <label htmlFor="" className="text-white/70 font-bold text-sm py-1">Phone Number</label>
       <input
          className="w-full mt-2 bg-black/20 border border-white/10 rounded-2xl p-4 outline-none focus:border-orange-400"
       type="email" name="" id="" />
         </div>
         <div className="md:col-span-2 ">
  <label htmlFor="" className="text-white/70 font-bold text-sm py-1">Bio</label>
         <textarea
          className="  w-full mt-2 bg-black/20 border border-white/10 rounded-2xl p-4 outline-none focus:border-orange-400"
          ></textarea>
         </div>
          
         
        </div>
        <div>
 <button
           
            className="mt-2 px-8 py-4 bg-orange-500 text-black font-bold rounded-full flex items-center gap-3 hover:scale-105 transition"
          >
            <FaSave /> Save Changes
          </button>
        </div>
              
         </form>
        </motion.div>

 
  )
}
