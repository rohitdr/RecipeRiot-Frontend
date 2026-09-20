import { Routes, Route, useLocation } from "react-router-dom";
import {  Suspense, useContext } from "react";
import "./App.css";



import Navbar from "./Components/Navbar.js";
import { Toaster } from "sonner";


import AuthContext from "./Context/AuthContext.js";


import { appRoutes } from "./Routes/appRoutes.js";
import AppLoader from './Components/loaders/AppLoader';
import ErrorPage from './Components/feedback/ErrorPage';
import ProtectedRoute from "./Components/routes/ProtectedRoute.js";
import Profile from "./Profile/Profile.js";
import ProfileCard from './features/profile/components/ProfileCard';
import ProfileInfo from './features/profile/components/ProfileInfo';
import Settings from './features/profile/components/Settings';
import Liked from './features/recipes/components/Liked';
import Recipe from './features/recipes/components/Recipe';






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
         <Route path="/profile" element={<ProtectedRoute />}>
  <Route element={<Profile />}>
    <Route index element={
      <div className="grid max-w-7xl lg:grid-cols-[300px_1fr] mx-auto gap-6 px-4">
        <ProfileCard />
        <ProfileInfo />
      </div>
    } />

    <Route path="recipes" element={<Recipe />} />
    <Route path="liked-recipes" element={<Liked />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Route>
        
    

        </Routes></Suspense>
    </>
  );
}

export default App;
