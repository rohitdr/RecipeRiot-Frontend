import React from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaHeart, FaUsers, FaLeaf } from "react-icons/fa";

export default function About() {
  const stats = [
    { icon: <FaUtensils />, title: "1000+ Recipes", desc: "Discover recipes from home cooks and food lovers." },
    { icon: <FaHeart />, title: "Community Driven", desc: "Save, like and share recipes you love." },
    { icon: <FaUsers />, title: "Growing Creators", desc: "Chefs and creators share their cooking ideas." },
    { icon: <FaLeaf />, title: "Healthy Choices", desc: "Explore diet-friendly and healthy meals." },
  ];

  return (
    <section className="min-h-screen   bg-[#06070d] text-white px-6  md:px-16 py-24">
        <div className="max-w-7xl mx-auto">

      
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto"
      >
        <span className="px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm">
          Our Story 🍴
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
          Cooking Made Social with <span className="text-orange-500">RecipeRiot</span>
        </h1>

        <p className="text-gray-400 mt-6 text-lg leading-relaxed">
          RecipeRiot is a platform where food lovers can discover, create,
          and share recipes with the world. From quick snacks to gourmet meals,
          we help people turn their cooking passion into something shareable.
        </p>
      </motion.div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-10 mt-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Why We Built It</h2>
          <p className="text-gray-400 leading-relaxed">
            We noticed that many amazing homemade recipes stay hidden in family
            kitchens. RecipeRiot gives everyone a place to showcase their recipes,
            build a following, and inspire others.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8"
        >
          <h3 className="text-xl font-semibold text-orange-400 mb-4">
            What You Can Do
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>✔ Share your own recipes</li>
            <li>✔ Discover trending meals</li>
            <li>✔ Save liked recipes</li>
            <li>✔ Explore nutrition details</li>
            <li>✔ Connect with food lovers</li>
          </ul>
        </motion.div>
      </div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-orange-500/30 transition"
          >
            <div className="text-orange-500 text-3xl flex justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 text-center bg-orange-500/10 border border-orange-500/20 rounded-3xl p-10"
      >
        <h2 className="text-3xl font-bold">Ready to Share Your Recipe?</h2>
        <p className="text-gray-400 mt-4">
          Join our growing community of food creators and inspire others.
        </p>

        <button className="mt-6 px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-semibold transition">
          Start Sharing
        </button>
      </motion.div>  </div>
    </section>
  );
}
