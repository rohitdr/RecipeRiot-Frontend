import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { lazy, Suspense, useContext } from "react";
import "./App.css";
import Login from "./Components/Login";
import LoadingBar from "react-top-loading-bar";

import Home from "./Components/Home";






import SignUp from "./Components/SignUp";



import Navbar from "./Components/Navbar.js";
import { Toaster } from "sonner";
import PublicRoute from "./Components/PublicRoute.js";
import ProtectedRoute from "./Components/ProtectedRoute.js";


import AuthContext from "./Context/AuthContext.js";
import AppLoader from "./Components/AppLoader.js";


const CategoryRecipe = lazy(()=>import("./Components/CategoryRecipe.js"))
const RecipeDetails=lazy(()=>import("./Components/RecipeDetails.js"))
const AddRecipe =lazy(()=>import("./AddRecipe.js"))
const InternalServerError=lazy(()=>import("./Components/InternalServerError.js"))
const Profile=lazy(()=>import("./Profile/Profile.js"))
const ForgetPassword=lazy(()=>import("./Components/ForgetPassword.js"))
const About=lazy(()=>import("./Components/About.js"))
const SearchResult=lazy(()=>import("./Components/SearchResult.js"))

function App() {
  const {isServerDown}=useContext(AuthContext)
let location = useLocation()
const hideLayoutRoutes=['/login','/signUp','/forgetPassword']
const hideLayout = hideLayoutRoutes.includes(location.pathname)
if(isServerDown) return <InternalServerError></InternalServerError>
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
         <Suspense fallback={<AppLoader></AppLoader>}>
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
          <Route exact path="/editRecipe/:id" element={<ProtectedRoute><AddRecipe></AddRecipe></ProtectedRoute>}/>
          <Route exact path="/profile" element={<ProtectedRoute><Profile></Profile></ProtectedRoute>}/>
          <Route exact path="/about" element={<About></About>}/>

        </Routes></Suspense>
    </>
  );
}

export default App;
