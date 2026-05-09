
 import React, { useContext, useState } from "react";
 import { motion } from "framer-motion";
 import {  FaSave,FaSpinner } from "react-icons/fa";
import { toast } from "sonner";
import AuthContext from "../Context/AuthContext";
import { useProfileUpdateMutation, useUserMutation } from "../Mutations/userMutations";
export default function ProfileInfo({user}) {
  const {handleError,updateUserInformtion}=useContext(AuthContext)
  const userUpdateMutaion=useProfileUpdateMutation(handleError)
  const [formData,setformData]=useState({name:user?.name || "",email:user?.email || "",username:user?.username || "",phoneNumber:user?.phoneNumber || "",bio:user?.bio || ""})
  const handleChange=({target:{name,value}})=>{
    setformData(prev=>({...prev,[name]:value}))
  }
  const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex=/^[6-9]\d{9}$/;
  const nameRegex=/^[A-Za-z\s'-]{2,50}$/;
  const validate=()=>{
    if(!nameRegex.test(formData.name.trim())){
      return "Enter a valid Name"
    }
    if(!emailRegex.test(formData.email.trim())){
      return "Enter a valid Email"
    }
    if(formData.username.trim().length<8){
      return "Username Cannot be less than 8 Characters"
    }
    if(!phoneRegex.test(String(formData.phoneNumber).trim())){
      return "Enter a valid Phone Number"
    }
     if(!formData.bio.trim()){
      return "Bio Cannot be empty"
    }
   
   
 return null;
  }
const isFormValid =
  formData.name?.trim() &&
  formData.email?.trim() &&
  formData.username?.trim() &&
  String(formData.phoneNumber)?.trim() &&
  formData.bio?.trim()


  const handleSubmit=(e)=>{
  e.preventDefault()
  const error = validate()
  if(error){
toast.warning(error)
    return
  }
  const updatedFields = {}

  Object.keys(formData).forEach((key) => {
    if (formData[key] !== user[key]) {
      updatedFields[key] = formData[key]
    }
  })

  if (Object.keys(updatedFields).length === 0) {
    console.log("hle")
    toast.info("No changes made")
    return
  }

  userUpdateMutaion.mutate(updatedFields)
  }
  return (

        <motion.div
                  initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{opacity:0,y:30}}
         
        className=" bg-white/[0.03] border border-white/10 py-6 rounded-3xl px-8">
         <form className="flex flex-col" onSubmit={handleSubmit}>
            <h1 className="text-2xl sm:text-5xl font-bold">Profile Information</h1>
            <p className="text-white/70 py-1">Update Your Personal detail for RecipeRiot</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 py-3">
         <div className="flex flex-col">
         <label htmlFor="profile-name" className="text-white/70 font-bold text-sm py-1">Full Name</label>
         <input
            className="w-full mt-2 bg-black/20 border border-white/10 rounded-2xl p-4 outline-none focus:border-orange-400"
         type="text" name="name" id="profile-name" value={formData.name} onChange={handleChange} />
         </div>
         <div className="flex flex-col">
         <label htmlFor="profile-email" className="text-white/70 font-bold text-sm py-1">Email</label>
       <input
          className="w-full mt-2 bg-black/20 border border-white/10 rounded-2xl p-4 outline-none focus:border-orange-400"
       type="email" name="email" value={formData.email} onChange={handleChange} id="profile-email" />
         </div>
         <div className="flex flex-col">
         <label htmlFor="profile-username" className="text-white/70 font-bold text-sm py-1">Username</label>
       <input
          className="w-full mt-2 bg-black/20 border border-white/10 rounded-2xl p-4 outline-none focus:border-orange-400"
       type="text" name="username" id="profile-username" value={formData.username} onChange={handleChange} />
         </div>
         <div className="flex flex-col">
         <label htmlFor="profile-phoneNumber" className="text-white/70 font-bold text-sm py-1">Phone Number</label>
       <input
          className="w-full mt-2 bg-black/20 border border-white/10 rounded-2xl p-4 outline-none focus:border-orange-400"
       type="tel" name="phoneNumber" id="profile-phoneNumber" maxLength={10} minLength={10} value={formData.phoneNumber} onChange={handleChange}/>
         </div>
         <div className="md:col-span-2 ">
  <label htmlFor="profile-bio" className="text-white/70 font-bold text-sm py-1">Bio</label>
         <textarea
          className="  w-full mt-2 bg-black/20 border border-white/10 rounded-2xl p-4 outline-none focus:border-orange-400"
          name="bio"
          id="profile-bio"
          value={formData.bio}
          onChange={handleChange}
          ></textarea>
         </div>
          
        </div>
        <div>
 <button
           disabled={!isFormValid ||userUpdateMutaion.isPending}
           type="submit"
            className="mt-2 px-8 py-4 bg-orange-500 text-black font-bold rounded-full flex items-center gap-3 hover:scale-105 transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
          {userUpdateMutaion.isPending?<FaSpinner className="animate-spin text-white"></FaSpinner>
            :"Save Changes"}
          </button>
        </div>
              
         </form>
        </motion.div>

 
  )
}
