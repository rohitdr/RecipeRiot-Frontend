import React, { useContext, useState } from "react";
import { FaLock, FaEnvelope, FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";
import { MdAlternateEmail } from "react-icons/md";
import { toast } from "sonner";
import AuthContext from "../Context/AuthContext";
import { useForgetPasswordMutation } from "../Mutations/userMutations";

export default function ForgetPassword() {
  const { handleError } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });

  const forgetPasswordMutation = useForgetPasswordMutation(handleError);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const emailRegex = /^\S+@\S+\.\S+$/;

  const validate = () => {
    if (!emailRegex.test(formData.email.trim())) {
      return "Enter a valid Email";
    }
    if (formData.username.trim().length < 8) {
      return "Username Cannot be less than 8 Characters";
    }
    if (formData.password.length < 8) {
      return "Password Length must be more than 8";
    }
    if (formData.confirmPassword.length < 8) {
      return "Confirm Password Length must be more than 8";
    }
    if (formData.password !== formData.confirmPassword) {
      return "Password and Confirm Password must be same";
    }

    return null;
  };

  const isFormValid =
    formData.email.trim() &&
    formData.username.trim() &&
    formData.password &&
    formData.confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validate();

    if (error) {
      toast.error(error);
      return;
    }

    const data = {
      email: formData.email.trim(),
      username: formData.username.trim(),
      password: formData.password,
    };

    forgetPasswordMutation.mutate(data);
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

      {/* Card */}
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
          onSubmit={handleSubmit}
        >
          {/* Email + Username */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="relative flex-1 border border-white/20 rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition">
              <FaEnvelope className="absolute top-4 left-3 text-white/40" />
              <input
                type="text"
                name="email"
                id="forget-email"
                autoComplete="email"
                className="py-3 text-sm sm:text-base text-white bg-white/10 w-full rounded-lg pl-10 outline-none"
                onChange={handleChange}
                placeholder="Enter Email"
              />
            </div>

            <div className="relative flex-1 border border-white/20 rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition">
              <MdAlternateEmail className="absolute top-4 left-3 text-white/40" />
              <input
                type="text"
                name="username"
                id="forget-username"
                autoComplete="username"
                className="py-3 text-sm sm:text-base text-white bg-white/10 w-full rounded-lg pl-10 outline-none"
                onChange={handleChange}
                placeholder="Enter Username"
              />
            </div>
          </div>

          {/* New Password */}
          <div className="relative border border-white/20 rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition">
            <FaLock className="absolute top-4 left-3 text-white/40" />
            <input
              type="password"
              name="password"
              id="forget-password"
              autoComplete="new-password"
              className="py-3 text-sm sm:text-base text-white bg-white/10 w-full rounded-lg pl-10 outline-none"
              onChange={handleChange}
              placeholder="Enter New Password"
            />
          </div>

          {/* Confirm Password */}
          <div className="relative border border-white/20 rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition">
            <FaLock className="absolute top-4 left-3 text-white/40" />
            <input
              type="password"
              name="confirmPassword"
              id="forget-confirm-password"
              autoComplete="new-password"
              className="py-3 text-sm sm:text-base text-white bg-white/10 w-full rounded-lg pl-10 outline-none"
              onChange={handleChange}
              placeholder="Confirm Password"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={!isFormValid || forgetPasswordMutation.isPending}
            className="
              w-full
              py-3
              rounded-lg
              text-sm sm:text-base
              text-white
              bg-gradient-to-r from-orange-500 to-pink-500
              hover:scale-[1.02]
              transition
              disabled:opacity-70
              disabled:cursor-not-allowed
              flex justify-center items-center
            "
          >
            {forgetPasswordMutation.isPending ? (
              <FaSpinner className="animate-spin text-white" />
            ) : (
              "Change Password"
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
}