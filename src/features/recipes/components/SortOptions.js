
export default function SortOptions({
    options,
    selectedSort,
    onSortChange
}) {
  return (
   <div className="flex  gap-3 text-xs lg:text-base overflow-x-auto w-full py-2 ">
    {options.map((item,index)=>{
    return   <button onClick={()=>{onSortChange(item)}} key={index} className={`px-4 py-2 text-nowrap rounded-full  transition ${selectedSort===item?"bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md shadow-orange-500/20":"bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"}`}>
       {item}
     </button>
    })}
   
   </div>
  )
}
