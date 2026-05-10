import { motion, AnimatePresence } from "framer-motion";

export default function LogoutConfirmDialog({ open, setOpen }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("Logged out");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white w-80 rounded-2xl shadow-2xl p-6"
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
              y: 40,
              transition: { duration: 0.2 },
            }}
          >
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-900">
              Logout Confirmation
            </h2>

            {/* Message */}
            <p className="text-gray-600 mt-2 text-sm">
              Are you sure you want to logout from your account?
            </p>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-lg border text-gray-600 hover:text-black transition"
              >
                Cancel
              </button>

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}