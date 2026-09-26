import { motion } from "framer-motion";
import NoRecipesFound from "../../../Components/feedback/NoResult";

import RecipeItem from "../../../Components/RecipeItem";
import RecipeSkeleton from "./RecipeSkeleton";


export default function CategoryGrid({ data }) {
  const isMobile = window.innerWidth < 640;

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.02 : 0.06,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  if (!data) {
    return (
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 px-4"
      >
        {[...Array(10)].map((_, index) => (
          <motion.div
            variants={item}
            key={index}
            className="w-full sm:max-w-[280px] mx-auto"
          >
            <RecipeSkeleton />
          </motion.div>
        ))}
      </motion.div>
    );
  }

  if (data.recipe?.length === 0) {
    return <NoRecipesFound />;
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 px-4"
    >
      {data.recipe.map((recipe) => (
        <motion.div
          variants={item}
          key={recipe._id}
          className="w-full sm:max-w-[280px] mx-auto"
        >
          <RecipeItem recipe={recipe} />
        </motion.div>
      ))}
    </motion.div>
  );
}