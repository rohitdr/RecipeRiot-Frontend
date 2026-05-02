import { motion } from 'framer-motion'
import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function Comments() {
  return (
  <div className="py-7">
    <motion.div
    initial={{opacity:0,y:40}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.1}}
    className=" mb-5
        p-6
        rounded-3xl
        bg-white/[0.03]
        border border-white/10
        backdrop-blur-xl
        hover:border-orange-400/20
        transition">
        <div className="flex items-center justify-between">
            <div className="flex  gap-3">
                <div>
  <img
            src={`https://i.pravatar.cc/100?img=${1 + 10}`}
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
            </div>
            <div>
                <h2>Rohit</h2>
                <p className="text-xs text-white/70">Verfied Cook</p>
            </div></div>
             <div className="flex gap-1 text-orange-400">
          {[1,2,3,4,5].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
   

        </div>
        <div className="py-4 text-white/80">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod neque ratione vel consequatur odio dolorum?</p>
        </div>
    </motion.div>
    <motion.div
    initial={{opacity:0,y:40}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.1}}
    className=" mb-5
        p-6
        rounded-3xl
        bg-white/[0.03]
        border border-white/10
        backdrop-blur-xl
        hover:border-orange-400/20
        transition">
        <div className="flex items-center justify-between">
            <div className="flex  gap-3">
                <div>
  <img
            src={`https://i.pravatar.cc/100?img=${1 + 10}`}
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
            </div>
            <div>
                <h2>Rohit</h2>
                <p className="text-xs text-white/70">Verfied Cook</p>
            </div></div>
             <div className="flex gap-1 text-orange-400">
          {[1,2,3,4,5].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
   

        </div>
        <div className="py-4 text-white/80">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod neque ratione vel consequatur odio dolorum?</p>
        </div>
    </motion.div>
    <motion.div
    initial={{opacity:0,y:40}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.1}}
    className=" mb-5
        p-6
        rounded-3xl
        bg-white/[0.03]
        border border-white/10
        backdrop-blur-xl
        hover:border-orange-400/20
        transition">
        <div className="flex items-center justify-between">
            <div className="flex  gap-3">
                <div>
  <img
            src={`https://i.pravatar.cc/100?img=${1 + 10}`}
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
            </div>
            <div>
                <h2>Rohit</h2>
                <p className="text-xs text-white/70">Verfied Cook</p>
            </div></div>
             <div className="flex gap-1 text-orange-400">
          {[1,2,3,4,5].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
   

        </div>
        <div className="py-4 text-white/80">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod neque ratione vel consequatur odio dolorum?</p>
        </div>
    </motion.div>
    <motion.div
    initial={{opacity:0,y:40}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.1}}
    className=" mb-5
        p-6
        rounded-3xl
        bg-white/[0.03]
        border border-white/10
        backdrop-blur-xl
        hover:border-orange-400/20
        transition">
        <div className="flex items-center justify-between">
            <div className="flex  gap-3">
                <div>
  <img
            src={`https://i.pravatar.cc/100?img=${1 + 10}`}
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
            </div>
            <div>
                <h2>Rohit</h2>
                <p className="text-xs text-white/70">Verfied Cook</p>
            </div></div>
             <div className="flex gap-1 text-orange-400">
          {[1,2,3,4,5].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
   

        </div>
        <div className="py-4 text-white/80">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod neque ratione vel consequatur odio dolorum?</p>
        </div>
    </motion.div>
</div>
  )
}
