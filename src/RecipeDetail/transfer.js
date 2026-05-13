import axios from "axios";


async function transferRecipe() {
    
  try {
  const response = await axios.get('http://localhost:5000/api/auth/imageUpdate')
 const recipes=response.data.recipe 
 for(let recipe of recipes){
  const response = axios.head(recipe?.image?.url,{timeout:5000,maxRedirects:5})
  const contentType=(await response).headers["content-type"]
  if(response.status>=200 && response.status < 400 && contentType?.startsWith("image/")){
    return true
  }
  return false
 }
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
}

transferRecipe();