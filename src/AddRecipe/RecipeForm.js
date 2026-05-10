import React, { useEffect } from 'react'
import { FaImage } from 'react-icons/fa'
import { toast } from 'sonner'
export default function RecipeForm({formData,setFormData,image,setImage}) {
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
}

  return (
<>
 <label htmlFor="RecipeImage" className=" border border-dashed border-gray-600 rounded-2xl flex flex-col py-8 gap-4 justify-center items-center hover:border-orange-400 transition cursor-pointer ">
                <FaImage className=" text-orange-500" size={24}></FaImage>
               <input type="file" name="image" onChange={handleImageChange} hidden id="RecipeImage"/>
                <p>Upload Recipe Image</p>
            </label>
                     <input
             type="text"
             name='label'
             placeholder="Recipe Title"
             value={formData.label}
             onChange={handleChange}
             className="w-full mt-6 p-4 rounded-xl bg-black/30 border border-gray-700"
          />
           <div className="grid grid-cols-2 gap-4 mt-8">
             <input placeholder="Cooking Time" name='totalTime' value={formData.totalTime} className="p-3 rounded-xl bg-black/30 border border-gray-700" onChange={handleChange} />
             <input placeholder="Source" name='source' value={formData.source} className="p-3 rounded-xl bg-black/30 border border-gray-700" onChange={handleChange} />
             <input placeholder="Calories" name='calories' value={formData.calories} className="p-3 rounded-xl bg-black/30 border border-gray-700" onChange={handleChange} />
             <input placeholder="Total Weight" name='totalWeight' value={formData.totalWeight} className="p-3 rounded-xl bg-black/30 border border-gray-700" onChange={handleChange}/>
           </div>

</>
  )
}
