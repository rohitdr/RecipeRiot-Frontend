import { motion } from 'framer-motion'
import React from 'react'

export default function HealthLabel({healthLabels}) {
  return (
      <section className="max-w-7xl mx-auto px-6 ">

  <div className="mb-8">
    <h1 className="text-3xl font-black text-white">
      Heath tags
    </h1>

    <p className="text-white/50 mt-2">
      Everything packed inside this recipe
    </p>
  </div>

<div className="flex flex-wrap gap-3">
 {healthLabels.map((item,i)=>(
   <motion.span 
     key={i}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay: i * 0.05
      }}
   className="px-4 py-2 bg-orange-500/10 text-orange-300 rounded-full border border-orange-400/20">
      {item}
   </motion.span>
 ))}
</div>
  <div>
    
  </div>
</section>
  )
}
