import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
export default function HealthLabel({healthLabels}) {
  const [label,setLabels]=useState(10)
  return (
      <section className="max-w-7xl mx-auto px-6 py-5 ">

  <div className="mb-8">
    <h1 className="text-3xl font-black text-white">
      Heath tags
    </h1>

    <p className="text-white/50 mt-2">
      Everything packed inside this recipe
    </p>
  </div>

<div className="flex flex-wrap gap-3">
  <AnimatePresence>
    {healthLabels.slice(0, label).map((item, i) => (
      <motion.span
        key={item}
        layout
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: -10 }}
        transition={{
          duration: 0.3,
          delay: i * 0.05
        }}
        className="px-4 py-2 text-xs sm:text-base bg-orange-500/10 
        text-orange-300 rounded-full border border-orange-400/20"
      >
        {item}
      </motion.span>
    ))}
  </AnimatePresence>

  {healthLabels.length > 10 && (
    <motion.button
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.95 }}
      onClick={() =>
        setLabels((prev) =>
          prev !== healthLabels.length
            ? healthLabels.length
            : 10
        )
      }
      className="group flex items-center gap-2 px-5 py-2 rounded-full 
      bg-orange-500 text-white font-medium shadow-md 
      hover:bg-orange-600 transition-all duration-300 cursor-pointer"
    >
      {label !== healthLabels.length ? "View All" : "View Less"}

      <span
        className={`transition-transform duration-300 ${
          label !== healthLabels.length
            ? "group-hover:translate-x-1"
            : "rotate-180"
        }`}
      >
        →
      </span>
    </motion.button>
  )}
</div>
  <div>
    
  </div>
</section>
  )
}
