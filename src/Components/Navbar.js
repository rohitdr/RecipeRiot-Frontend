import {
  FaUtensils,
  FaMugHot,
  FaBowlRice,
  FaDrumstickBite,
  FaCookieBite,
  FaMugSaucer,
  FaBowlFood,
  FaBreadSlice,

  FaIceCream,
  FaGlassWater,
  FaLeaf,
  FaBurger,

  FaBacon,
  FaScaleBalanced,
  FaDumbbell,
  FaWeightScale,
  FaHeartPulse,

  FaCarrot,
  FaEarthAsia,
  FaFlag,
  FaPepperHot,

} from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import  { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useHoverPrefetch from "../Hooks/PrefetchHooks/useHoverPrefetch";
import usePrefetch from "../Hooks/PrefetchHooks/usePrefetch";
import { toCamelCase } from "../Utility/Utility";
import useMe from "../features/profile/hooks/useMe";
export default function Navbar() {
 const {data:Me}=useMe()
  const {prefetchRecipe}=usePrefetch()
  const {handleHover}=useHoverPrefetch(prefetchRecipe)
  const [openCategory, setOpenCategory] = useState(false);
  const [mobileMenuItems,setMobileMenuItems]=useState(["Home",  "Categories","SignUp","Login", "About"])
  const [openMenu, setOpenMenu] = useState(false);
  const [search,setSearch]=useState("")
  const navigate = useNavigate()
  const location = useLocation();

const isCategoryActive = location.pathname.startsWith("/category/");

  const menuItems = ["Home",  "Categories", "About"];
  useEffect(()=>{
if(Me){
setMobileMenuItems(["Home",  "Categories","Profile", "About"])
}
else{
  setMobileMenuItems(["Home",  "Categories","SignUp","Login", "About"])
}

  },[Me])
  const categoriesItems = [
    {
      title: "Meal Type",
      icon: FaUtensils,
      items: [
        { name: "Breakfast", icon: FaMugHot },
        { name: "Lunch", icon: FaBowlRice },
        { name: "Dinner", icon: FaDrumstickBite },
        { name: "Snack", icon: FaCookieBite },
        { name: "Teatime", icon: FaMugSaucer },
      ],
    },
    {
      title: "Dish Type",
      icon: FaBowlFood,
      items: [
        { name: "Bread", icon: FaBreadSlice },
        { name: "Desserts", icon: FaIceCream },
        { name: "Drinks", icon: FaGlassWater },
        { name: "Salad", icon: FaLeaf },
        { name: "Sandwiches", icon: FaBurger },
      ],
    },
    {
      title: "Diet Type",
      icon: FaBacon,
      items: [
        { name: "Balanced", icon: FaScaleBalanced },
        { name: "High Protein", icon: FaDumbbell },
        { name: "Low Carb", icon: FaWeightScale },
        { name: "Low Fat", icon: FaHeartPulse },
      ],
    },
    {
      title: "Health",
      icon: FaHeartPulse,
      items: [
        { name: "Vegan", icon: FaLeaf },
        { name: "Vegetarian", icon: FaCarrot },
        { name: "Gluten Free", icon: FaLeaf },
      ],
    },
    {
      title: "Cuisine",
      icon: FaEarthAsia,
      items: [
        { name: "Indian", icon: FaFlag },
        { name: "Chinese", icon: FaFlag },
        { name: "Italian", icon: FaFlag },
        { name: "Mexican", icon: FaPepperHot },
      ],
    },
  ];
const [scrolled, setScrolled] = useState(false);
const handleSearch=()=>{
if(!search.trim()){
 toast.info("Enter a name to search")
 return
} 
  setTimeout(() => {
    navigate(`/search/${search}`);
  }, 0);
  setSearch("")

}
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
const handleItemsClick=(title,type)=>{
  setOpenMenu(false)
  prefetchRecipe({categoryName:title.toLocaleLowerCase(),categoryType:toCamelCase(type),page:1,sort:toCamelCase("Newest")})

}
  return (
<nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? "bg-[#0f172a]/95 backdrop-blur-2xl border-b border-orange-500/20 shadow-lg shadow-black/30"
      : "bg-black/40 backdrop-blur-xl border-b border-white/10"
  }`}
>
      {/* TOP BAR */}
      <div className="flex justify-between items-center px-4 md:pl-16 md:pr-5 py-4">

        {/* LOGO */}
        <div className="flex gap-2 items-center text-lg font-extrabold text-white">
          <FaUtensils className="text-orange-500" />
          RecipeRiot
        </div>

        {/* MENU */}
        <ul className="hidden lg:flex gap-8 items-center font-medium text-white/80 ">

          {menuItems.map((item) => {

            if (item === "Categories") {
              return (
              <li
  className={`relative group cursor-pointer ${
    isCategoryActive ? "text-orange-400" : "text-white/80"
  }`}
>
                  <span className="hover:text-orange-400 transition">
                    {item}
                  </span>

                  {/* MEGA MENU */}
                 <div
  className={`fixed left-0 top-[72px] w-full
    backdrop-blur-xl
    opacity-0 invisible
    group-hover:opacity-100
    group-hover:visible
    transition-all duration-300
    ${
      scrolled
        ? "bg-[#111827]/95 border-t border-orange-500/20"
        : "bg-black/90 border-t border-white/10"
    }`}
>
                    <div className="max-w-7xl mx-auto px-10 py-8">
                      <div className="grid grid-cols-5 gap-10">

                        {categoriesItems.map((category, i) => (
                          <div key={i}>

                            <div className="flex items-center gap-2 mb-3 text-white">
                              <category.icon className="text-orange-400 text-sm" />
                              <h3 className="text-sm font-semibold">
                                {category.title}
                              </h3>
                            </div>

                            <ul className="space-y-2">
                              {category.items.map((sub, j) => (
                                <NavLink
                                  key={j}
                                  onMouseEnter={()=>{handleHover({categoryName:category.title.toLocaleLowerCase(),categoryType:toCamelCase(sub.name),page:1,sort:toCamelCase("Newest")})}}
                                  to={`/category/${category.title}/${sub.name}`}
                                  className={`flex items-center gap-2 text-sm text-white/70 hover:text-orange-400 cursor-pointer transition `}
                                >
                                  <sub.icon className="text-xs text-white/40" />
                                  <span className="hover:translate-x-1 transition">
                                    {sub.name}
                                  </span>
                                </NavLink>
                              ))}
                            </ul>

                          </div>
                        ))}

                      </div>
                    </div>

                  </div>

                </li>
              );
            }

            return (
              <NavLink
                key={item}
              
                to={`/${item.toLocaleLowerCase()}`}
                className={({isActive})=>`cursor-pointer transition ${isActive?"text-orange-400":""}`}
       
              >
                {item}
              </NavLink>
            );
          })}

        </ul>

        <div className="hidden lg:flex  items-center gap-4">
        {/* SEARCH */}
  <div className=" bg-white/10 border border-white/20 backdrop-blur-xl rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-orange-400 transition">
          <input
      
            type="search"
            placeholder="Search recipes..."
            name="search"
            id="search"
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}
              onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }}
            className="bg-transparent outline-none text-sm text-white placeholder-white/50 w-40 focus:w-60 transition-all duration-300"
          />
          <button onClick={handleSearch} className="text-orange-400 text-lg">🔍</button>
        </div>
      {/* profileImage */}
        <NavLink
  to="/profile"
  className={({ isActive }) =>
    `block rounded-full ${isActive ? "ring-2 ring-orange-400" : ""}`
  }
>
  <img
    loading="lazy"
    src={
      Me?.profileImage?.url ||
      "https://res.cloudinary.com/do2twyxai/image/upload/v1776313793/e4jvjyvfwvvo0kyalzie.jpg"
    }
    className="object-cover h-10 w-10 border-2 shadow-2xl hover:scale-105 border-white rounded-full"
    alt="User "
  />
</NavLink>
        </div>
        
      
       

        {/* MOBILE MENU BTN */}
        <div className="lg:hidden" onClick={() => setOpenMenu(!openMenu)}>
          {!openMenu?<GiHamburgerMenu className="text-white text-xl" />: <IoMdClose className="text-white text-xl" />}
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-black/80 backdrop-blur-xl px-4 py-4"
          >
            <ul className="flex flex-col gap-4 text-white/80">

              {mobileMenuItems.map((item) => {
                if (item !== "Categories") {
                  return (
                    <NavLink  onClick={() => setOpenMenu(false)} to={`/${item.toLocaleLowerCase()}`} key={item} className={ ({isActive})=>`${isActive?"text-orange-400":""} cursor-pointer hover:text-orange-500`}>
                      {item}
                    </NavLink>
                  );
                }

                return (
                  <div key="categories">
                    <div
                      onClick={() => setOpenCategory(!openCategory)}
                      className={`flex justify-between cursor-pointer hover:text-orange-400 ${isCategoryActive?"text-orange-500":""}`}
                    >
                      Categories
                      <span>{openCategory ? "-" : "+"}</span>
                    </div>

                    <AnimatePresence>
                      {openCategory && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-y-auto max-h-60 mt-2 pl-2e  "
                        >
                          {categoriesItems.map((cat, i) => (
                            <div key={i} className="mb-3 ">
                              <h4 className="text-sm font-semibold text-white mb-1">
                                {cat.title}
                              </h4>

                              <ul className="pl-3 space-y-1">
                                {cat.items.map((sub, j) => (
                                  <NavLink to={`/category/${cat.title}/${sub.name}`}   onClick={()=>{handleItemsClick(cat.title,sub.name)}} key={j} className="text-sm text-white/70">
                                    {sub.name}
                                  </NavLink>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}