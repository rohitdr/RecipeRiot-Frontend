import React from 'react'
import { motion } from 'framer-motion'
export default function Nutrients({totalNutrients}) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-5 md:py-16">

  <div className="mb-8">
    <h1 className="text-5xl font-black text-white">
      Nutrients
    </h1>

    <p className="text-white/50 mt-2">
      Everything packed inside this recipe
    </p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
    {Object.values(totalNutrients)
      .slice(0, 8)
      .map((n, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -4 }}
          className="
            px-5 py-4
            rounded-2xl
            bg-white/[0.03]
            border border-white/10
            backdrop-blur-xl
            hover:border-orange-400/30
            transition
          "
        >
          <p className="text-white/50 text-sm">
            {n.label}
          </p>

          <div className="flex items-end gap-1 mt-3">
            <span className=" text-xl sm:text-3xl font-bold text-white">
              {Math.round(n.quantity)}
            </span>

            <span className="text-sm text-orange-300 mb-1">
              {n.unit}
            </span>
          </div>
        </motion.div>
      ))}
      
  </div>
  <div>
    
  </div>
</section>
  )
}
