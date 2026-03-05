import "./App.css";
import SideBar from "./Components/SideBar.js";
import SearchBar from "./Components/SearchBar.js";

import { Routes, Route, useLocation } from "react-router-dom";
import IndividualRecipe from "./Components/IndividualRecipe.js";
import Login from "./Components/Login";
import LoadingBar from "react-top-loading-bar";

import Profile from "./Components/Profile";
import Home from "./Components/Home";
import AddRecipe from "./Components/AddRecipe";
import SearchResult from "./Components/SearchResult";
import { useContext } from "react";
import RecipeContext from "./Context/RecipeContext";

import ProfileProfile from "./Components/ProfileProfile";
import ProfileSecurity from "./Components/ProfileSecurity";
import Profile_LikedRecipe from "./Components/ProfileLikedRecipe.js";
import Profile_Activity from "./Components/ProfileActivity.js";

import SignUp from "./Components/SignUp";
import CuisineType from "./Components/CuisineType";
import Health from "./Components/Health";
import Meal from "./Components/Meal";
import Dishtype from "./Components/DishType.js";
import Diettype from "./Components/DietType.js";
import Footer from "./Components/Footer";

import EditRecipe from "./Components/EditRecipe";

import Admin from "./Components/Admin";
import { AnimatePresence } from "framer-motion";
import EditUserAdmin from "./Components/EditUserAdmin";
import Alert from "./Components/Alert";

function App() {
  const context = useContext(RecipeContext);
  const { alert, progress, setProgress, progressheight } = context;

  let location = useLocation();
  return (
    <>
      <LoadingBar
        color="blue"
        progress={progress}
        height={progressheight}
        onLoaderFinished={() => setProgress(0)}
      />

      <SideBar></SideBar>

      <SearchBar></SearchBar>

      <Alert alert={alert}></Alert>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route exact path="/login" element={<Login></Login>} />

          <Route exact path="/home" element={<Home></Home>} />
          <Route
            exact
            path="/Edituser"
            element={<EditUserAdmin></EditUserAdmin>}
          />
          <Route exact path="/Admin" element={<Admin></Admin>} />

          <Route
            exact
            path="/AddRecipe"
            element={
              <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                  <AddRecipe></AddRecipe>
                </div>
              </section>
            }
          />
          <Route exact path="/signUp" element={<SignUp></SignUp>} />
          <Route exact path="/Edit" element={<EditRecipe></EditRecipe>} />

          <Route
            exact
            path="/Profile"
            element={
              <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                  <ProfileProfile></ProfileProfile>
                </div>
              </section>
            }
          />
          <Route exact path="/AddRecipe" element={<AddRecipe></AddRecipe>} />
          <Route exact path="/health" element={<Health></Health>} />
          <Route exact path="/mealType" element={<Meal></Meal>} />
          <Route exact path="/dietType" element={<Diettype></Diettype>} />
          <Route exact path="/dishType" element={<Dishtype></Dishtype>} />
          <Route
            exact
            path="/cuisineType"
            element={<CuisineType></CuisineType>}
          />
          <Route exact path="/" element={<Home></Home>} />
          <Route
            exact
            path="/SearchResult"
            element={<SearchResult></SearchResult>}
          />
          <Route
            exact
            path="/RecipeItself"
            element={<IndividualRecipe></IndividualRecipe>}
          />
          <Route
            exact
            path="/ProfileProfile"
            element={
              <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                  <ProfileProfile></ProfileProfile>
                </div>
              </section>
            }
          />
          <Route
            exact
            path="/ProfileSecurity"
            element={
              <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                  <ProfileSecurity></ProfileSecurity>
                </div>
              </section>
            }
          />
          <Route
            exact
            path="/ProfileRecipe"
            element={
              <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                  <Profile></Profile>
                </div>
              </section>
            }
          />
          <Route
            exact
            path="/ProfileLikedRecipe"
            element={
              <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                  <Profile_LikedRecipe></Profile_LikedRecipe>
                </div>
              </section>
            }
          />
          <Route
            exact
            path="/ProfileActivity"
            element={
              <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                  <Profile_Activity></Profile_Activity>
                </div>
              </section>
            }
          />

          <Route
            exact
            path="/Individualdescription"
            element={
              <>
                <IndividualRecipe></IndividualRecipe>
              </>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer></Footer>
    </>
  );
}

export default App;
