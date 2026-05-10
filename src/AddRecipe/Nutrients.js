import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaTrash,FaPlus } from 'react-icons/fa'
import Select from "react-select";
import SelectOption from './SelectOption';
import Labels from './Labels';
export default function Nutrients({formData,setFormData}) {
     const [showNutrition,setShowNutrition]=useState(false)
     const [showTotalNutrients,setTotalNutrients]=useState(false)
const handleNutrientsQuantityChange=(value,key)=>{
setFormData(prev=>({
 ...prev,totalNutrients:{...prev.totalNutrients,[key]:{...prev.totalNutrients[key],quantity:Number(value)}}
}))
}
  return (
  <div className="mt-8">
  <button
    onClick={() => setShowNutrition(!showNutrition)}
    className="w-full flex justify-between items-center bg-white/5 border border-white/10 p-4 rounded-xl"
  >
    <span className="font-semibold">Nutrition & Dietary Info</span>
    <span>{showNutrition ? "−" : "+"}</span>
  </button>

  {showNutrition && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      className="mt-5 space-y-8"
    >
    <Labels formData={formData} setFormData={setFormData}/>
  
<SelectOption formData={formData} setFormData={setFormData}></SelectOption>
  

      {/* Nutrients */}
     
        <button   className="w-full flex justify-between items-center bg-white/5 border border-white/10 p-4 rounded-xl"
         onClick={()=>{setTotalNutrients(prev=>!prev)}}>
        <h3 className="font-semibold "> Nutrients</h3>
 <span>{showTotalNutrients ? "−" : "+"}</span>
        </button>
 {showTotalNutrients && <motion.div initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}>
        {Object.entries(formData.totalNutrients || {}).map(([nutrientKey, nutrientValue], index) => (
          <div key={nutrientKey} className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
            <input
              placeholder="Nutrient Name"
              disabled
              value={nutrientValue.label}
              className="p-3 rounded-xl bg-black/30 border border-gray-700"
            />
            <div className="flex gap-3">
              <input
              value={nutrientValue.quantity}
                placeholder="Quantity"
                className="w-full p-3 rounded-xl bg-black/30 border border-gray-700"
                onChange={(e)=>handleNutrientsQuantityChange(e.target.value,nutrientKey)}
              />
              <input
                placeholder="Units"
                value={nutrientValue.unit}
                className="w-full p-3 rounded-xl bg-black/30 border border-gray-700"
             disabled
              />

            </div>
          </div>
        ))}

      </motion.div>}
    </motion.div>
  )}
</div>
  )
}
