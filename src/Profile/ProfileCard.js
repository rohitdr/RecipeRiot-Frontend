import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'

 import { FaCamera,FaSpinner,FaUpload } from "react-icons/fa";
import { toast } from 'sonner';
import AuthContext from '../Context/AuthContext';
import { useProfileImageMutation } from '../Mutations/userMutations';
export default function ProfileCard({user}) {
  const {updateProfileImage,handleError}=useContext(AuthContext)
  const userImageMutation=useProfileImageMutation(updateProfileImage,handleError)
  const [preview,setPreview]=useState(null)
  const [image,setImage]=useState(null)
  const handleChange=(e)=>{
   const file = e.target.files[0]
   if(file.size>10000000){
    toast.error("Image Size should be less than 10 mb")
    return
   }
   setImage(file)
  }
  useEffect(()=>{
    if(!image) return
   const url = URL.createObjectURL(image)
   setPreview(url)
   return ()=>URL.revokeObjectURL(url)
  },[image])
  const handleClick=()=>{
    if(!image || !preview) return
    userImageMutation.mutate(image)
  }
  return (
        <motion.div
       initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        className='flex flex-col gap-2  items-center bg-white/[0.03] border border-white/10 py-8 rounded-3xl h-fit'>
            <div className='relative w-fit cursor-pointer '>
              <label htmlFor="profile-image">
         <img src={preview ||user?.profileImage?.url ||"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"}   loading='lazy'  className="w-32 h-32 cursor-pointer rounded-full object-cover border-4 border-orange-500" alt="User Image" loading='lazy' />
           <button className="absolute bottom-2 right-2 bg-orange-500 p-3 rounded-full text-black">
              {userImageMutation.isPending && <FaSpinner className='animate-spin text-white'></FaSpinner>}{!userImageMutation.isPending &&(!preview?<FaCamera />:<FaUpload onClick={handleClick}/>)}
               <input type='file' accept="image/*" id='profile-image' onChange={handleChange} hidden/>
             </button></label>
            </div>
            <h1 className="text-2xl font-bold pt-2">{user?.name || "User"}</h1>
            <p>{user?.email ||"user.gmail.com"}</p>
            <div className="flex gap-3 text-center py-2 w-full px-4">
              <div className="bg-white/5 p-3 rounded-2xl w-full">
               <h3 className="font-bold text-orange-400">{user?.totalRecipes  || 0}</h3>
               <p className="text-xs text-white/50">Recipes</p>
             </div>

             <div className="bg-white/5 p-3 rounded-2xl w-full">
               <h3 className="font-bold text-orange-400">{user?.likedRecipes?.length || 0}</h3>
               <p className="text-xs text-white/50">Liked</p>
             </div>

             <div className="bg-white/5 p-3 rounded-2xl w-full">
               <h3 className="font-bold text-orange-400">{user?.totalComments || 0}</h3>
               <p className="text-xs text-white/50">Comments</p>
            </div>
            </div>
        </motion.div>
  )
}
