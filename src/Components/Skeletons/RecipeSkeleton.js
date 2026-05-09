import React from "react";

export default function RecipeSkeleton() {
  return (
    <div className="aspect-[4/5] mx-auto rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl relative">
      
      {/* shimmer overlay */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10"></div>

      {/* image skeleton */}
      <div className=" absolute inset-0 bg-white/10"></div>

      <div className="p-4 space-y-4 absolute bottom-0 w-full">
        {/* title */}
        <div className="h-5 w-3/4 rounded bg-white/10"></div>

        {/* subtitle */}
        <div className="h-4 w-1/2 rounded bg-white/10"></div>

        {/* tags */}
        <div className="flex gap-2 ">
          <div className="h-8 w-16 rounded-full bg-white/10"></div>
          <div className="h-8 w-20 rounded-full bg-white/10"></div>
        </div>

        <div className="h-10  rounded-lg bg-white/10 w-full"></div>
      </div>
    </div>
  );
}