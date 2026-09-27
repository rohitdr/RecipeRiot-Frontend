import React from 'react'
import { motion } from 'framer-motion';
export default function RecipeImageOverlay({recipe}) {
  return (
    <>
         {/* Image */}
      <motion.img
        src={recipe?.image?.url}
        onError={(e) => {
    e.target.onerror = null;
    e.target.src = "/fallbackRecipe.jpg";
  }}
        alt={recipe?.label}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
     variants={{ rest: { scale: 1 }, hover: { scale: 1.15 } }} transition={{ duration: 0.5 }}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
        variants={{
          rest: { opacity: 0.6 },
          hover: { opacity: 0.9 }
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Glow sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        variants={{ hover: { x: "100%" } }}
        transition={{ duration: 0.8 }}
      />
    </>
  )
}
