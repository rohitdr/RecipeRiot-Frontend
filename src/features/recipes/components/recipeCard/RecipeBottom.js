import { motion } from "framer-motion"
export default function RecipeBottom({recipe,editable,mode,handleEdit,handleView,handleEditHover,setOpenDailogBox}) {
  return (
     <div className="absolute bottom-0 w-full p-4">
        
        {/* Title */}
     <h2 className="text-white font-bold line-clamp-2 leading-tight text-[clamp(0.9rem,1.2vw,1.4rem)] ">
          {recipe?.label}
        </h2>

        {/* Reveal Section */}
      {!editable && <div className="
  mt-2 flex justify-between items-center
  opacity-100 md:opacity-0 md:translate-y-20 md:group-hover:translate-y-0 md:group-hover:opacity-100
  transition-all duration-300
">
          {/* User */}
            <div className="flex items-center gap-2 min-w-0">
              <img
                src={recipe?.user?.profileImage?.url ||  "https://res.cloudinary.com/do2twyxai/image/upload/v1776313793/e4jvjyvfwvvo0kyalzie.jpg" }
                className="w-6 h-6 rounded-full border border-orange-400 shrink-0"
                alt="Recipe User"
                  loading='lazy'
              />
              <span className="text-[11px] text-gray-300 truncate max-w-[80px] sm:max-w-[120px]">
                {recipe?.user?.username || "Rohit"}
              </span>
            </div>
         

          {/* Button */}
         {mode !=="view" && <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleView}
            className="shrink-0
      text-[10px] sm:text-xs md:text-sm
      px-2 sm:px-3 md:px-4
      py-1 sm:py-1.5
      rounded-full
      bg-gradient-to-r
      from-orange-500
      to-pink-500
      shadow-lg
      shadow-orange-500/30
      whitespace-nowrap"
          >
            View →
          </motion.button>}
        </div>}
      {editable &&  <div className="
  mt-2 flex justify-between items-center
  opacity-100 md:opacity-0 md:translate-y-20 md:group-hover:translate-y-0 md:group-hover:opacity-100
  transition-all duration-300
">

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleEdit}
            onMouseEnter={handleEditHover}
           className="shrink-0
        text-[10px] sm:text-xs 
      px-5 sm:px-3 
      py-2 sm:py-1
      rounded-full
      bg-gradient-to-r
      from-orange-500
      to-pink-500
      shadow-lg
      shadow-orange-500/30
      whitespace-nowrap"
          
          >
          Edit
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={()=>{setOpenDailogBox(true)}}
            className="shrink-0
      text-[10px] sm:text-xs 
      px-5 sm:px-3 
      py-2 sm:py-1
      rounded-full
      bg-gradient-to-r
      from-orange-500
      to-pink-500
      shadow-lg
      shadow-orange-500/30
      whitespace-nowrap"
          >
           Delete
          </motion.button>
        </div>}
        
      </div>
  )
}
