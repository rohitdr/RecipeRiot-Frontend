
 import React, { useState } from "react";
 import { motion } from "framer-motion";
 import { FaPlus, FaTrash, FaImage, FaRocket } from "react-icons/fa";
import { FaP } from "react-icons/fa6";
import RecipeItem from "./Components/RecipeItem";

export default function AddRecipe() {
    const recipe =  {
          image: {
            url: "https://res.cloudinary.com/do2twyxai/image/upload/v1771996404/recipes/pakdre8w9g3z99rj9uue.jpg",
            public_id: "recipes/pakdre8w9g3z99rj9uue"
          },
          totalNutrients: {
            ENERC_KCAL: {
              label: "Energy",
              quantity: 657.58988470019,
              unit: "kcal"
            },
            FAT: {
              label: "Fat",
              quantity: 55.744251339003405,
              unit: "g"
            },
            CHOCDF: {
              label: "Carbs",
              quantity: 41.23728443904098,
              unit: "g"
            },
            SUGAR: {
              label: "Sugars",
              quantity: 16.834117512024083,
              unit: "g"
            },
            PROCNT: {
              label: "Protein",
              quantity: 9.912081621006207,
              unit: "g"
            },
            CHOLE: {
              label: "Cholesterol",
              quantity: 0,
              unit: "mg"
            },
            CA: {
              label: "Calcium",
              quantity: 217.90356605566663,
              unit: "mg"
            },
            FE: {
              label: "Iron",
              quantity: 6.924409965018596,
              unit: "mg"
            },
            VITA_RAE: {
              label: "Vitamin A",
              quantity: 175.99007950077652,
              unit: "µg"
            },
            VITC: {
              label: "Vitamin C",
              quantity: 88.94303164001842,
              unit: "mg"
            },
            THIA: {
              label: "Thiamin (B1)",
              quantity: 0.4242703059000476,
              unit: "mg"
            },
            RIBF: {
              label: "Riboflavin (B2)",
              quantity: 0.5123858773007066,
              unit: "mg"
            },
            NIA: {
              label: "Niacin (B3)",
              quantity: 3.636262308305084,
              unit: "mg"
            },
            VITB6A: {
              label: "Vitamin B6",
              quantity: 0.7970908667004751,
              unit: "mg"
            },
            FOLAC: {
              label: "Folic acid",
              quantity: 0,
              unit: "µg"
            },
            VITB12: {
              label: "Vitamin B12",
              quantity: 0,
              unit: "µg"
            },
            VITD: {
              label: "Vitamin D",
              quantity: 0,
              unit: "µg"
            },
            TOCPHA: {
              label: "Vitamin E",
              quantity: 9.807964967001842,
              unit: "mg"
            },
            WATER: {
              label: "Water",
              quantity: 465.94519443113455,
              unit: "g"
            },
            FASAT: {
              label: "Saturated",
              quantity: 7.754046497500478,
              unit: "g"
            }
          },
          _id: "640589ad41d329959e0bdb02",
          user: "63e0c5fc45655465af205a73",
          instruction: [],
          Likes: 0,
          label: "Grilled Green Beans With Garlic And Lemon Zest",
          source: "Ruhlman",
          dietLabels: [
            "Low-Carb"
          ],
          healthLabels: [
            "Keto-Friendly",
            "Vegan",
            "Vegetarian",
            "Pescatarian",
            "Paleo",
            "Mediterranean",
            "DASH",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free",
            "Kosher",
            "Immuno-Supportive"
          ],
          cautions: [
            "Sulfites"
          ],
          ingredientLines: [
            "1/4 cup olive oil",
            "2 to 3 cloves of garlic, crushed or minced to a paste",
            "1 to 2 teaspoons red pepper flakes (optional)",
            "1 teaspoon cumin seeds, whole or crushed in a mortar and pestle (optional)",
            "1 pound green beans, stem ends picked (if you don’t have a grill pan, substitute asparagus)",
            "1 lemon for zesting",
            "Salt to taste"
          ],
          ingredients: [
            {
              text: "1/4 cup olive oil",
              weight: 54,
              image: "RecipeImages/Grilled Green Beans With Garlic And Lemon Zest1.jpg",
              _id: "640589ad41d329959e0bdb03"
            },
            {
              text: "2 to 3 cloves of garlic, crushed or minced to a paste",
              weight: 7.5,
              image: "RecipeImages/Grilled Green Beans With Garlic And Lemon Zest2.jpg",
              _id: "640589ad41d329959e0bdb04"
            },
            {
              text: "1 to 2 teaspoons red pepper flakes (optional)",
              weight: 1.1562500000586464,
              image: "RecipeImages/Grilled Green Beans With Garlic And Lemon Zest3.jpg",
              _id: "640589ad41d329959e0bdb05"
            },
            {
              text: "1 teaspoon cumin seeds, whole or crushed in a mortar and pestle (optional)",
              weight: 2.1,
              image: "RecipeImages/Grilled Green Beans With Garlic And Lemon Zest4.jpg",
              _id: "640589ad41d329959e0bdb06"
            },
            {
              text: "1 pound green beans, stem ends picked (if you don’t have a grill pan, substitute asparagus)",
              weight: 453.59237,
              image: "RecipeImages/Grilled Green Beans With Garlic And Lemon Zest5.jpg",
              _id: "640589ad41d329959e0bdb07"
            },
            {
              text: "1 lemon for zesting",
              weight: 58,
              image: "RecipeImages/Grilled Green Beans With Garlic And Lemon Zest5.jpg",
              _id: "640589ad41d329959e0bdb08"
            },
            {
              text: "Salt to taste",
              weight: 3.458091720000352,
              image: "RecipeImages/salt.jpg",
              _id: "640589ad41d329959e0bdb09"
            }
          ],
          calories: 657.58988470019,
          totalWeight: 579.7156060652263,
          totalTime: 0,
          cuisineType: [
            "indian"
          ],
          mealType: [
            "lunch/dinner"
          ],
          dishType: [
            "main course"
          ],
          date: "2023-03-06T06:35:25.600Z",
          Comments: [],
          __v: 0
        }
    const [showNutrition,setShowNutrition]=useState(false)
    const [ingredients,setIngredients]=useState([""])
    const [dietLabels,setDietLabels] = useState([""])
const [healthLabels,setHealthLabels] = useState([""])
const [nutrients,setNutrients] = useState([
  { name: "", quantity: "" }
])
    const addIngredients=()=>{
        setIngredients(prev=>[...prev,""])
    }
    const removeIngredients=(index)=>{
        if(ingredients.length <4) return
     setIngredients(prev=>{ return prev.filter((__,i)=>i!==index)})
    }
  return (
   <section className="min-h-screen bg-[#06070d] text-white px-6 md:px-16 py-20">
      <motion.div
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      className="text-center my-8">
<h1 className="text-5xl font-bold">Share Your Recipe</h1>
<p className="text-gray-400 mt-3">
          Turn your cooking magic into something the world can try.
         </p>
         <span className="inline-block mt-4 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400">
           Chef Mode On 👨‍🍳
         </span>
      </motion.div>
      <div className="grid lg:grid-cols-2 gap-3">
          <div   className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10">
            <label htmlFor="RecipeImage" className=" border border-dashed border-gray-600 rounded-2xl flex flex-col py-8 gap-4 justify-center items-center hover:border-orange-400 transition cursor-pointer ">
                <FaImage className=" text-orange-500" size={24}></FaImage>
               <input type="file" name="image" hidden id="RecipeImage" />
                <p>Upload Recipe Image</p>
            </label>
                     <input
             type="text"
             placeholder="Recipe Title"
             className="w-full mt-6 p-4 rounded-xl bg-black/30 border border-gray-700"
          />

        
          <div className="mt-6">
            <h3 className="font-bold text-lg">Ingredients</h3>
            {ingredients.map((text,index)=>{
                return  <motion.div
                  initial={{opacity:0,y:20}}
                animate={{opacity:1,y:0}}
                key={index} className="flex gap-3 items-center mt-4">
               <input
             type="text"
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
           <div className="grid grid-cols-2 gap-4 mt-8">
             <input placeholder="Cooking Time" className="p-3 rounded-xl bg-black/30 border border-gray-700" />
             <input placeholder="Servings" className="p-3 rounded-xl bg-black/30 border border-gray-700" />
             <input placeholder="Calories" className="p-3 rounded-xl bg-black/30 border border-gray-700" />
             <input placeholder="Total Weight" className="p-3 rounded-xl bg-black/30 border border-gray-700" />
           </div>
          {/* Nutrition + Diet Section */}

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
      {/* Diet Labels */}
      <div>
        <h3 className="font-semibold mb-3">Diet Labels</h3>

        {dietLabels.map((item, index) => (
          <div key={index} className="flex gap-3 mb-3">
            <input
              placeholder="Enter diet label"
              className="w-full p-3 rounded-xl bg-black/30 border border-gray-700"
            />

            <button
              onClick={() =>
                setDietLabels(prev =>
                  prev.filter((_, i) => i !== index)
                )
              }
              className="bg-red-500 px-4 rounded-xl"
            >
              <FaTrash />
            </button>
          </div>
        ))}

        <button
          onClick={() => setDietLabels(prev => [...prev, ""])}
          className="text-orange-500 flex items-center gap-2"
        >
          <FaPlus /> Add Diet Label
        </button>
      </div>

      {/* Health Labels */}
      <div>
        <h3 className="font-semibold mb-3">Health Labels</h3>

        {healthLabels.map((item, index) => (
          <div key={index} className="flex gap-3 mb-3">
            <input
              placeholder="Enter health label"
              className="w-full p-3 rounded-xl bg-black/30 border border-gray-700"
            />

            <button
              onClick={() =>
                setHealthLabels(prev =>
                  prev.filter((_, i) => i !== index)
                )
              }
              className="bg-red-500 px-4 rounded-xl"
            >
              <FaTrash />
            </button>
          </div>
        ))}

        <button
          onClick={() => setHealthLabels(prev => [...prev, ""])}
          className="text-green-500 flex items-center gap-2"
        >
          <FaPlus/> Add Health Label
        </button>
      </div>
   {/* cuisine Type  */}
   <div className="grid grid-cols-2 gap-3">
  <select className="p-3 rounded-xl bg-black/30 border border-gray-700">
               <option className="">Indian</option>
               <option>Chinese</option>
               <option>Italian</option>
               <option>Mexican</option>
             </select>  <select className="p-3 rounded-xl bg-black/30 border border-gray-700">
               <option className="">BreakFast</option>
               <option>Lunch</option>
               <option>Dinner</option>
               <option>Snack</option>
               <option>teaTime</option>
             </select>
               <select className="p-3 rounded-xl bg-black/30 border border-gray-700">
               <option className="">Bread</option>
               <option>Dessert</option>
               <option>salad</option>
               <option>Sandwich</option>
               <option>salad</option>
               <option>Drinks</option>
             </select>
               <select className="p-3 rounded-xl bg-black/30 border border-gray-700">
               <option className="">Balanced</option>
               <option>High Protein</option>
               <option>Low Fat</option>
               <option>Low Carbs</option>
             </select>
   </div>
  

      {/* Nutrients */}
      <div>
        <h3 className="font-semibold mb-3">Total Nutrients</h3>

        {nutrients.map((item, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
            <input
              placeholder="Nutrient Name"
              className="p-3 rounded-xl bg-black/30 border border-gray-700"
            />

            <div className="flex gap-3">
              <input
                placeholder="Quantity"
                className="w-full p-3 rounded-xl bg-black/30 border border-gray-700"
              />
              <input
                placeholder="Units"
                className="w-full p-3 rounded-xl bg-black/30 border border-gray-700"
              />

              <button
                onClick={() =>
                  setNutrients(prev =>
                    prev.filter((_, i) => i !== index)
                  )
                }
                className="bg-red-500 px-4 rounded-xl"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={() =>
            setNutrients(prev => [
              ...prev,
              { name: "", quantity: "" }
            ])
          }
          className="text-blue-500 flex items-center gap-2"
        >
          <FaPlus /> Add Nutrient
        </button>
      </div>
    </motion.div>
  )}
</div>
          <div className="flex gap-4 mt-10">
            <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-xs sm:text-base py-2 sm:py-4 rounded-2xl font-semibold flex items-center justify-center gap-2">
              <FaRocket /> Publish Recipe
            </button>
            <button className="flex-1 border border-gray-600 py-4 rounded-2xl">
              Save Draft
            </button>
          </div>
          </div>
       <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl overflow-hidden h-fit">
  
  {/* Header */}
  <div className="relative z-10 flex items-center justify-between mb-6">
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-white">
        Live Preview
      </h1>
      <p className="text-gray-400 text-sm mt-1">
        See how your recipe will appear to users
      </p>
    </div>

    <span className="px-4 py-2 text-xs font-medium bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/20">
      Real-time
    </span>
  </div>

  {/* Recipe Card Preview */}
  <div className="relative z-10 bg-black/20 p-6 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all duration-300">
    <div className="max-w-sm mx-auto transform hover:scale-[1.02] transition duration-300">
      <RecipeItem recipe={recipe} />
    </div>
  </div>
</div>
        
      </div>
    </section>
  )
}
