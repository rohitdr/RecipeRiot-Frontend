import React, { useContext, useState } from 'react'
import { FaLock,FaEnvelope } from "react-icons/fa";
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { FaSpinner } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import {  useLoginMutation } from '../Mutations/userMutations';

export default function Login() {
  const [formData,setFormData]=useState({email:"",password:""})
  const {login,handleError}=useContext(AuthContext)
  const loginMutation=useLoginMutation(handleError)
 const handleChange=({target:{name,value}})=>{
   setFormData(prev=>({...prev,[name]:value}))
 }
   const emailRegex = /^\S+@\S+\.\S+$/;
 const validate =()=>{
 if(!formData.email.trim() ){
  return "Email Cannot be Empty"
 }
 if(!emailRegex.test(formData.email.trim()) ){
  return "Enter a valid Email"
 }
 if(!formData.password ){
  return "Password Cannot be empty"
 }
 if(formData.password.length<8 ){
  return "Password length cannot be less than 8 "
 }
 return null;
 }
 const isFormValid = formData.email.trim() && formData.password
const handleLogin=(e)=>{
  e.preventDefault()
  const error = validate();
  if(error){
    toast.error(error)
    return
  }
  loginMutation.mutate({email:formData.email.trim(),password:formData.password})
 
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
        className='relative max-w-md bg-white/10 h-full p-4 backdrop-blur-2xl border-2 border-white rounded-3xl shadow-2xl'>
  
     <div className="text-center m-2 sm:m-4 md:m-10 ">
          <h1 className="text-4xl font-extrabold tracking-wide">🍲 RecipeRiot</h1>
          <p className="text-sm text-white/70 mt-2">
           Cook bold. Share loud. Taste chaos.
         </p>
      </div>
      <form className='flex flex-col m-2 sm:m-4 md:m-10'>
        <div className='relative focus-within:ring-blue-600 border border-white outline-none rounded-lg focus-within:ring-2 focus-within:border-transparent mt-4 mb-4 transition'>
        <FaEnvelope className="absolute top-[17px] left-3 text-black/40"/>
          <input type="text" name="email" id="login-email" autoComplete='email' className='py-3 text-white  h-full bg-white/10 w-full  shadow rounded-lg pl-9' onChange={handleChange} placeholder='Enter Your Email' />
        </div>
        <div className='relative border border-white  focus-within:ring-blue-600 outline-none rounded-lg my-2 focus-within:ring-2 focus-within:border-transparent   transition'>
     <FaLock className='absolute top-[16px] left-3 text-black/40 '></FaLock>
       <input type="password" name="password" id="login-password" autoComplete='current-password'  className=' text-white py-3 bg-white/10  h-full w-full   shadow rounded-lg pl-9' onChange={handleChange} placeholder='Enter Your Password'/> 
        </div>
        <div className='flex justify-end my-1 cursor-pointer '>
            <Link className='text-xs font-medium  text-white/70 hover:scale-105 hover:text-blue-300 transition rounded-lg' to="/forgetPassword">Foget Password ?</Link>
        </div>
        <div className='relative flex justify-center'>
            <button type="submit" onClick={handleLogin} disabled={!isFormValid || loginMutation.isPending} className='text-white  text-sm h-full w-full hover:scale-105 my-3 sm:my-6 transition bg-gradient-to-r from-orange-500 to-pink-500  py-2.5 rounded-lg disabled:text-gray-500 disabled:opacity-60  disabled:cursor-not-allowed flex justify-center'>
              {loginMutation.isPending?<FaSpinner className='animate-spin text-white'/>:"Login To RecipeRiot"}
              </button>
        </div>
      </form>
       <p className="text-center text-white/60 ">
        New here? <Link className="text-white font-semibold hover:scale-105 cursor-pointer " to="/signUp"> Create an account</Link>
      </p>
    </motion.div>
  </section>
  )
}
