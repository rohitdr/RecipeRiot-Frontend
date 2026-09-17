import { Routes, Route, useLocation } from "react-router-dom";
import {  Suspense, useContext } from "react";
import "./App.css";



import Navbar from "./Components/Navbar.js";
import { Toaster } from "sonner";


import AuthContext from "./Context/AuthContext.js";


import { appRoutes } from "./Routes/appRoutes.js";
import AppLoader from './Components/loaders/AppLoader';
import ErrorPage from './Components/feedback/ErrorPage';





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
