import React from 'react'
import { FaLock,FaEnvelope,FaPhoneAlt,FaUser  } from "react-icons/fa";
import { motion } from 'framer-motion';
import { MdAlternateEmail } from "react-icons/md";
export default function SignUp() {
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
      <form className='flex flex-col m-2 sm:m-4 md:m-7 mb-0'>
    <div className=' flex flex-col sm:flex-row  sm:gap-4 sm:my-2'>
 <div className='relative focus-within:ring-blue-600 border border-white outline-none rounded-lg focus-within:ring-2 focus-within:border-transparent mt-4 transition'>
        <FaUser  className="absolute top-[17px] left-3 text-white/40"/>
          <input type="text" name="name" id="signup-name" autoComplete='name' className='py-3 text-white  h-full bg-white/10 w-full  shadow rounded-lg pl-9' placeholder='Enter  Name' />
        </div>
         
        <div className='relative focus-within:ring-blue-600 border border-white outline-none rounded-lg focus-within:ring-2 focus-within:border-transparent mt-4 transition'>
        <FaEnvelope className="absolute top-[17px] left-3 text-white/40"/>
          <input type="text" name="email" id="signup-email" autoComplete='email' className='py-3 text-white  h-full bg-white/10 w-full  shadow rounded-lg pl-9' placeholder='Enter  Email' />
        </div>
    </div>

    <div className="flex flex-col sm:flex-row sm:gap-4 mb-2 sm:mb-4">
   <div className='relative focus-within:ring-blue-600 border border-white outline-none rounded-lg focus-within:ring-2 focus-within:border-transparent mt-4 transition'>
        <MdAlternateEmail className="absolute top-[17px] left-3 text-white/40"/>
          <input type="text" name="username" id="signup-username"  className='py-3 text-white  h-full bg-white/10 w-full  shadow rounded-lg pl-9' placeholder='Enter  Username' />
        </div>
        <div className='relative focus-within:ring-blue-600 border border-white outline-none rounded-lg focus-within:ring-2 focus-within:border-transparent mt-4 transition'>
        <FaPhoneAlt className="absolute top-[17px] left-3 text-white/40"/>
          <input type="tel" name="phoneNumber" id="signup-phone"  className='py-3 text-white  h-full bg-white/10 w-full  shadow rounded-lg pl-9' placeholder='Enter Number' />
        </div>
    </div>
     
        <div className='relative border border-white  focus-within:ring-blue-600 outline-none rounded-lg my-2 focus-within:ring-2 focus-within:border-transparent   transition'>
     <FaLock className='absolute top-[16px] left-3 text-white/40 '></FaLock>
       <input type="password" name="password" id="signup-password" autoComplete='current-password'  className=' text-white py-3 bg-white/10  h-full w-full   shadow rounded-lg pl-9' placeholder='Enter  Password'/> 
        </div>
     
        <div className='relative flex justify-center'>
            <button type="submit"  className='text-white  text-sm h-full w-full hover:scale-105 my-3 sm:my-6 transition bg-gradient-to-r from-orange-500 to-pink-500  py-2.5 rounded-lg disabled:text-gray-500 disabled:opacity-30 disabled:cursor-not-allowed'> Create  account</button>
        </div>
      </form>
       <p className="text-center text-white/60 ">
        Existing User? <span className="text-white font-semibold hover:scale-105 cursor-pointer ">Login To RecipeRiot</span>
      </p>
    </motion.div>

  </section>
  )
}
