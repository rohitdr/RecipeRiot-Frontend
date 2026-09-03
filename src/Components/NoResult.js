import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaUtensils } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function NoRecipesFound() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#06070d] text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg text-center"
      >
        {/* Icon */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="w-24 h-24 mx-auto rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 text-4xl"
        >
          <FaUtensils />
        </motion.div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mt-6">
          No Recipes Found 🍽️
        </h1>

        {/* Description */}
        <p className="text-gray-400 mt-4 leading-relaxed">
          We searched the kitchen but couldn’t find any matching recipes.
          Try searching with another keyword or explore all recipes.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 transition font-semibold"
          >
            Explore Recipes
          </button>

          <button
            onClick={() => navigate("/addrecipe")}
            className="px-6 py-3 rounded-xl border border-white/20 hover:border-orange-400 transition"
          >
            Add Your Recipe
          </button>
        </div>

        {/* Small Search Tip */}
        <div className="mt-10 text-sm text-gray-500 flex items-center justify-center gap-2">
          <FaSearch />
          Try searching: Pasta, Indian, Healthy, Dessert
        </div>
      </motion.div>
    </section>
  );
}
