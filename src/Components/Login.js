import React, { useContext, useState } from "react";
import { FaLock, FaEnvelope, FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import { useLoginMutation } from "../Mutations/userMutations";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { handleError } = useContext(AuthContext);
  const loginMutation = useLoginMutation(handleError);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const emailRegex = /^\S+@\S+\.\S+$/;

  const validate = () => {
    if (!formData.email.trim()) {
      return "Email Cannot be Empty";
    }
    if (!emailRegex.test(formData.email.trim())) {
      return "Enter a valid Email";
    }
    if (!formData.password) {
      return "Password Cannot be empty";
    }
    if (formData.password.length < 8) {
      return "Password length cannot be less than 8";
    }

    return null;
  };

  const isFormValid = formData.email.trim() && formData.password;

  const handleLogin = (e) => {
    e.preventDefault();

    const error = validate();

    if (error) {
      toast.error(error);
      return;
    }

    loginMutation.mutate({
      email: formData.email.trim(),
      password: formData.password,
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-6">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920"
          className="object-cover w-full h-full"
          loading="lazy"
          alt="food bg"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="
          relative 
          w-full 
          max-w-md 
          bg-white/10 
          px-5 py-6 
          sm:px-8 sm:py-8
          backdrop-blur-2xl 
          border border-white/20
          rounded-2xl sm:rounded-3xl
          shadow-2xl
        "
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-wide text-white">
            🍲 RecipeRiot
          </h1>
          <p className="text-xs sm:text-sm text-white/70 mt-2">
            Cook bold. Share loud. Taste chaos.
          </p>
        </div>

        {/* Form */}
        <form
          className="flex flex-col gap-4"
          onSubmit={handleLogin}
        >
          {/* Email */}
          <div className="relative border border-white/20 rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition">
            <FaEnvelope className="absolute top-4 left-3 text-white/40" />
            <input
              type="text"
              name="email"
              id="login-email"
              autoComplete="email"
              className="py-3 text-sm sm:text-base text-white bg-white/10 w-full rounded-lg pl-10 outline-none"
              onChange={handleChange}
              placeholder="Enter Your Email"
            />
          </div>

          {/* Password */}
          <div className="relative border border-white/20 rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition">
            <FaLock className="absolute top-4 left-3 text-white/40" />
            <input
              type="password"
              name="password"
              id="login-password"
              autoComplete="current-password"
              className="py-3 text-sm sm:text-base text-white bg-white/10 w-full rounded-lg pl-10 outline-none"
              onChange={handleChange}
              placeholder="Enter Your Password"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              className="text-xs sm:text-sm text-white/70 hover:text-orange-300 transition"
              to="/forgetPassword"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={!isFormValid || loginMutation.isPending}
            className="
              w-full
              py-3
              rounded-lg
              text-sm sm:text-base
              text-white
              bg-gradient-to-r from-orange-500 to-pink-500
              hover:scale-[1.02]
              transition
              disabled:opacity-60
              disabled:cursor-not-allowed
              flex justify-center items-center
            "
          >
            {loginMutation.isPending ? (
              <FaSpinner className="animate-spin text-white" />
            ) : (
              "Login To RecipeRiot"
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-white/60 mt-5">
          New here?{" "}
          <Link
            className="text-white font-semibold hover:text-orange-300 transition"
            to="/signUp"
          >
            Create an account
          </Link>
        </p>
      </motion.div>
    </section>
  );
}