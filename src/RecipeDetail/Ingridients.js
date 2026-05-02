import { motion } from 'framer-motion'
import React from 'react'

export default function Ingridients({ingredientLines}) {
  return (
   <section className='my-10 max-w-7xl px-6 mx-auto'>
            <div>
                <h1 className='text-orange-500 font-bold text-4xl'>
                    Ingredients
                </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between py-5 gap-4' >
               {ingredientLines.map((ingredients,i)=>
               <motion.div
               initial={{opacity:0,y:40}}
               whileInView={{opacity:1,y:0}}
               viewport={{}}
              transition={{duration:0.5}}
           
               whileHover={{scale:1.02}}
               
                key={i} className='px-4 py-2 sm:py-4 border bg-orange-500/10 border-white/10 rounded-3xl'>{ingredients}</motion.div>
               )}

            </div>
        </section>
  )
}
