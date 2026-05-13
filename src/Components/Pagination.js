import React from 'react'

export default function Pagination({page,setPage,totalPages}) {
  return (
   <div className="flex justify-center py-10 px-3">

  <div className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-xl px-3 sm:px-4 py-2 rounded-xl shadow-lg">

    {/* Prev */}
    <button disabled={page===1} onClick={()=>{setPage(prev=>prev-1)}} className="px-3 py-2 text-xs sm:text-sm text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition disabled:cursor-not-allowed">
      Prev
    </button>

    {/* Page numbers (responsive visibility) */}
    <div className="flex items-center gap-1 sm:gap-2">
      {Array.from({length:totalPages||0}).slice(Math.max(page-3,0),Math.min(page+2,totalPages)).map((_,i)=>{
        const pageNumber = Math.max(page-3,0)+i+1
        return <button key={i} onClick={()=>{setPage(pageNumber)}} className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-xs sm:text-sm  transition   ${
          pageNumber === page
            ? "bg-white text-black font-semibold"
            : "text-white/60 hover:bg-white/10 hover:text-white"
        }`}>
      {pageNumber}
      </button>
      })}
    
    </div>
    <button disabled={page===totalPages} onClick={()=>{setPage(prev=>prev+1)}} className="px-3 py-2 text-xs sm:text-sm text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition disabled:cursor-not-allowed">
      Next
    </button>

  </div>
</div>
  )
}
