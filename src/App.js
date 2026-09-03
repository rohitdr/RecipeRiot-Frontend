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

import { appRoutes } from "./Routes/appRoutes.js";
import ErrorPage from "./Components/ErrorPage.js";




function App() {
  const {isServerDown}=useContext(AuthContext)
let location = useLocation()
const hideLayoutRoutes=['/login','/signup','/forgetpassword']
const hideLayout = hideLayoutRoutes.includes(location.pathname.toLocaleLowerCase())
if(isServerDown) return <ErrorPage code={500} message="Internal Server Error" description="   Something went wrong while fetching your delicious recipes.
          Our kitchen servers might be overheating 🍳"></ErrorPage>
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
          {appRoutes.map((route)=>{
            return   <Route key={route.path}  path={route.path} element={route.element} />
          })}
        
    

        </Routes></Suspense>
    </>
  );
}

export default App;
