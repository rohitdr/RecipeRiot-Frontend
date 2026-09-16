import api from "../../../Api/ApiInstances";

  export const getTrendingRecipes= async ()=>{
     const response = await api.get(`/recipe/trending`);
     return response.data
  }
  export const getFeaturedRecipes= async ()=>{
     const response = await api.get(`/recipe/featured`)
     return response.data
  }
