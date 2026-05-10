import { AnimatePresence, motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";

export default function DeleteRecipeDialog({
  open,
  setOpen,
  handleDelete,
  pending
}) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 220,
                damping: 22,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 30,
              transition: { duration: 0.2 },
            }}
            className="relative w-full max-w-md bg-[#111827] border border-white/10 rounded-2xl shadow-2xl p-6"
          >
            {/* Danger Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.1,
                type: "spring",
              }}
              className="w-14 h-14 mx-auto rounded-full bg-red-500/20 flex items-center justify-center text-2xl text-red-500"
            >
              🗑️
            </motion.div>

            {/* Title */}
            <h2 className="text-center text-xl font-bold text-white mt-4">
              Delete Recipe?
            </h2>

            {/* Message */}
            <p className="text-center text-sm text-gray-400 mt-2">
              This action is{" "}
              <span className="text-red-400 font-semibold">
                permanent
              </span>
              . Your recipe will be removed forever.
            </p>

            {/* Warning Box */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-5 bg-red-500/10 border border-red-500/20 text-red-300 text-xs p-3 rounded-xl"
            >
              ⚠️ This action cannot be undone.
            </motion.div>

            {/* Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setOpen(false)}
                disabled={pending}
                className="flex-1 py-3 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5 transition"
              >
                Cancel
              </button>

              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={handleDelete}
                disabled={pending}
                className="flex-1 flex items-center justify-center py-3 rounded-xl bg-red-600 text-white hover:bg-red-700 transition"
              >
                {pending?<FaSpinner className="animate-spin  text-white"></FaSpinner>:"Delete"}
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}