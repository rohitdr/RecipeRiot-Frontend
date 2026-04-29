import {
  FaUtensils,
  FaMugHot,
  FaBowlRice,
  FaDrumstickBite,
  FaCookieBite,
  FaMugSaucer,
  FaBowlFood,
  FaBreadSlice,
  FaSeedling,
  FaIceCream,
  FaGlassWater,
  FaLeaf,
  FaBurger,
  FaCakeCandles,
  FaFish,
  FaBacon,
  FaScaleBalanced,
  FaDumbbell,
  FaWeightScale,
  FaHeartPulse,
  FaDroplet,
  FaBan,
  FaFire,
  FaCandyCane,
  FaCarrot,
  FaEarthAsia,
  FaFlag,
  FaPepperHot,
  FaWineGlass,
  FaCalendar,
  FaRing,
  FaChampagneGlasses,
  FaTree,
  FaHeart,
} from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export default function Navbar() {
  const menuItems = ["Home", "Recipes", "Trending", "Categories", "Contact", "About"];
  const [openCategory, setOpenCategory] = useState(false);
  const [openMenu,setOpenMenu]=useState(false)
  const categoriesItems = [
    {
      title: "Meal Type",
      key: "mealType",
      icon: FaUtensils,
      items: [
        { name: "Breakfast", key: "breakfast", icon: FaMugHot },
        { name: "Lunch", key: "lunch", icon: FaBowlRice },
        { name: "Dinner", key: "dinner", icon: FaDrumstickBite },
        { name: "Snack", key: "snack", icon: FaCookieBite },
        { name: "Teatime", key: "teatime", icon: FaMugSaucer },
      ],
    },
    {
      title: "Dish Type",
      key: "dishType",
      icon: FaBowlFood,
      items: [
        { name: "Bread", key: "bread", icon: FaBreadSlice },
        { name: "Cereals", key: "cereals", icon: FaSeedling },
        { name: "Desserts", key: "desserts", icon: FaIceCream },
        { name: "Drinks", key: "drinks", icon: FaGlassWater },
        { name: "Main Course", key: "main-course", icon: FaUtensils },
        { name: "Salad", key: "salad", icon: FaLeaf },
        { name: "Soup", key: "soup", icon: FaBowlFood },
        { name: "Starter", key: "starter", icon: FaUtensils },
        { name: "Sweets", key: "sweets", icon: FaCakeCandles },
        { name: "Sandwiches", key: "sandwiches", icon: FaBurger },
      ],
    },
    {
      title: "Diet Type",
      key: "diet",
      icon: FaBacon,
      items: [
        { name: "Balanced", key: "balanced", icon: FaScaleBalanced },
        { name: "High Fiber", key: "high-fiber", icon: FaSeedling },
        { name: "High Protein", key: "high-protein", icon: FaDumbbell },
        { name: "Low Carb", key: "low-carb", icon: FaWeightScale },
        { name: "Low Fat", key: "low-fat", icon: FaHeartPulse },
        { name: "Low Sodium", key: "low-sodium", icon: FaDroplet },
      ],
    },
    {
      title: "Health",
      key: "health",
      icon: FaHeartPulse,
      items: [
        { name: "Alcohol Free", key: "alcohol-free", icon: FaBan },
        { name: "Dairy Free", key: "dairy-free", icon: FaGlassWater },
        { name: "Gluten Free", key: "gluten-free", icon: FaLeaf },
        { name: "Keto Friendly", key: "keto", icon: FaFire },
        { name: "Low Sugar", key: "low-sugar", icon: FaCandyCane },
        { name: "Vegan", key: "vegan", icon: FaLeaf },
        { name: "Vegetarian", key: "vegetarian", icon: FaCarrot },
      ],
    },
    {
      title: "Cuisine Type",
      key: "cuisine",
      icon: FaEarthAsia,
      items: [
        { name: "Indian", key: "indian", icon: FaFlag },
        { name: "Chinese", key: "chinese", icon: FaFlag },
        { name: "Italian", key: "italian", icon: FaFlag },
        { name: "Mexican", key: "mexican", icon: FaPepperHot },
        { name: "French", key: "french", icon: FaWineGlass },
        { name: "Japanese", key: "japanese", icon: FaFish },
        { name: "American", key: "american", icon: FaBurger },
        { name: "Mediterranean", key: "mediterranean", icon: FaLeaf },
      ],
    },
  
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">

      {/* TOP NAV */}
      <div className="flex justify-between items-center px-4 md:px-16 py-4">

        {/* LOGO */}
        <div className="flex gap-2 items-center text-lg font-extrabold">
          <FaUtensils className="text-orange-500" />
          RecipeRiot
        </div>

        {/* MENU */}
        <ul className="hidden md:flex gap-8 items-center font-medium">

          {menuItems.map((item) => {

            if (item === "Categories") {
              return (
                <li key={item} className="relative group cursor-pointer">

                  <span className="hover:text-orange-500 transition">
                    {item}
                  </span>

                  {/* ✅ FULL WIDTH MEGA MENU */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-5 w-screen bg-white shadow-xl border-t border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">

                    {/* CONTENT */}
                    <div className="max-w-7xl mx-auto px-10 py-8">

                      {/* ✅ FORCE 5 COLUMNS */}
                      <div className="grid grid-cols-5 gap-10">

                        {categoriesItems.map((category) => (
                          <div key={category.key}>

                            <div className="flex items-center gap-2 mb-3">
                              <category.icon className="text-orange-500 text-sm" />
                              <h3 className="text-sm font-semibold text-gray-800">
                                {category.title}
                              </h3>
                            </div>

                            <ul className="space-y-2">
                              {category.items.map((item) => (
                                <li
                                  key={item.key}
                                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 cursor-pointer transition"
                                >
                                  <item.icon className="text-xs text-gray-400" />
                                  <span className="hover:translate-x-1 transition-transform duration-200">
                                    {item.name}
                                  </span>
                                </li>
                              ))}
                            </ul>

                          </div>
                        ))}

                      </div>

                    </div>

                  </div>

                </li>
              );
            }

            return (
              <motion.li
                key={item}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer hover:text-orange-500 transition"
              >
                {item}
              </motion.li>
            );
          })}

        </ul>

        {/* SEARCH */}
        <div className="hidden md:flex items-center bg-white/30 border border-gray-300/40 backdrop-blur-xl rounded-full px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-orange-400 transition">
          <input
            type="search"
            placeholder="Search recipes..."
            className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500 w-40 focus:w-60 transition-all duration-300"
          />
          <button className="text-orange-500 text-lg">🔍</button>
        </div>
        <div className="md:hidden" onClick={()=>{setOpenMenu((prev)=>!prev)}}>
<GiHamburgerMenu className="text-black"></GiHamburgerMenu>
        </div>
      </div>
   <AnimatePresence>
    {openMenu && <motion.div
     initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
    >
      <ul className="flex md:hidden flex-col gap-4 px-4 bg-white/70 py-4 items-start font-medium">

        {menuItems.map((item) => {

          // 👉 NORMAL ITEMS
          if (item !== "Categories") {
            return (
              <motion.li
                key={item}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer hover:text-orange-500 transition"
              >
                {item}
              </motion.li>
            );
          }

          // 👉 CATEGORIES DROPDOWN
          return (
            <div key="categories" className="w-full">
              
              {/* HEADER */}
              <div
                onClick={() => setOpenCategory(!openCategory)}
                className="flex justify-between items-center w-full cursor-pointer hover:text-orange-500 transition"
              >
                <span className="flex items-center gap-2">
                   Categories
                </span>
                <span>{openCategory ? "−" : "+"}</span>
              </div>

        
              <AnimatePresence>
                {openCategory && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                     <div className="max-h-[60vh] overflow-y-auto pr-2 py-2">
                    <div className="mt-3 pl-2 space-y-4">

                      {categoriesItems.map((category) => (
                        <div key={category.key}>
                          
                          {/* CATEGORY TITLE WITH ICON */}
                          <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-2 ">
                            {category.icon && (
                              <category.icon className="text-orange-500 text-sm" />
                            )}
                            {category.title}
                          </h4>

                          {/* ITEMS */}
                          <ul className="space-y-1 pl-4">
                            {category.items.map((sub) => (
                              <li
                                key={sub.key}
                                className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 cursor-pointer transition"
                              >
                                {/* ITEM ICON */}
                                {sub.icon && (
                                  <sub.icon className="text-xs text-gray-400" />
                                )}

                                {/* TEXT */}
                                <span>{sub.name}</span>
                              </li>
                            ))}
                          </ul>

                        </div>
                      ))}

                    </div>
                 </div> </motion.div>
                )}
              </AnimatePresence>

            </div>
          );
        })}

      </ul>
    </motion.div>} </AnimatePresence>
    </nav>
  );
}