import { useQueryClient } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
 import {FaSpinner } from "react-icons/fa";
import AuthContext from '../Context/AuthContext'
import { useChangePasswordMutation } from '../Mutations/userMutations'
import LogoutConfirmDialog from '../Components/DailogBoxes/simpleDailogBox'
import DeleteRecipeDialog from '../Components/DailogBoxes/DangerDailogBox'



export default function Settings() {
  const navigate=useNavigate()
  const {handleError}=useContext(AuthContext)
  const queryClient=useQueryClient()
  const changePasswordMutation=useChangePasswordMutation(handleError)
  const [formData,setFormData]=useState({oldPassword:"",newPassword:"",confirmPassword:""})
    const [open, setOpen] = useState(false);
  const handleChange=({target:{name,value}})=>{
   setFormData(prev=>({...prev,[name]:value}))
  }

  const validate=()=>{
    if(formData.oldPassword.length<8 || formData.newPassword.length<8 || formData.confirmPassword.length <8){
return "Password Length Cannot be less than 8"
    }
    if(formData.oldPassword === formData.newPassword){
      return "Old password and New password cannot be same"
    }
    if(formData.newPassword !== formData.confirmPassword){
        return "Confirm password and New password must be same"
    }
    return null
  }
  const isFormValid=formData.oldPassword.length>=8 && formData.newPassword.length>=8 && formData.confirmPassword.length>=8
    const handleSubmit=()=>{
     const error=validate()
     if(error){
      toast.error(error)
     }
     changePasswordMutation.mutate({oldPassword:formData.oldPassword,newPassword:formData.newPassword})

  }
  const handleLogoutClick=()=>{
    localStorage.removeItem("accessToken")
        navigate('/home')
    toast.info("You have been loggout out successfully")
  queryClient.removeQueries({
  queryKey: ["Me"]
})

queryClient.removeQueries({
  queryKey: ["user-likedRecipes"]
})
queryClient.removeQueries({
  queryKey: ["user-recipes"]
})

  }
  return (
   <motion.div
   initial={{opacity:0,y:30}}
   animate={{opacity:1,y:0}}
   exit={{opacity:0,y:30}}
  className='max-w-7xl mx-auto'
   >


    <div className="space-y-5">

  {/* Change Password */}
<div className="bg-white/5 border border-white/10 rounded-3xl p-6">
  <h2 className="text-2xl font-bold">
    Change Password
  </h2>

  <p className="text-white/50 text-sm mt-1 mb-6">
    Update your account password securely.
  </p>

  <div className="space-y-4">
    
    <div className="flex flex-col">
      <label htmlFor='oldPassword' className="text-sm text-white/70 mb-2">
        Current Password
      </label>
      <input
      id='oldPassword'
      name='oldPassword'
      onChange={handleChange}
        type="password"
        placeholder="Enter current password"
        className="
          w-full
          bg-black/20
          border border-white/10
          rounded-2xl
          p-4
          outline-none
          focus:border-orange-400
        "
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor='newPassword' className="text-sm text-white/70 mb-2">
        New Password
      </label>
      <input
        id='newPassword'
      name='newPassword'
      onChange={handleChange}
        type="password"
        placeholder="Enter new password"
        className="
          w-full
          bg-black/20
          border border-white/10
          rounded-2xl
          p-4
          outline-none
          focus:border-orange-400
        "
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor='confirmPassword' className="text-sm text-white/70 mb-2">
        Confirm Password
      </label>
      <input
        id='confirmPassword'
      name='confirmPassword'
      onChange={handleChange}
        type="password"
        placeholder="Confirm new password"
        className="
          w-full
          bg-black/20
          border border-white/10
          rounded-2xl
          p-4
          outline-none
          focus:border-orange-400
        "
      />
    </div>
  </div>

  <button
  disabled={!isFormValid || changePasswordMutation.isPending}
  type='submit'
    className="
      mt-6
      px-6 py-3
      bg-orange-500
      text-black
      font-bold
      rounded-full
      hover:scale-105
      transition
      disabled:opacity-25
      disabled:cursor-not-allowed
    "
    onClick={handleSubmit}
  >
    {changePasswordMutation.isPending?<FaSpinner className='animate-spin text-white'></FaSpinner>
   : "Update Password"} </button>
</div>

  


      <div className="bg-white/5 border border-white/10 rounded-3xl p-5">
        <h2 className="text-xl font-semibold">
          Logout
        </h2>
        <p className="text-white/50 text-sm mt-1">
          Sign out from your RecipeRiot account.
        </p>

        <button onClick={()=>{setOpen(true)}} className="mt-4 px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition">
          Logout
        </button> 

      </div>
      

      {/* Danger Zone */}
      <div className="bg-red-500/10 border border-red-500/30 rounded-3xl p-5">
        <h2 className="text-xl font-semibold text-red-400">
          Danger Zone
        </h2>

        <p className="text-white/50 text-sm mt-1">
          Permanently delete your account and all your recipes.
        </p>

        <button onClick={()=>{setOpen(true)}}  className="mt-4 px-6 py-3 bg-red-500 text-white font-bold rounded-full hover:scale-105 transition disabled:opacity-10">
          Delete Account
        </button>
      </div>
<LogoutConfirmDialog open={open} setOpen={setOpen}></LogoutConfirmDialog>

    </div>
  </motion.div>
  )
}
