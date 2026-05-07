import axios from "axios";
  let edamamUrl =
  "https://api.edamam.com/api/recipes/v2?app_key=c65aab7d6c35e49fe5c880497a11d103&field=label&field=source&field=dietLabels&field=healthLabels&field=cautions&field=ingredientLines&field=ingredients&field=calories&field=totalWeight&imageSize=REGULAR&field=images&field=image&field=totalTime&field=cuisineType&field=mealType&field=dishType&field=totalNutrients&_cont=CHcVQBtNNQphDmgVQntAEX4BY0t3AQsOSmxJCmUQZFJwDQYBUXlSATAUMF10AgVTRjQSBzASZlx7AFADF2NFVmcaY1V1VVcVLnlSVSBMPkd5DANK&cuisineType=Asian&imageSize=REGULAR&type=public&app_id=a7976c62";
let i=0;
async function transferRecipe() {
    
  try {
  
    // Step 1: Get recipe from Edamam
    const edamamResponse = await  axios.get(edamamUrl, {
  headers: {
    "Edamam-Account-User": "rohitdr098"
  }
});;

    const recipeData = edamamResponse.data.hits;

    // console.log("Fetched:", recipeData[0].recipe.images);

    // Step 2: Send to your backend
    recipeData.forEach(async(recipe)=>{
  const myApiResponse = await axios.post(
      "http://localhost:5000/api/recipe/addRecipe",
       recipe.recipe,
      {
    headers: {
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmFjYjk2YmVjZGM4Zjc5YzJiOGI1MCIsImlhdCI6MTc3ODAwMDgxOH0.nOiWizO-ybicAEPvDpsZwNYad4yoXojN3r9ljGZj0n0"
    }
  },
     
    );

    console.log("Saved to your DB:", myApiResponse.data);
    })

    edamamUrl=edamamResponse.data._links.next.href

    transferRecipe()
         
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
}

transferRecipe();