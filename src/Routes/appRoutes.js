import { Navigate } from "react-router-dom"
import { lazy } from "react"


import Home from "../pages/Home.js"
import Login from "../pages/Login.js"
import SignUp from "../pages/Signup.js"
import ProtectedRoute from "../Components/routes/ProtectedRoute.js"
import PublicRoute from "../Components/routes/PublicRoute.js"
import ErrorPage from './../Components/feedback/ErrorPage';

const CategoryRecipe = lazy(()=>import("../Components/CategoryRecipe.js"))
const RecipeDetails=lazy(()=>import("../Components/RecipeDetails.js"))
const AddRecipe =lazy(()=>import("../AddRecipe.js"))
const Profile=lazy(()=>import("../Profile/Profile.js"))

const ForgetPassword=lazy(()=>import('./../pages/ForgetPassword'))
const About=lazy(()=>import("../pages/About.js"))
const SearchResult=lazy(()=>import("../Components/SearchResult.js"))


export const appRoutes = [
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    )
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <SignUp />
      </PublicRoute>
    )
  },
  {
    path: "/forgetpassword",
    element: (
      <PublicRoute>
        <ForgetPassword />
      </PublicRoute>
    )
  },

  { path: "/", element: <Home /> },
  { path: "/home", element: <Navigate to='/' replace></Navigate> },
  { path: "*", element: <ErrorPage  code={404} message="Page not found" description="Looks like this page is missing from our kitchen. Try searching for another delicious recipe or head back home."></ErrorPage> },
  { path: "/about", element: <About /> },
  { path: "/search/:query", element: <SearchResult /> },
  {
    path: "/category/:categoryType/:categoryName",
    element: <CategoryRecipe />
  },
  {
    path: "/recipepage/:recipeId",
    element: <RecipeDetails />
  },

  {
    path: "/addrecipe",
    element: (
      <ProtectedRoute>
        <AddRecipe />
      </ProtectedRoute>
    )
  },
  {
    path: "/editrecipe/:id",
    element: (
      <ProtectedRoute>
        <AddRecipe />
      </ProtectedRoute>
    )
  },
  {
    path: "/profi74le",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    )
  }
];