import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaTrash,FaPlus } from 'react-icons/fa'
export default function Ingredients({setFormData,formData}) {
   const addIngredients=()=>{
    setFormData(prev=>({...prev,ingredientLines:[...formData.ingredientLines,""]}))
      }
      const removeIngredients=(index)=>{
          if(formData.ingredientLines.length <=1) return
          setFormData(prev=>({...prev,ingredientLines:prev.ingredientLines.filter((__,i)=>i!==index)}))
      }
     const handleChange = (value, index) => {
  setFormData(prev => {
    const updated = [...prev.ingredientLines]
    updated[index] = value

    return {
      ...prev,
      ingredientLines: updated
    }
  })
}
  return (
      <div className="mt-6">
            <h3 className="font-bold text-lg">Ingredients</h3>
            {formData?.ingredientLines?.map((text,index)=>{
                return  <motion.div
                  initial={{opacity:0,y:20}}
                animate={{opacity:1,y:0}}
                key={index} className="flex gap-3 items-center mt-4">
               <input
             type="text"
             value={text}
             onChange={(e)=>{handleChange(e.target.value,index)}}
             placeholder="Ingredients"
             className="w-full  p-2.5 rounded-xl bg-black/30 border border-gray-700"
          />
         <button
                 className="bg-red-500 p-3 rounded-xl h-fit"
                 >
                   <FaTrash onClick={()=>{removeIngredients(index)}}/>
                 </button>
            </motion.div>
            })}
           
           <button className="flex items-center py-3 gap-2 text-orange-500" onClick={addIngredients}>
            <FaPlus></FaPlus> Add More Ingredients
           </button>
          </div>
  )
}
