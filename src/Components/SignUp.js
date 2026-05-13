import React, { useContext, useState } from "react";
import {
  FaLock,
  FaEnvelope,
  FaPhoneAlt,
  FaUser,
  FaSpinner,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import AuthContext from "../Context/AuthContext";
import { useSignUpMutation } from "../Mutations/userMutations";

export default function SignUp() {
  const { handleError } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    username: "",
    phoneNumber: "",
  });

  const signUpMutation = useSignUpMutation(handleError);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex = /^[6-9]\d{9}$/;
  const nameRegex = /^[A-Za-z\s'-]{2,50}$/;

  const validate = () => {
    if (!nameRegex.test(formData.name.trim())) {
      return "Enter a valid Name";
    }
    if (!emailRegex.test(formData.email.trim())) {
      return "Enter a valid Email";
    }
    if (formData.username.trim().length < 8) {
      return "Username Cannot be less than 8 Characters";
    }
    if (!phoneRegex.test(formData.phoneNumber.trim())) {
      return "Enter a valid Phone Number";
    }
    if (formData.password.length < 8) {
      return "Password Length must be more than 8";
    }

    return null;
  };

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.phoneNumber.trim() &&
    formData.username.trim() &&
    formData.password;

  const handleSignUp = (e) => {
    e.preventDefault();

    const error = validate();

    if (error) {
      toast.error(error);
      return;
    }

    const data = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      username: formData.username.trim(),
      password: formData.password,
    };

    signUpMutation.mutate(data);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-6">
      
    
      <div className="absolute inset-0">
        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920"
          className="object-cover w-full h-full"
          alt="food bg"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

   
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
          rounded-2xl 
          sm:rounded-3xl 
          shadow-2xl
        "
      >
     
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-wide text-white">
            🍲 RecipeRiot
          </h1>
          <p className="text-xs sm:text-sm text-white/70 mt-2">
            Cook bold. Share loud. Taste chaos.
          </p>
        </div>

       
        <form
          className="flex flex-col gap-3 sm:gap-4"
          onSubmit={handleSignUp}
        >
     
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="relative flex-1 border border-white/20 rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition">
              <FaUser className="absolute top-4 left-3 text-white/40" />
              <input
                type="text"
                name="name"
                id="signup-name"
                autoComplete="name"
                className="py-3 text-sm sm:text-base text-white bg-white/10 w-full rounded-lg pl-10 outline-none"
                onChange={handleChange}
                placeholder="Enter Name"
              />
            </div>

            <div className="relative flex-1 border border-white/20 rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition">
              <FaEnvelope className="absolute top-4 left-3 text-white/40" />
              <input
                type="text"
                name="email"
                id="signup-email"
                autoComplete="email"
                className="py-3 text-sm sm:text-base text-white bg-white/10 w-full rounded-lg pl-10 outline-none"
                onChange={handleChange}
                placeholder="Enter Email"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="relative flex-1 border border-white/20 rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition">
              <MdAlternateEmail className="absolute top-4 left-3 text-white/40" />
              <input
                type="text"
                name="username"
                id="signup-username"
                autoComplete="username"
                className="py-3 text-sm sm:text-base text-white bg-white/10 w-full rounded-lg pl-10 outline-none"
                onChange={handleChange}
                placeholder="Enter Username"
              />
            </div>

            <div className="relative flex-1 border border-white/20 rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition">
              <FaPhoneAlt className="absolute top-4 left-3 text-white/40" />
              <input
                type="tel"
                name="phoneNumber"
                id="signup-phone"
                autoComplete="tel"
                maxLength={10}
                minLength={10}
                className="py-3 text-sm sm:text-base text-white bg-white/10 w-full rounded-lg pl-10 outline-none"
                onChange={handleChange}
                placeholder="Enter Number"
              />
            </div>
          </div>

       
          <div className="relative border border-white/20 rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition">
            <FaLock className="absolute top-4 left-3 text-white/40" />
            <input
              type="password"
              name="password"
              id="signup-password"
              autoComplete="current-password"
              className="py-3 text-sm sm:text-base text-white bg-white/10 w-full rounded-lg pl-10 outline-none"
              onChange={handleChange}
              placeholder="Enter Password"
            />
          </div>

      
          <button
            type="submit"
            disabled={!isFormValid || signUpMutation.isPending}
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
            {signUpMutation.isPending ? (
              <FaSpinner className="animate-spin text-white" />
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-white/60 mt-5">
          Existing User?{" "}
          <Link
            className="text-white font-semibold hover:text-orange-300 transition"
            to="/login"
          >
            Login To RecipeRiot
          </Link>
        </p>
      </motion.div>
    </section>
  );
}