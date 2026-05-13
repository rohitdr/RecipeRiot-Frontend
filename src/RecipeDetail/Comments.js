import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import useCommnets from '../Hooks/useComments'
import { useParams } from 'react-router-dom'
import Pagination from '../Components/Pagination'

export default function Comments() {
  const [page,setPage]=useState(1)
  const {recipeId}=useParams()
    const {data,isLoading}=useCommnets(recipeId,page)
  return (
  <div className="py-7">
    {!isLoading && data && data.comments.map((item)=>{
   return   <motion.div
   key={item?._id}
    initial={{opacity:0,y:40}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.1}}
    className=" mb-5
        p-6
        rounded-3xl
        bg-white/[0.03]
        border border-white/10
        backdrop-blur-xl
        hover:border-orange-400/20
        transition">
        <div className="flex items-center justify-between">
            <div className="flex  gap-3">
                <div>{console.log(data)}
  <img
            src={item?.user?.profileImage?.url}
            alt="User"
              loading='lazy'
            className="w-12 h-12 rounded-full object-cover"
          />
            </div>
            <div>
                <h2>{item?.user?.name}</h2>
                <p className="text-xs text-white/70">Verfied Cook</p>
            </div></div>
             <div className="flex gap-1 text-orange-400">
          {[...Array(item?.rating)].map((_, index) => (
            <FaStar key={index}  />
          ))}
        </div>
   
        </div>
        <div className="py-4 text-white/80">
            <p>{item?.comment}</p>
        </div>
    </motion.div>
    })}
   { data && data.comments.length >0&& <Pagination page={page} setPage={setPage} totalPages={data?.totalPages}></Pagination>}
  
   
</div>
  )
}
