import axios from "axios";

const delay=(ms)=>new Promise(res=>setTimeout(res,ms))
// async function searchPexels(query) {
//   const res = await axios.get(
//     `https://api.unsplash.com/search/photos`,
//     {
//       params:{
//       query,
//       per_page:5
//       },
//       headers: {
//         Authorization: `Client-ID `
//       }
//     }
//   );

//   if (res.data.photos.length > 0) {
//     return res.data.photos[0].src.large;
//   }

//   return null;
// }
async function searchPexels(query) {
  const res = await axios.get(
    `https://api.pexels.com/v1/search?query=${query}&per_page=1`,
    {
      headers: {
        Authorization: "uklUpN7EcnAPh6820XOTNqFeIszUkxDmNZ3D18zAl1chcIAb4VJ2EzAO"
      }
    }
  );

  if (res.data.photos.length > 0) {
    return res.data.photos[0].src.large;
  }

  return null;
}
async function transferRecipe(skip) {
  try {
    const apiResponse = await axios.get(
      `http://localhost:5000/api/auth/imageUpdate?skip=${skip}`
    );

    const recipes = apiResponse.data.recipe;

    for (let recipe of recipes) {
      try {
        const imageResponse = await axios.head(
          recipe?.image?.url,
          {
            timeout: 5000,
            maxRedirects: 5
          }
        );

        const contentType =
          imageResponse.headers["content-type"];

        if (
          imageResponse.status < 400 &&
          contentType?.startsWith("image/")
        ) {
          // console.log(
          //   `${recipe.label} → Valid Image`
          // );
        } else {
          console.log(
            `${recipe.label} → Broken Image`
          );
          // const url=await searchPexels(recipe.label)
          // console.log(url)

        }
      } catch (err) {
        console.log(
          `${recipe.label} → Broken erro Image`
        );
           const url=await searchPexels(recipe.label)
          console.log(url)
          const updateres=await axios.post("http://localhost:5000/api/auth/recipeUpdate",{url,id:recipe._id} )
          console.log(updateres.data.recipe)
          await delay(1000)
 
      }
    }
  } catch (error) {
    console.log(
      error.response?.data || error.message
    );
  }
}
let skip=10450
setInterval(()=>{
  transferRecipe(skip)
  skip=skip+50
}, 900000);

