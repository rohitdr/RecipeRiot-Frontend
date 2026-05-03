import { motion } from 'framer-motion'
import React from 'react'

export default function Settings() {
  return (
   <motion.div
   initial={{opacity:0,y:30}}
   animate={{opacity:1,y:0}}
   exit={{opacity:0,y:30}}
  
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
      <label className="text-sm text-white/70 mb-2">
        Current Password
      </label>
      <input
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
      <label className="text-sm text-white/70 mb-2">
        New Password
      </label>
      <input
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
      <label className="text-sm text-white/70 mb-2">
        Confirm Password
      </label>
      <input
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
    className="
      mt-6
      px-6 py-3
      bg-orange-500
      text-black
      font-bold
      rounded-full
      hover:scale-105
      transition
    "
  >
    Update Password
  </button>
</div>

  


      <div className="bg-white/5 border border-white/10 rounded-3xl p-5">
        <h2 className="text-xl font-semibold">
          Logout
        </h2>
        <p className="text-white/50 text-sm mt-1">
          Sign out from your RecipeRiot account.
        </p>

        <button className="mt-4 px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition">
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

        <button className="mt-4 px-6 py-3 bg-red-500 text-white font-bold rounded-full hover:scale-105 transition">
          Delete Account
        </button>
      </div>

    </div>
  </motion.div>
  )
}
