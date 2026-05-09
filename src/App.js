import "./App.css";

import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Login from "./Components/Login";
import LoadingBar from "react-top-loading-bar";

import Home from "./Components/Home";






import SignUp from "./Components/SignUp";



import Profile from "./Profile/Profile.js";

import Navbar from "./Components/Navbar.js";
import CategoryRecipe from "./Components/CategoryRecipe.js";
import RecipeDetails from "./Components/RecipeDetails.js";
import AddRecipe from "./AddRecipe.js";
import { Toaster } from "sonner";
import SearchResult from "./Components/SearchResult.js";
import PublicRoute from "./Components/PublicRoute.js";
import ProtectedRoute from "./Components/ProtectedRoute.js";
import ForgetPassword from "./Components/ForgetPassword.js";
function App() {
let location = useLocation()
const hideLayoutRoutes=['/login','/signUp','/forgetPassword']
const hideLayout = hideLayoutRoutes.includes(location.pathname)

  return (
    <>
    
    
    {!hideLayout && <Navbar></Navbar>}

     <Toaster
  theme="dark"
  toastOptions={{
    style: {
      background: "#111827",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "14px",
    }
  }}
/>
   
        <Routes>
          <Route exact path="/login" element={<PublicRoute><Login></Login></PublicRoute>} />
          <Route exact path="/forgetPassword" element={<PublicRoute><ForgetPassword></ForgetPassword></PublicRoute>} />
          <Route exact path="/" element={<Home></Home>}/>
          <Route exact path="/home" element={<Navigate to="/" replace></Navigate>}/>
          <Route exact path="/signUp" element={<PublicRoute><SignUp></SignUp></PublicRoute>}/>
          <Route exact path="/category/:categoryType/:categoryName" element={<CategoryRecipe/>} />
          <Route exact path="/recipePage/:recipeId" element={<RecipeDetails></RecipeDetails>} />
          <Route exact path="/search/:query" element={<SearchResult></SearchResult>} />
          <Route exact path="/addRecipe" element={<ProtectedRoute><AddRecipe></AddRecipe></ProtectedRoute>}/>
          <Route exact path="/profile" element={<ProtectedRoute><Profile></Profile></ProtectedRoute>}/>

        </Routes>
    </>
  );
}

export default App;
