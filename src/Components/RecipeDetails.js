
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import React from 'react'
import Hero from "../RecipeDetail/Hero";
import Ingridients from "../RecipeDetail/Ingridients";
import Nutrients from "../RecipeDetail/Nutrients";
import HealthLabel from "../RecipeDetail/HealthLabel";
import Comments from "../RecipeDetail/Comments";
import ReviewForm from "../RecipeDetail/ReviewForm";

export default function RecipeDetails({recipe=  {
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
    }}) {
  return (
    <div className='relative min-h-screen overflow-hidden bg-[#06070d] text-white'>
       <Hero recipe={recipe}></Hero>
       <Ingridients ingredientLines={recipe.ingredientLines}></Ingridients>
    <Nutrients totalNutrients={recipe.totalNutrients}/>
  <HealthLabel healthLabels={recipe.healthLabels}/>
  <dietLabels dietLabels={recipe.dietLabels} />



<section className="mx-auto max-w-7xl px-6 ">
<ReviewForm></ReviewForm>
<Comments></Comments>
</section>
<section className="max-w-7xl mx-auto px-6 py-24 text-center">
  <h1 className="text-3xl sm:text-5xl font-black text-white">
    Ready to cook something else?
  </h1>

  <p className="text-white/50 mt-4 max-w-xl mx-auto">
    Discover more delicious recipes crafted for every mood.
  </p>

  <button className="mt-8 px-8 py-4 rounded-full bg-orange-500 text-black font-bold hover:scale-105 transition">
    Explore More Recipes
  </button>
</section>

    </div>
  )
}
