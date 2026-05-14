import React, { useEffect, useState } from 'react'
import { FaImage, FaSpinner } from 'react-icons/fa'
import { toast } from 'sonner'
export default function RecipeForm({formData,setFormData,image,setImage,autoImageMutation}) {
  const [generationCount,setgenerationCount]=useState(0)
    const handleChange=({target:{name,value}})=>{
        setFormData(prev=>({...prev,[name]:value}))
    }
const handleImageChange=(e)=>{
 const file=e.target.files[0]
 if(!file) return
 if(file.size>10000000){
    toast.error("Image size should be less than 10mb")
    return
 }
 setImage(file)
 setFormData(prev=>({...prev,image:{url:null}}))
}
const handleImageGenerateClick=()=>{
  if(!formData.label || formData.label.length<2){
    toast.error("give a valid label ")
    return
  }
  // if(generationCount>=2){
  //   toast.error("You can generate only two images daily")
  //   return
  // }
  autoImageMutation.mutate(formData.label)
  setgenerationCount(prev=>prev+1)
}

  return (
<>
<label
  htmlFor="RecipeImage"
  className="border border-dashed border-gray-600 rounded-2xl flex flex-col py-8 gap-4 justify-center items-center hover:border-orange-400 transition cursor-pointer relative"
>
  <FaImage className="text-orange-500" size={24} />

  <input
    type="file"
    name="image"
    onChange={handleImageChange}
    hidden
    id="RecipeImage"
  />

  <p className="text-white/80 font-medium">
    Upload Recipe Image
  </p>

<button
  type="button"
  onClick={handleImageGenerateClick}
 
  className="
    absolute top-2 right-2
    px-3 py-1.5
    text-xs font-semibold
    rounded-full
    bg-orange-500/10
    text-orange-400
    border border-orange-500/30
    backdrop-blur-md
    hover:bg-orange-500/20
    hover:border-orange-400
    hover:scale-105
    active:scale-95
    transition-all duration-200
  "
>
 {autoImageMutation.isPending ? <FaSpinner className='text-white animate-spin'> </FaSpinner>:"Auto Generate"}
</button>
</label>
                     <input
             type="text"
             name='label'
             placeholder="Recipe Title"
             value={formData.label}
             onChange={handleChange}
             className="w-full mt-4 sm:mt-6 p-4 rounded-xl bg-black/30 border border-gray-700"
          />
           <div className="grid grid-cols-2 gap-4 mt-4 sm:mt-8">
             <input placeholder="Cooking Time" name='totalTime' value={formData.totalTime} className="p-3 rounded-xl bg-black/30 border border-gray-700" onChange={handleChange} />
             <input placeholder="Source" name='source' value={formData.source} className="p-3 rounded-xl bg-black/30 border border-gray-700" onChange={handleChange} />
             <input placeholder="Calories" name='calories' value={formData.calories} className="p-3 rounded-xl bg-black/30 border border-gray-700" onChange={handleChange} />
             <input placeholder="Total Weight" name='totalWeight' value={formData.totalWeight} className="p-3 rounded-xl bg-black/30 border border-gray-700" onChange={handleChange}/>
           </div>

</>
  )
}
