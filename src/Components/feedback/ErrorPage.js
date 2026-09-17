import { motion } from "framer-motion";
import { FaTriangleExclamation, FaArrowRotateRight, FaHouse } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function ErrorPage({code,message,description}) {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#0b0f19] text-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg w-full text-center bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
      >
        {/* Icon */}
        <div className="w-20 h-20 mx-auto rounded-full bg-red-500/20 flex items-center justify-center mb-6">
          <FaTriangleExclamation className="text-red-400 text-4xl" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl font-bold mb-3">
          {code}
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
       {message}
        </h2>

        {/* Description */}
        <p className="text-white/60 mb-8">
       {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 transition"
          >
            <FaArrowRotateRight />
            Retry
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            <FaHouse />
            Go Home
          </button>
        </div>
      </motion.div>
    </section>
  );
}