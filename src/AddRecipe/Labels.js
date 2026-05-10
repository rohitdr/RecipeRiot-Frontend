import React from 'react'
import { FaTrash,FaPlus } from 'react-icons/fa'
export default function Labels({formData,setFormData}) {
       const handleClickRemoveDietLabel=(index)=>{
           if(formData.dietLabels.length <=1) return
          setFormData(prev=>({...prev,dietLabels:prev.dietLabels.filter((__,i)=>i!==index)}))
     
    }
    const handleClickAddDietLabel=()=>{
 setFormData(prev=>({...prev,dietLabels:[...formData.dietLabels,""]}))
    }
       const handleChangedietLabels = (value, index) => {
  setFormData(prev => {
    const updated = [...prev.dietLabels]
    updated[index] = value

    return {
      ...prev,
      dietLabels: updated
    }
  })
}
    const handleClickRemoveHealthLabel=(index)=>{
           if(formData.healthLabels.length <=1) return
          setFormData(prev=>({...prev,healthLabels:prev.healthLabels.filter((__,i)=>i!==index)}))
     
    }
    const handleClickAddHealthLabel=()=>{
 setFormData(prev=>({...prev,healthLabels:[...formData.healthLabels,""]}))
    }
       const handleChangeHealthLabels = (value, index) => {
  setFormData(prev => {
    const updated = [...prev.healthLabels]
    updated[index] = value

    return {
      ...prev,
      healthLabels: updated
    }
  })
}
  return (
  <>
  
    {/* Diet Labels */}
      <div>
        <h3 className="font-semibold mb-3">Diet Labels</h3>

        {formData?.dietLabels?.map((item, index) => (
          <div key={index} className="flex gap-3 mb-3">
            <input
            value={item}
              placeholder="Enter diet label"
              onChange={(e)=>{handleChangedietLabels(e.target.value,index)}}
              className="w-full p-3 rounded-xl bg-black/30 border border-gray-700"
            />

            <button
              onClick={()=>{handleClickRemoveDietLabel(index)}}
              className="bg-red-500 px-4 rounded-xl"
            >
              <FaTrash />
            </button>
          </div>
        ))}

        <button
          onClick={handleClickAddDietLabel}
          className="text-orange-500 flex items-center gap-2"
        >
          <FaPlus /> Add Diet Label
        </button>
      </div>

      {/* Health Labels */}
      <div>
        <h3 className="font-semibold mb-3">Health Labels</h3>

        {formData?.healthLabels?.map((item, index) => (
          <div key={index} className="flex gap-3 mb-3">
            <input
            value={item}
              placeholder="Enter health label"
              onChange={(e)=>{handleChangeHealthLabels(e.target.value,index)}}
              className="w-full p-3 rounded-xl bg-black/30 border border-gray-700"
            />

            <button
              onClick={()=>{handleClickRemoveHealthLabel(index)}}
              className="bg-red-500 px-4 rounded-xl"
            >
              <FaTrash />
            </button>
          </div>
        ))}

        <button
          onClick={handleClickAddHealthLabel}
          className="text-green-500 flex items-center gap-2"
        >
          <FaPlus/> Add Health Label
        </button>
      </div></>
  )
}
