import React, { useContext, useState } from 'react'
import { FaLock,FaEnvelope,FaPhoneAlt,FaUser,FaSpinner  } from "react-icons/fa";
import { motion, useScroll } from 'framer-motion';
import { MdAlternateEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import AuthContext from '../Context/AuthContext';
import { useForgetPasswordMutation, useSignUpMutation } from '../Mutations/userMutations';
export default function ForgetPassword() {
  const {handleError}=useContext(AuthContext)
  const [formData,setFormData]=useState({email:"",password:"",username:"",confirmPassword:""})
  const forgetPasswordMutation=useForgetPasswordMutation(handleError)
  const handleChange=({target:{name,value}})=>{
 setFormData(prev=>({...prev,[name]:value}))
  }
  const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex=/^[6-9]\d{9}$/;
  const nameRegex=/^[A-Za-z\s'-]{2,50}$/;
  const validate=()=>{
    if(!emailRegex.test(formData.email.trim())){
      return "Enter a valid Email"
    }
    if(formData.username.trim().length<8){
      return "Username Cannot be less than 8 Characters"
    }
    if(formData.password.length<8){
      return "Password Length must be more than 8"
    }
    if(formData.confirmPassword.length<8){
      return "Confirm Password Length must be more than 8"
    }
    if(formData.password !== formData.confirmPassword){
      return "Password and Confirm Password must be same"
    }
 return null;
  }
  const isFormValid= formData.email.trim() && formData.username.trim() && formData.password && formData.confirmPassword ;
  const handleSubmit=(e)=>{
 e.preventDefault()
 const error = validate()
 if(error){
  toast.error(error)
  return
 }
 const data ={email:formData.email.trim(),username:formData.username.trim(),password:formData.password}
 forgetPasswordMutation.mutate(data)
  }
  return (
  <section className='min-h-screen flex items-center justify-center relative overflow-hidden'>
    <div className='absolute inset-0'>
 <img
    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920"
    className='object-cover w-full h-full'
  alt="food bg" 
  />
  <div className='absolute inset-0 bg-black/60'></div>
    </div>
    <motion.div 
    initial={{opacity:0,scale:0.9}}
    animate={{opacity:1,scale:1}}
    transition={{duration:0.5}}
        className='relative max-w-md bg-white/10 m-4 h-full p-4 backdrop-blur-2xl border-2 border-white rounded-3xl shadow-2xl'>
  
     <div className="text-center m-2 sm:m-4 md:m-10 ">
          <h1 className="text-4xl font-extrabold tracking-wide">🍲 RecipeRiot</h1>
          <p className="text-sm text-white/70 mt-2">
           Cook bold. Share loud. Taste chaos.
         </p>
      </div>
      <form className='flex flex-col m-2 sm:m-4 md:m-7 mb-0'  onSubmit={handleSubmit}>
    <div className=' flex flex-col sm:flex-row  sm:gap-4 sm:my-2'>

        <div className='relative focus-within:ring-blue-600 border border-white outline-none rounded-lg focus-within:ring-2 focus-within:border-transparent mt-4 transition'>
        <FaEnvelope className="absolute top-[17px] left-3 text-white/40"/>
          <input type="text" name="email" id="forget-email" autoComplete='email' className='py-3 outline-none  text-white  h-full bg-white/10 w-full  shadow rounded-lg pl-9' onChange={handleChange} placeholder='Enter  Email' />
        </div>
          <div className='relative focus-within:ring-blue-600 border border-white outline-none rounded-lg focus-within:ring-2 focus-within:border-transparent mt-4 transition'>
        <MdAlternateEmail className="absolute top-[17px] left-3 text-white/40"/>
          <input type="text" name="username" id="forget-username" autoComplete='username'  className='py-3 text-white outline-none   h-full bg-white/10 w-full  shadow rounded-lg pl-9' onChange={handleChange} placeholder='Enter  Username' />
        </div>
    </div>
     
        <div className='relative border border-white  focus-within:ring-blue-600 outline-none rounded-lg my-2 focus-within:ring-2 focus-within:border-transparent   transition'>
     <FaLock className='absolute top-[16px] left-3 text-white/40 '></FaLock>
       <input type="password" name="password" id="forget-password" autoComplete='new-password'  className=' text-white py-3 bg-white/10  h-full w-full outline-none   shadow rounded-lg pl-9' onChange={handleChange} placeholder='Enter  Password'/> 
        </div>
        <div className='relative border border-white  focus-within:ring-blue-600 outline-none rounded-lg my-2 focus-within:ring-2 focus-within:border-transparent   transition'>
     <FaLock className='absolute top-[16px] left-3 text-white/40 '></FaLock>
       <input type="password" name="confirmPassword" id="forget-confirm-password" autoComplete='confirm-password'  className=' text-white py-3 bg-white/10  h-full w-full outline-none   shadow rounded-lg pl-9' onChange={handleChange} placeholder='Enter Confirm Password'/> 
        </div>
     
        <div className='relative flex justify-center'>
            <button type="submit" disabled={!isFormValid || forgetPasswordMutation.isPending} className='text-white  text-sm h-full w-full hover:scale-105 my-3 sm:my-6 transition bg-gradient-to-r from-orange-500 to-pink-500  py-2.5 rounded-lg disabled:text-gray-500 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center '>
              {forgetPasswordMutation.isPending ?<FaSpinner className='animate-spin text-white'/>:"Change Password"}
               </button>
        </div>
      </form>

    </motion.div>

  </section>
  )
}
