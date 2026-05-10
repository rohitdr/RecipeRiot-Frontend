import React from 'react'
import RecipeItem from '../Components/RecipeItem'

export default function RecipePreview({recipe}) {
  return (
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl overflow-hidden h-fit">
    <div className="relative z-10 flex items-center justify-between mb-6">
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-white">
        Live Preview
      </h1>
      <p className="text-gray-400 text-sm mt-1">
        See how your recipe will appear to users
      </p>
    </div>

    <span className="px-4 py-2 text-xs font-medium bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/20">
      Real-time
    </span>
  </div>

  {/* Recipe Card Preview */}
  <div className="relative z-10 bg-black/20 p-6 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all duration-300">
    <div className="max-w-sm mx-auto transform hover:scale-[1.02] transition duration-300">
      <RecipeItem recipe={recipe} mode="view"/>
    </div>
  </div>
  </div>
  )
}
