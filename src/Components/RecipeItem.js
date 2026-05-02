import { motion } from "framer-motion";

export default function RecipeItem({recipe,size="normal"}) {
//   const recipe ={
//   recipe: [
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1771996048/recipes/pn2cgwhpkjlyw4log29w.jpg",
//         public_id: "recipes/pn2cgwhpkjlyw4log29w"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 1325.8654999987878,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 0.9296599999969567,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 352.68320999968296,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 316.63829249980324,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 6.687884999985798,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 0,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 360.5512499997405,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 4.7573446874873895,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 32.14124999998985,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 1.805824999982248,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 0.2824204999978292,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 0.23467199999922903,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 5.750244999990169,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 0.8351459999996653,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 0,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 0.2874449999994928,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 1377.3662729165083,
//           unit: "g"
//         },
//         FASAT: {
//           label: "Saturated",
//           quantity: 0.1700594999986204,
//           unit: "g"
//         }
//       },
//       _id: "64069fdb9fef48e38369146f",
//       user: "63facb96becdc8f79c2b8b50",
//       instruction: [
//         "In a mixing bowl, combine the tamarind pulp, chopped dates, and jaggery or brown sugar. Add water and mix everything together.",
//         "In a saucepan, heat the tamarind mixture over medium heat. Stir occasionally until the jaggery or brown sugar has dissolved.",
//         "Add the cumin powder, coriander powder, red chili powder, and salt to the saucepan, and stir everything together.",
//         "Let the mixture simmer over low heat for about 20-25 minutes, or until it thickens and becomes a smooth sauce.",
//         "Once the chutney has thickened, remove it from the heat and let it cool.",
//         "Transfer the chutney to a blender or food processor and blend until it becomes a smooth paste.",
//         "Strain the chutney through a fine-mesh sieve to remove any solids or impurities.",
//         "Transfer the Tamarind-Date Chutney to a serving dish or airtight container and refrigerate until ready to use.",
//         "Serve the chutney with your favorite Indian snacks like samosas, pakoras, or chaat, or use it as a dipping sauce for grilled meats or vegetables. Enjoy!"
//       ],
//       Likes: 1,
//       label: "Tamarind-Date Chutney",
//       source: "The Traveler's Lunchbox",
//       dietLabels: [
//         "High-Fiber",
//         "Low-Fat"
//       ],
//       healthLabels: [
//         "Vegan",
//         "Vegetarian",
//         "Pescatarian",
//         "Dairy-Free",
//         "Gluten-Free",
//         "Wheat-Free",
//         "Egg-Free",
//         "Peanut-Free",
//         "Tree-Nut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Shellfish-Free",
//         "Pork-Free",
//         "Red-Meat-Free",
//         "Crustacean-Free",
//         "Celery-Free",
//         "Mustard-Free",
//         "Sesame-Free",
//         "Lupine-Free",
//         "Mollusk-Free",
//         "Alcohol-Free",
//         "No oil added",
//         "Kosher"
//       ],
//       cautions: [
//         "Sulfites",
//         "FODMAP"
//       ],
//       ingredientLines: [
//         "10 x large dates , pits removed",
//         "3/4 cup jaggery or dark brown sugar",
//         "11/2 cup water",
//         "4 tbsp tamarind concentrate or paste",
//         "1/4 tsp hot chili powder",
//         "1/2 tsp ground ginger",
//         "1 tsp ground garam masala",
//         "pinch black salt (optional, available at Indian stores)",
//         "3/4 tsp salt, or to taste"
//       ],
//       ingredients: [
//         {
//           text: "10 x large dates , pits removed",
//           weight: 300,
//           image: "RecipeImages/Tamarind-Date Chutney1.jpg",
//           _id: "64069fdb9fef48e383691470"
//         },
//         {
//           text: "3/4 cup jaggery or dark brown sugar",
//           weight: 108.75,
//           image: "RecipeImages/Tamarind-Date Chutney2.jpg",
//           _id: "64069fdb9fef48e383691471"
//         },
//         {
//           text: "11/2 cup water",
//           weight: 1303.5,
//           image: "RecipeImages/water.jpg",
//           _id: "64069fdb9fef48e383691472"
//         },
//         {
//           text: "4 tbsp tamarind concentrate or paste",
//           weight: 29.999999999492793,
//           image: "RecipeImages/Tamarind-Date Chutney3.jpg",
//           _id: "64069fdb9fef48e383691473"
//         },
//         {
//           text: "1/4 tsp hot chili powder",
//           weight: 0.675,
//           image: "RecipeImages/Tamarind-Date Chutney4.jpg",
//           _id: "64069fdb9fef48e383691474"
//         },
//         {
//           text: "1/2 tsp ground ginger",
//           weight: 0.9,
//           image: "RecipeImages/Tamarind-Date Chutney5.jpg",
//           _id: "64069fdb9fef48e383691475"
//         },
//         {
//           text: "1 tsp ground garam masala",
//           weight: 1.9,
//           image: "RecipeImages/Tamarind-Date Chutney6.jpg",
//           _id: "64069fdb9fef48e383691476"
//         },
//         {
//           text: "pinch black salt (optional, available at Indian stores)",
//           weight: 0.380208333815447,
//           image: "RecipeImages/salt.jpg",
//           _id: "64069fdb9fef48e383691477"
//         },
//         {
//           text: "3/4 tsp salt, or to taste",
//           weight: 4.5,
//           image: "RecipeImages/salt.jpg",
//           _id: "64069fdb9fef48e383691478"
//         }
//       ],
//       calories: 1325.8654999987878,
//       totalWeight: 1750.6052083333084,
//       totalTime: 0,
//       cuisineType: [
//         "indian"
//       ],
//       mealType: [
//         "lunch/dinner"
//       ],
//       dishType: [
//         "starter"
//       ],
//       date: "2023-03-07T02:22:19.053Z",
//       Comments: [
//         {
//           user: "63facb96becdc8f79c2b8b50",
//           comment: "Liked this recipe",
//           rating: 4,
//           username: "Rohitdr85",
//           Profileimage: "data:image/jpeg;base64,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",
//           _id: "6427e38a0f3fbb7371c9c03c",
//           date: "2023-04-01T07:55:54.589Z"
//         }
//       ],
//       __v: 0
//     },
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1771996046/recipes/k32gtlizswx6j3sdelhq.jpg",
//         public_id: "recipes/k32gtlizswx6j3sdelhq"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 1933.6831348964693,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 92.03487801029004,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 215.12354814039878,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 13.739463570932806,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 80.02452640651147,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 91.58999999999999,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 282.13384958685816,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 25.542191255889353,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 371.958180635783,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 39.08923625759793,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 2.746243896444269,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 0.7453338527901134,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 9.282707836485285,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 1.99079779870969,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 0.0731821092918811,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 0.6435651718629865,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 4.282212310593408,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 1512.4829582176133,
//           unit: "g"
//         },
//         FASAT: {
//           label: "Saturated",
//           quantity: 68.71880283549943,
//           unit: "g"
//         }
//       },
//       _id: "640b3f7e99ccc9ff5d1760f1",
//       user: "63facb96becdc8f79c2b8b50",
//       instruction: [
//         "In a large pot, melt the butter over medium heat. Add the curry powder and cook for 1-2 minutes until fragrant.",
//         "Add the chopped onion and garlic to the pot and sauté for 5-7 minutes until the onion is translucent.",
//         "Add the green lentils to the pot and stir to coat them with the curry butter. Add the chicken or vegetable broth and bring to a boil.",
//         "Reduce the heat to low, cover the pot, and simmer for 25-30 minutes until the lentils are tender.",
//         "Use an immersion blender or transfer the soup to a blender and puree until smooth. If the soup is too thick, add more broth or water to thin it out to your desired consistency.",
//         "Season the soup with salt and pepper to taste.",
//         "In a small saucepan, melt the remaining butter over medium heat until it starts to brown and smell nutty. Remove from heat.",
//         "Ladle the soup into bowls and drizzle with the curried brown butter.",
//         "Garnish with chopped fresh cilantro and serve hot."
//       ],
//       Likes: 0,
//       label: "Green Lentil Soup With Curried Brown Butter",
//       source: "101 Cookbooks",
//       dietLabels: [
//         "Balanced",
//         "High-Fiber"
//       ],
//       healthLabels: [
//         "Sugar-Conscious",
//         "Vegetarian",
//         "Pescatarian",
//         "Gluten-Free",
//         "Wheat-Free",
//         "Egg-Free",
//         "Peanut-Free",
//         "Tree-Nut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Shellfish-Free",
//         "Pork-Free",
//         "Red-Meat-Free",
//         "Crustacean-Free",
//         "Celery-Free",
//         "Mustard-Free",
//         "Sesame-Free",
//         "Lupine-Free",
//         "Mollusk-Free",
//         "Alcohol-Free",
//         "Sulfite-Free",
//         "Kosher"
//       ],
//       cautions: [
//         "Tree-Nuts",
//         "Sulfites"
//       ],
//       ingredientLines: [
//         "2 tablespoons unsalted butter, ghee, or extra-virgin coconut oil",
//         "1 large yellow onion, chopped",
//         "3 cloves garlic, chopped",
//         "1/2 teaspoon red pepper flakes",
//         "5 1/2 cups/1.3 liters vegetable broth or water",
//         "1 1/2 cups/10.5 oz/300 g green lentils or green split peas, picked over and rinsed",
//         "3 tablespoons unsalted butter",
//         "1 tablespoon Indian curry powder",
//         "1/2 cup/125 ml coconut milk",
//         "Fine-grain sea salt",
//         "1 bunch fresh chives, minced"
//       ],
//       ingredients: [
//         {
//           text: "2 tablespoons unsalted butter, ghee, or extra-virgin coconut oil",
//           weight: 27.2,
//           image: "RecipeImages/Green Lentil Soup With Curried Brown Butter1.jpg",
//           _id: "640b3f7e99ccc9ff5d1760f2"
//         },
//         {
//           text: "1 large yellow onion, chopped",
//           weight: 150,
//           image: "RecipeImages/onion.jpg",
//           _id: "640b3f7e99ccc9ff5d1760f3"
//         },
//         {
//           text: "3 cloves garlic, chopped",
//           weight: 9,
//           image: "RecipeImages/garlic.jpg",
//           _id: "640b3f7e99ccc9ff5d1760f4"
//         },
//         {
//           text: "1/2 teaspoon red pepper flakes",
//           weight: 0.38541666668621544,
//           image: "RecipeImages/Green Lentil Soup With Curried Brown Butter2.jpg",
//           _id: "640b3f7e99ccc9ff5d1760f5"
//         },
//         {
//           text: "5 1/2 cups/1.3 liters vegetable broth or water",
//           weight: 1247.3147166630008,
//           image: "RecipeImages/Green Lentil Soup With Curried Brown Butter3.jpg",
//           _id: "640b3f7e99ccc9ff5d1760f6"
//         },
//         {
//           text: "1 1/2 cups/10.5 oz/300 g green lentils or green split peas, picked over and rinsed",
//           weight: 297.6699928125,
//           image: "RecipeImages/Green Lentil Soup With Curried Brown Butter4.jpg",
//           _id: "640b3f7e99ccc9ff5d1760f7"
//         },
//         {
//           text: "3 tablespoons unsalted butter",
//           weight: 42.599999999999994,
//           image: "RecipeImages/butter.jpg",
//           _id: "640b3f7e99ccc9ff5d1760f8"
//         },
//         {
//           text: "1 tablespoon Indian curry powder",
//           weight: 6.3,
//           image: "RecipeImages/Green Lentil Soup With Curried Brown Butter5.jpg",
//           _id: "640b3f7e99ccc9ff5d1760f9"
//         },
//         {
//           text: "1/2 cup/125 ml coconut milk",
//           weight: 119.40576766588308,
//           image: "RecipeImages/Green Lentil Soup With Curried Brown Butter6.jpg",
//           _id: "640b3f7e99ccc9ff5d1760fa"
//         },
//         {
//           text: "Fine-grain sea salt",
//           weight: 11.471255362848419,
//           image: "RecipeImages/salt.jpg",
//           _id: "640b3f7e99ccc9ff5d1760fb"
//         },
//         {
//           text: "1 bunch fresh chives, minced",
//           weight: 12,
//           image: "RecipeImages/Green Lentil Soup With Curried Brown Butter7.jpg",
//           _id: "640b3f7e99ccc9ff5d1760fc"
//         }
//       ],
//       calories: 1933.683134896469,
//       totalWeight: 1922.709726462091,
//       totalTime: 0,
//       cuisineType: [
//         "indian"
//       ],
//       mealType: [
//         "lunch/dinner"
//       ],
//       dishType: [
//         "soup"
//       ],
//       date: "2023-03-10T14:32:30.464Z",
//       Comments: [],
//       __v: 0
//     },
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1771996075/recipes/davhx1j7hk8ojdq30zyx.jpg",
//         public_id: "recipes/davhx1j7hk8ojdq30zyx"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 359.39499999918223,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 18.41793333333333,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 45.78523333312208,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 35.16426666645579,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 8.964866666666666,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 6.533333333333332,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 258.90166666666454,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 3.8203166666665607,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 25.906666666666663,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 181.13866666666664,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 0.14506666666666665,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 0.3207883333332931,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 1.7480466666666667,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 0.21950666666666666,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 0.3593333333333333,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 0,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 0.9632666666666666,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 715.3687666666665,
//           unit: "g"
//         },
//         FASAT: {
//           label: "Saturated",
//           quantity: 15.189966666666665,
//           unit: "g"
//         }
//       },
//       _id: "6404e05d2b7b7ceb0e686010",
//       user: "63e0c5fc45655465af205a73",
//       instruction: [
//         "Add the chopped strawberries, coconut milk, plain yogurt, honey, and ground cardamom (if using) to a blender or food processor.",
//         "Blend until the ingredients are well combined and the mixture is smooth.",
//         "Taste and adjust the sweetness as needed.",
//         "If the mixture is too thick, add some ice cubes and blend again until smooth.",
//         "Pour the lassi into glasses and garnish with additional strawberries, if desired.",
//         "Serve cold and enjoy your strawberry-coconut lassi!"
//       ],
//       Likes: 1,
//       label: "Strawberry-Coconut Lassi",
//       source: "Lottie + Doof",
//       dietLabels: [],
//       healthLabels: [
//         "Vegetarian",
//         "Pescatarian",
//         "Gluten-Free",
//         "Wheat-Free",
//         "Egg-Free",
//         "Peanut-Free",
//         "Tree-Nut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Shellfish-Free",
//         "Pork-Free",
//         "Red-Meat-Free",
//         "Crustacean-Free",
//         "Celery-Free",
//         "Mustard-Free",
//         "Sesame-Free",
//         "Lupine-Free",
//         "Mollusk-Free",
//         "Alcohol-Free",
//         "No oil added",
//         "Kosher"
//       ],
//       cautions: [
//         "Tree-Nuts",
//         "Sulfites"
//       ],
//       ingredientLines: [
//         "2 cups halved, hulled, strawberries",
//         "1 cup ice cubes",
//         "2/3 cup buttermilk",
//         "1/3 cup coconut milk",
//         "1 tablespoon sugar"
//       ],
//       ingredients: [
//         {
//           text: "2 cups halved, hulled, strawberries",
//           weight: 304,
//           image: "RecipeImages/Strawberry-Coconut Lassi1.jpg",
//           _id: "6404e05d2b7b7ceb0e686011"
//         },
//         {
//           text: "1 cup ice cubes",
//           weight: 237,
//           image: "RecipeImages/Strawberry-Coconut Lassi2.jpg",
//           _id: "6404e05d2b7b7ceb0e686012"
//         },
//         {
//           text: "2/3 cup buttermilk",
//           weight: 163.33333333333331,
//           image: "RecipeImages/Strawberry-Coconut Lassi3.jpg",
//           _id: "6404e05d2b7b7ceb0e686013"
//         },
//         {
//           text: "1/3 cup coconut milk",
//           weight: 75.33333333333333,
//           image: "RecipeImages/Strawberry-Coconut Lassi4.jpg",
//           _id: "6404e05d2b7b7ceb0e686014"
//         },
//         {
//           text: "1 tablespoon sugar",
//           weight: 12.4999999997887,
//           image: "RecipeImages/Strawberry-Coconut Lassi5.jpg",
//           _id: "6404e05d2b7b7ceb0e686015"
//         }
//       ],
//       calories: 359.39499999918223,
//       totalWeight: 792.1666666664553,
//       totalTime: 0,
//       cuisineType: [
//         "indian"
//       ],
//       mealType: [
//         "brunch"
//       ],
//       dishType: [
//         "drinks"
//       ],
//       date: "2023-03-05T18:33:01.070Z",
//       Comments: [],
//       __v: 0
//     },
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1771996063/recipes/caxctkluegwkr2v1xykg.jpg",
//         public_id: "recipes/caxctkluegwkr2v1xykg"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 2897.921685080361,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 213.03017903106422,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 238.19564656129444,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 229.74133949401156,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 26.684249436983286,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 716.0288377228763,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 667.1961954721666,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 2.058517008413944,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 2197.751433364893,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 5.534573629590186,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 0.5797228635434203,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 1.0941120946249812,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 0.9589999474816124,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 0.9068443912640665,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 2.067135742820417,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 6.8786175681224115,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 6.44106909170017,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 519.6893103477857,
//           unit: "g"
//         },
//         FASAT: {
//           label: "Saturated",
//           quantity: 123.08119030030318,
//           unit: "g"
//         }
//       },
//       _id: "64069d759fef48e38368ef29",
//       user: "63facb96becdc8f79c2b8b50",
//       instruction: [
//         "In a saucepan, heat the heavy cream, whole milk, and sugar over medium heat. Stir occasionally until the sugar has dissolved.",
//         "In a separate bowl, whisk the egg yolks until they are pale yellow.",
//         "Once the cream mixture has come to a simmer, remove it from the heat and gradually pour it into the bowl with the egg yolks, whisking constantly to prevent curdling.",
//         "Return the mixture to the saucepan and heat it over low heat, stirring constantly, until it thickens enough to coat the back of a spoon. This should take about 10-15 minutes.",
//         "Strain the mixture through a fine-mesh sieve into a clean bowl.",
//         "Add the ground cardamom, saffron threads, and pinch of salt to the bowl, and stir until everything is well combined.",
//         "Cover the bowl with plastic wrap and chill in the refrigerator for at least 4 hours, or overnight.",
//         "Once the mixture is chilled, pour it into an ice cream maker and churn according to the manufacturer's instructions until it reaches a soft-serve consistency.",
//         "Transfer the ice cream to a freezer-safe container, cover it with plastic wrap, and freeze until it reaches your desired firmness.",
//         "Scoop the Cardamom and Saffron Ice Cream into bowls or cones, and enjoy!"
//       ],
//       Likes: 0,
//       label: "Cardamom And Saffron Ice Cream",
//       source: "Tartelette",
//       dietLabels: [
//         "Low-Sodium"
//       ],
//       healthLabels: [
//         "Low Potassium",
//         "Kidney-Friendly",
//         "Vegetarian",
//         "Pescatarian",
//         "Gluten-Free",
//         "Wheat-Free",
//         "Egg-Free",
//         "Peanut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Shellfish-Free",
//         "Pork-Free",
//         "Red-Meat-Free",
//         "Crustacean-Free",
//         "Celery-Free",
//         "Mustard-Free",
//         "Sesame-Free",
//         "Lupine-Free",
//         "Mollusk-Free",
//         "Alcohol-Free",
//         "No oil added",
//         "Kosher"
//       ],
//       cautions: [],
//       ingredientLines: [
//         "2 cups (500ml) heavy cream",
//         "1 cup (250ml) whole milk",
//         "1 cup (200gr) granulated sugar",
//         "4-5 green cardamom pods",
//         "pinch of saffron",
//         "1/3 cup (40gr) raw pistachios"
//       ],
//       ingredients: [
//         {
//           text: "2 cups (500ml) heavy cream",
//           weight: 503.82893825746066,
//           image: "RecipeImages/Cardamom And Saffron Ice Cream1.jpg",
//           _id: "64069d759fef48e38368ef2a"
//         },
//         {
//           text: "1 cup (250ml) whole milk",
//           weight: 257.83192310155283,
//           image: "RecipeImages/Cardamom And Saffron Ice Cream2.jpg",
//           _id: "64069d759fef48e38368ef2b"
//         },
//         {
//           text: "1 cup (200gr) granulated sugar",
//           weight: 200,
//           image: "RecipeImages/sugar.jpg",
//           _id: "64069d759fef48e38368ef2c"
//         },
//         {
//           text: "4-5 green cardamom pods",
//           weight: 1.125,
//           image: "RecipeImages/Cardamom And Saffron Ice Cream3.jpg",
//           _id: "64069d759fef48e38368ef2d"
//         },
//         {
//           text: "pinch of saffron",
//           weight: 0.043750000056215814,
//           image: "RecipeImages/Cardamom And Saffron Ice Cream4.jpg",
//           _id: "64069d759fef48e38368ef2e"
//         },
//         {
//           text: "1/3 cup (40gr) raw pistachios",
//           weight: 40,
//           image: "RecipeImages/Cardamom And Saffron Ice Cream5.jpg",
//           _id: "64069d759fef48e38368ef2f"
//         }
//       ],
//       calories: 2897.921685080361,
//       totalWeight: 1002.8296113590698,
//       totalTime: 0,
//       cuisineType: [
//         "indian"
//       ],
//       mealType: [
//         "lunch/dinner"
//       ],
//       dishType: [
//         "desserts"
//       ],
//       date: "2023-03-07T02:12:05.635Z",
//       Comments: [],
//       __v: 0
//     },
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1771996104/recipes/ylap8wzz5f7ll3efrfrj.jpg",
//         public_id: "recipes/ylap8wzz5f7ll3efrfrj"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 1474.2054240866,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 23.906384002712503,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 274.9978966147375,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 17.779551029412502,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 41.6334961882875,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 0,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 356.00136458562815,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 20.465858593134374,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 1316.489092236175,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 85.11295253632501,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 2.0675491499999996,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 0.4113104905999999,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 12.852193797325,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 1.1241325036874998,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 412.55000000000007,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 0.00017337124999999997,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 0.001038525,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 4.664710499675,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 915.5733150983881,
//           unit: "g"
//         },
//         FASAT: {
//           label: "Saturated",
//           quantity: 13.5572608594,
//           unit: "g"
//         }
//       },
//       _id: "640629ed32054841c51b5102",
//       user: "63e0c5fc45655465af205a73",
//       instruction: [
//         "Rinse the basmati rice with cold water until the water runs clear. Then, add it to a pot with 2 cups of water and bring to a boil. Reduce heat to low, cover the pot, and let the rice cook for about 18-20 minutes, or until all the water is absorbed and the rice is fluffy.",
//         "While the rice is cooking, heat the olive oil in a separate large pan over medium heat. Add the onion and garlic and sauté until the onion is translucent.",
//         "Add the diced butternut squash to the pan and cook for about 5-7 minutes or until the squash is tender.",
//         "Add the can of coconut milk to the pan and bring to a boil. Reduce the heat and let the mixture simmer for about 5-7 minutes or until the sauce thickens.",
//         "Once the rice is cooked, add it to the pan with the butternut squash and coconut milk sauce. Mix well until the rice is coated with the sauce. Season with salt and pepper to taste.",
//         "Serve the butternut squash and coconut milk rice warm and enjoy!"
//       ],
//       Likes: 0,
//       label: "Butternut Squash And Coconut Milk Rice",
//       source: "Tartelette",
//       dietLabels: [
//         "High-Fiber",
//         "Low-Fat"
//       ],
//       healthLabels: [
//         "Sugar-Conscious",
//         "Vegan",
//         "Vegetarian",
//         "Pescatarian",
//         "Mediterranean",
//         "Dairy-Free",
//         "Gluten-Free",
//         "Wheat-Free",
//         "Egg-Free",
//         "Peanut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Shellfish-Free",
//         "Pork-Free",
//         "Red-Meat-Free",
//         "Crustacean-Free",
//         "Celery-Free",
//         "Mustard-Free",
//         "Sesame-Free",
//         "Lupine-Free",
//         "Mollusk-Free",
//         "Alcohol-Free",
//         "Sulfite-Free",
//         "Kosher"
//       ],
//       cautions: [
//         "Sulfites"
//       ],
//       ingredientLines: [
//         "1 1/4 cups vegetable broth or water",
//         "1 cup light coconut milk",
//         "1 cup short grained or basmati rice",
//         "1 teaspoon olive oil",
//         "1 cup finely chopped onion",
//         "2 stalks lemongrass, finely chopped",
//         "1 3/4 cups cubed peeled butternut squash",
//         "1 teaspoon chopped fresh (or 1/4 teaspoon dried) thyme",
//         "salt & pepper",
//         "1 1/2 cups cooked black beans (if using canned, drain & rinse them first)",
//         "zest and juice of one lime"
//       ],
//       ingredients: [
//         {
//           text: "1 1/4 cups vegetable broth or water",
//           weight: 283.75,
//           image: "RecipeImages/Butternut Squash And Coconut Milk Rice1.jpg",
//           _id: "640629ed32054841c51b5103"
//         },
//         {
//           text: "1 cup light coconut milk",
//           weight: 226.8,
//           image: "RecipeImages/Butternut Squash And Coconut Milk Rice2.jpg",
//           _id: "640629ed32054841c51b5104"
//         },
//         {
//           text: "1 cup short grained or basmati rice",
//           weight: 185,
//           image: "RecipeImages/Butternut Squash And Coconut Milk Rice3.jpg",
//           _id: "640629ed32054841c51b5105"
//         },
//         {
//           text: "1 teaspoon olive oil",
//           weight: 4.5,
//           image: "RecipeImages/Butternut Squash And Coconut Milk Rice4.jpg",
//           _id: "640629ed32054841c51b5106"
//         },
//         {
//           text: "1 cup finely chopped onion",
//           weight: 160,
//           image: "RecipeImages/Butternut Squash And Coconut Milk Rice5.jpg",
//           _id: "640629ed32054841c51b5107"
//         },
//         {
//           text: "2 stalks lemongrass, finely chopped",
//           weight: 40,
//           image: "RecipeImages/Butternut Squash And Coconut Milk Rice6.jpg",
//           _id: "640629ed32054841c51b5108"
//         },
//         {
//           text: "1 3/4 cups cubed peeled butternut squash",
//           weight: 245,
//           image: "RecipeImages/Butternut Squash And Coconut Milk Rice7.jpg",
//           _id: "640629ed32054841c51b5109"
//         },
//         {
//           text: "1 teaspoon chopped fresh (or 1/4 teaspoon dried) thyme",
//           weight: 1,
//           image: "RecipeImages/Butternut Squash And Coconut Milk Rice8.jpg",
//           _id: "640629ed32054841c51b510a"
//         },
//         {
//           text: "salt & pepper",
//           weight: 8.8263,
//           image: "RecipeImages/salt.jpg",
//           _id: "640629ed32054841c51b510b"
//         },
//         {
//           text: "1 1/2 cups cooked black beans (if using canned, drain & rinse them first)",
//           weight: 258,
//           image: "RecipeImages/Butternut Squash And Coconut Milk Rice9.jpg",
//           _id: "640629ed32054841c51b510c"
//         },
//         {
//           text: "zest and juice of one lime",
//           weight: 67,
//           image: "RecipeImages/Butternut Squash And Coconut Milk Rice10.jpg",
//           _id: "640629ed32054841c51b510d"
//         }
//       ],
//       calories: 1474.2054240866,
//       totalWeight: 1479.5538906316276,
//       totalTime: 0,
//       cuisineType: [
//         "indian"
//       ],
//       mealType: [
//         "lunch/dinner"
//       ],
//       dishType: [
//         "main course"
//       ],
//       date: "2023-03-06T17:59:09.511Z",
//       Comments: [],
//       __v: 0
//     },
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1771996065/recipes/gducnfhprxb24agn9wsp.jpg",
//         public_id: "recipes/gducnfhprxb24agn9wsp"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 3035.97,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 11.7789,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 664.6783499999999,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 0.9954,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 49.35525,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 0,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 91.58988972805615,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 2.9242859837607718,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 0,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 1.1447100000000001,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 0.17419500000000002,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 21.48405,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 3.61662,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 0,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 0.91245,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 335.40329908106713,
//           unit: "g"
//         },
//         FASAT: {
//           label: "Saturated",
//           quantity: 3.20187,
//           unit: "g"
//         }
//       },
//       _id: "640b3d8999ccc9ff5d15c80e",
//       user: "63facb96becdc8f79c2b8b50",
//       instruction: [
//         "In a large mixing bowl, combine the rice flour, whole wheat flour, and salt.",
//         "Gradually add the hot water to the flour mixture, stirring continuously to form a smooth dough. You may need to add more or less water depending on the flour and humidity levels.",
//         "Knead the dough for 5-7 minutes until it is smooth and pliable. Divide the dough into 6-8 equal portions and roll each portion into a ball.",
//         "Dust your work surface with some rice flour and flatten each ball into a disc using your palms. You can also use a rolling pin to flatten the dough, but make sure to dust it with rice flour to prevent sticking.",
//         "Heat a griddle or tawa over medium-high heat. Place a flattened disc of dough on the hot griddle and cook for 30-40 seconds, or until the surface is slightly dry.",
//         "Flip the bhakri and cook the other side for 30-40 seconds until it is slightly browned.",
//         "Brush the cooked bhakri with some ghee or oil and continue cooking both sides until golden brown and crispy.",
//         "Serve the hot bhakri with your favorite vegetable curry, dal, or chutney."
//       ],
//       Likes: 0,
//       label: "Bhakri (Indian Unleavened Rice Bread) Recipe",
//       source: "Serious Eats",
//       dietLabels: [
//         "Low-Fat"
//       ],
//       healthLabels: [
//         "Sugar-Conscious",
//         "Vegan",
//         "Vegetarian",
//         "Pescatarian",
//         "Mediterranean",
//         "Dairy-Free",
//         "Gluten-Free",
//         "Wheat-Free",
//         "Egg-Free",
//         "Peanut-Free",
//         "Tree-Nut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Shellfish-Free",
//         "Pork-Free",
//         "Red-Meat-Free",
//         "Crustacean-Free",
//         "Celery-Free",
//         "Mustard-Free",
//         "Sesame-Free",
//         "Lupine-Free",
//         "Mollusk-Free",
//         "Alcohol-Free",
//         "No oil added",
//         "Sulfite-Free",
//         "FODMAP-Free",
//         "Kosher"
//       ],
//       cautions: [],
//       ingredientLines: [
//         "21/4 cups rice flour (divided)",
//         "1 cup water",
//         "Kosher salt"
//       ],
//       ingredients: [
//         {
//           text: "21/4 cups rice flour (divided)",
//           weight: 829.5,
//           image: "RecipeImages/Bhakri (Indian Unleavened Rice Bread) Recipe1.jpg",
//           _id: "640b3d8999ccc9ff5d15c80f"
//         },
//         {
//           text: "1 cup water",
//           weight: 237,
//           image: "RecipeImages/water.jpg",
//           _id: "640b3d8999ccc9ff5d15c810"
//         },
//         {
//           text: "Kosher salt",
//           weight: 6.399,
//           image: "RecipeImages/salt.jpg",
//           _id: "640b3d8999ccc9ff5d15c811"
//         }
//       ],
//       calories: 3035.97,
//       totalWeight: 1072.8745405335674,
//       totalTime: 20,
//       cuisineType: [
//         "american",
//         "indian"
//       ],
//       mealType: [
//         "brunch"
//       ],
//       dishType: [
//         "main course"
//       ],
//       date: "2023-03-10T14:24:09.057Z",
//       Comments: [],
//       __v: 0
//     },
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1771996090/recipes/jkvxs8fcw4839jfoh5wt.jpg",
//         public_id: "recipes/jkvxs8fcw4839jfoh5wt"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 1582.1145000000001,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 2.5186699999999997,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 412.7077025000001,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 322.452055,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 9.198462499999998,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 0,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 515.689,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 5.837267499999999,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 59.452,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 70.92845000000001,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 0.4474155,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 2.4848729999999994,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 2.7803709999999997,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 0.86105175,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 0,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 4.485465,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 1190.6955075,
//           unit: "g"
//         },
//         FASAT: {
//           label: "Saturated",
//           quantity: 0.42536300000000005,
//           unit: "g"
//         }
//       },
//       _id: "640b392399ccc9ff5d13fc3d",
//       user: "63facb96becdc8f79c2b8b50",
//       instruction: [
//         "In a large saucepan, combine the cranberries, sugar, water, apple cider vinegar, chopped onion, minced garlic, ground cinnamon, ground ginger, ground cloves, ground allspice, salt, and black pepper.",
//         "Stir to combine all the ingredients.",
//         "Cook the mixture over medium heat, stirring occasionally, until the cranberries burst and the mixture thickens, about 15-20 minutes.",
//         "Stir in the chopped dried apricots and chopped pecans.",
//         "Cook for another 5-10 minutes, until the apricots are soft and the pecans are toasted.",
//         "Remove the cranberry chutney from the heat and let it cool to room temperature.",
//         "Transfer the chutney to a clean jar or container with a lid.",
//         "Refrigerate the cranberry chutney for at least 2 hours, or overnight, to let the flavors meld together.",
//         "Serve the cranberry chutney chilled or at room temperature as a condiment for roasted meats, sandwiches, or cheese plates."
//       ],
//       Likes: 0,
//       label: "Cranberry Chutney",
//       source: "Seven Spoons",
//       dietLabels: [
//         "High-Fiber",
//         "Low-Fat",
//         "Low-Sodium"
//       ],
//       healthLabels: [
//         "Vegan",
//         "Vegetarian",
//         "Pescatarian",
//         "Dairy-Free",
//         "Gluten-Free",
//         "Wheat-Free",
//         "Egg-Free",
//         "Peanut-Free",
//         "Tree-Nut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Shellfish-Free",
//         "Pork-Free",
//         "Red-Meat-Free",
//         "Crustacean-Free",
//         "Mustard-Free",
//         "Sesame-Free",
//         "Lupine-Free",
//         "Mollusk-Free",
//         "Alcohol-Free",
//         "No oil added",
//         "Kosher"
//       ],
//       cautions: [
//         "Sulfites"
//       ],
//       ingredientLines: [
//         "2 cup fresh cranberries",
//         "1 cup raisins",
//         "1/2 cup sucanat",
//         "1/2 cup maple syrup",
//         "1 tbsp ground cinnamon",
//         "2 tsp grated fresh ginger",
//         "1/4 tsp ground cloves",
//         "1 cup water",
//         "1 small onion, chopped",
//         "3 medium apples, cored and chopped",
//         "4 stalks celery, chopped",
//         "1 tsp grated lemon peel"
//       ],
//       ingredients: [
//         {
//           text: "2 cup fresh cranberries",
//           weight: 220,
//           image: "RecipeImages/Cranberry Chutney1.jpg",
//           _id: "640b392399ccc9ff5d13fc3e"
//         },
//         {
//           text: "1 cup raisins",
//           weight: 145,
//           image: "RecipeImages/Cranberry Chutney2.jpg",
//           _id: "640b392399ccc9ff5d13fc3f"
//         },
//         {
//           text: "1/2 cup sucanat",
//           weight: 72.5,
//           image: "RecipeImages/Cranberry Chutney3.jpg",
//           _id: "640b392399ccc9ff5d13fc40"
//         },
//         {
//           text: "1/2 cup maple syrup",
//           weight: 157.5,
//           image: "RecipeImages/Cranberry Chutney4.jpg",
//           _id: "640b392399ccc9ff5d13fc41"
//         },
//         {
//           text: "1 tbsp ground cinnamon",
//           weight: 7.8,
//           image: "RecipeImages/Cranberry Chutney5.jpg",
//           _id: "640b392399ccc9ff5d13fc42"
//         },
//         {
//           text: "2 tsp grated fresh ginger",
//           weight: 4,
//           image: "RecipeImages/ginger.jpg",
//           _id: "640b392399ccc9ff5d13fc43"
//         },
//         {
//           text: "1/4 tsp ground cloves",
//           weight: 0.525,
//           image: "RecipeImages/Cranberry Chutney6.jpg",
//           _id: "640b392399ccc9ff5d13fc44"
//         },
//         {
//           text: "1 cup water",
//           weight: 237,
//           image: "RecipeImages/water.jpg",
//           _id: "640b392399ccc9ff5d13fc45"
//         },
//         {
//           text: "1 small onion, chopped",
//           weight: 70,
//           image: "RecipeImages/onion.jpg",
//           _id: "640b392399ccc9ff5d13fc46"
//         },
//         {
//           text: "3 medium apples, cored and chopped",
//           weight: 546,
//           image: "RecipeImages/apple.jpg",
//           _id: "640b392399ccc9ff5d13fc47"
//         },
//         {
//           text: "4 stalks celery, chopped",
//           weight: 160,
//           image: "RecipeImages/Cranberry Chutney7.jpg",
//           _id: "640b392399ccc9ff5d13fc48"
//         },
//         {
//           text: "1 tsp grated lemon peel",
//           weight: 2,
//           image: "RecipeImages/Cranberry Chutney8.jpg",
//           _id: "640b392399ccc9ff5d13fc49"
//         }
//       ],
//       calories: 1582.1145000000001,
//       totalWeight: 1622.3249999999998,
//       totalTime: 0,
//       cuisineType: [
//         "indian"
//       ],
//       mealType: [
//         "snack"
//       ],
//       dishType: [
//         "starter"
//       ],
//       date: "2023-03-10T14:05:23.026Z",
//       Comments: [],
//       __v: 0
//     },
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1771996100/recipes/zong3hwcpwvbcod52oxs.jpg",
//         public_id: "recipes/zong3hwcpwvbcod52oxs"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 1522.3205833332522,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 64.61134624999924,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 178.5581698610931,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 9.46383805555383,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 62.111495416664816,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 57.599999999999994,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 188.6523071208418,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 12.708241965966748,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 58.208819444444444,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 15.194822222217153,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 0.30986183333330797,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 0.23023659722218776,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 7.0976091805547945,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 0.7672998888887265,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 3.384,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 0,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 5.440053749999737,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 419.6900051518531,
//           unit: "g"
//         },
//         FASAT: {
//           label: "Saturated",
//           quantity: 42.01681308333313,
//           unit: "g"
//         }
//       },
//       _id: "640b419b99ccc9ff5d19506b",
//       user: "63facb96becdc8f79c2b8b50",
//       instruction: [
//         "Cook the spaghetti according to package instructions until al dente. Drain and set aside.",
//         "In a large skillet, melt the butter and olive oil over medium-high heat. Add the diced onion and minced garlic and sauté for 2-3 minutes until softened.",
//         "Add the curry powder, ginger, cumin, coriander, turmeric, and red pepper flakes to the skillet and cook for 1-2 minutes until fragrant.",
//         "Add the sea scallops to the skillet and cook for 2-3 minutes per side until browned and cooked through. Season with salt and pepper to taste.",
//         "Add the cooked spaghetti to the skillet and toss with the scallops and curry sauce.",
//         "Serve the curry scallop pasta hot, garnished with chopped fresh parsley."
//       ],
//       Likes: 0,
//       label: "Curry Scallop Pasta",
//       source: "No Recipes",
//       dietLabels: [
//         "Balanced",
//         "High-Fiber"
//       ],
//       healthLabels: [
//         "Pescatarian",
//         "Dairy-Free",
//         "Egg-Free",
//         "Peanut-Free",
//         "Tree-Nut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Pork-Free",
//         "Red-Meat-Free",
//         "Crustacean-Free",
//         "Celery-Free",
//         "Mustard-Free",
//         "Sesame-Free",
//         "Lupine-Free",
//         "Alcohol-Free"
//       ],
//       cautions: [
//         "Tree-Nuts"
//       ],
//       ingredientLines: [
//         "200 grams rotini",
//         "240 grams scallops - dry",
//         "1 tablespoon curry powder",
//         "1/8-1/2 teaspoon cayenne pepper (depends on how spicy you want it)",
//         "1/2 teaspoon salt",
//         "1/4 teaspoon black pepper",
//         "1 tablespoon vegetable oil",
//         "10 grams garlic minced (about 3 large cloves)",
//         "10 grams ginger - fresh minced (about 1 tablespoon)",
//         "3/4 cup coconut milk (about 1/2 can)",
//         "1 teaspoon palm sugar (or brown sugar)",
//         "2 scallions chopped",
//         "4 sprigs cilantro chopped"
//       ],
//       ingredients: [
//         {
//           text: "200 grams rotini",
//           weight: 200,
//           image: "RecipeImages/Curry Scallop Pasta1.jpg",
//           _id: "640b419b99ccc9ff5d19506c"
//         },
//         {
//           text: "240 grams scallops - dry",
//           weight: 240,
//           image: "RecipeImages/Curry Scallop Pasta2.jpg",
//           _id: "640b419b99ccc9ff5d19506d"
//         },
//         {
//           text: "1 tablespoon curry powder",
//           weight: 6.3,
//           image: "RecipeImages/Curry Scallop Pasta3.jpg",
//           _id: "640b419b99ccc9ff5d19506e"
//         },
//         {
//           text: "1/8-1/2 teaspoon cayenne pepper (depends on how spicy you want it)",
//           weight: 0.5625,
//           image: "RecipeImages/Curry Scallop Pasta4.jpg",
//           _id: "640b419b99ccc9ff5d19506f"
//         },
//         {
//           text: "1/2 teaspoon salt",
//           weight: 3,
//           image: "RecipeImages/salt.jpg",
//           _id: "640b419b99ccc9ff5d195070"
//         },
//         {
//           text: "1/4 teaspoon black pepper",
//           weight: 0.725,
//           image: "RecipeImages/Curry Scallop Pasta5.jpg",
//           _id: "640b419b99ccc9ff5d195071"
//         },
//         {
//           text: "1 tablespoon vegetable oil",
//           weight: 14,
//           image: "RecipeImages/Curry Scallop Pasta6.jpg",
//           _id: "640b419b99ccc9ff5d195072"
//         },
//         {
//           text: "10 grams garlic minced (about 3 large cloves)",
//           weight: 15,
//           image: "RecipeImages/garlic.jpg",
//           _id: "640b419b99ccc9ff5d195073"
//         },
//         {
//           text: "10 grams ginger - fresh minced (about 1 tablespoon)",
//           weight: 5.99999999989856,
//           image: "RecipeImages/ginger.jpg",
//           _id: "640b419b99ccc9ff5d195074"
//         },
//         {
//           text: "3/4 cup coconut milk (about 1/2 can)",
//           weight: 211.87500000000003,
//           image: "RecipeImages/Curry Scallop Pasta7.jpg",
//           _id: "640b419b99ccc9ff5d195075"
//         },
//         {
//           text: "1 teaspoon palm sugar (or brown sugar)",
//           weight: 3,
//           image: "RecipeImages/sugar.jpg",
//           _id: "640b419b99ccc9ff5d195076"
//         },
//         {
//           text: "2 scallions chopped",
//           weight: 27.777777777777782,
//           image: "RecipeImages/Curry Scallop Pasta8.jpg",
//           _id: "640b419b99ccc9ff5d195077"
//         },
//         {
//           text: "4 sprigs cilantro chopped",
//           weight: 8.88888888888889,
//           image: "RecipeImages/Curry Scallop Pasta9.jpg",
//           _id: "640b419b99ccc9ff5d195078"
//         }
//       ],
//       calories: 1522.3205833332522,
//       totalWeight: 735.9625065219925,
//       totalTime: 0,
//       cuisineType: [
//         "indian"
//       ],
//       mealType: [
//         "lunch/dinner"
//       ],
//       dishType: [
//         "main course"
//       ],
//       date: "2023-03-10T14:41:31.773Z",
//       Comments: [],
//       __v: 0
//     },
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1771996053/recipes/hnnudw8dwqa1vvtc9pye.jpg",
//         public_id: "recipes/hnnudw8dwqa1vvtc9pye"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 312.0655700017296,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 12.531849766674128,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 37.450937600448384,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 11.507712600405775,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 13.06041183333544,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 31.726816666686442,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 273.21920666692586,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 2.089670866667683,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 83.96114000008322,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 0.7560000000324616,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 0.2490618833333676,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 0.2731388066668389,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 3.2781196533336887,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 0.0807964633334621,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 11.6,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 0.2509023666666823,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 0.18981500000013798,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 0.36997053333395247,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 35.566384066892844,
//           unit: "g"
//         },
//         FASAT: {
//           label: "Saturated",
//           quantity: 6.617813946671392,
//           unit: "g"
//         }
//       },
//       _id: "6404de13bdf63a6cc30e64c7",
//       user: "63e0c5fc45655465af205a73",
//       instruction: [
//         "Preheat a sandwich press or a non-stick skillet over medium heat.",
//         "Spread butter on one side of each bread slice.",
//         "Place the bread slices buttered side down on a plate or cutting board.",
//         "Spread 1 tablespoon of chutney on each bread slice.",
//         "Top each slice with a slice of cheddar cheese.",
//         "Cover each sandwich with another slice of bread, buttered side up.",
//         "Place the sandwiches in the sandwich press or skillet.",
//         "Cook for 2-3 minutes until the bread is golden brown and the cheese is melted.",
//         "Flip the sandwiches and cook for another 1-2 minutes until the other side is golden brown.",
//         "Remove the sandwiches from the heat and let them cool for a minute or two before cutting them in half.",
//         "Serve hot and enjoy your chutney and cheddar toasties!"
//       ],
//       Likes: 2,
//       label: "The Secret Ingredient (Mango Chutney): Chutney and Cheddar Toasties Recipe",
//       source: "Serious Eats",
//       dietLabels: [
//         "Balanced"
//       ],
//       healthLabels: [
//         "Low Potassium",
//         "Kidney-Friendly",
//         "Vegetarian",
//         "Pescatarian",
//         "Egg-Free",
//         "Peanut-Free",
//         "Tree-Nut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Shellfish-Free",
//         "Pork-Free",
//         "Red-Meat-Free",
//         "Crustacean-Free",
//         "Celery-Free",
//         "Mustard-Free",
//         "Sesame-Free",
//         "Lupine-Free",
//         "Mollusk-Free",
//         "Alcohol-Free",
//         "Kosher"
//       ],
//       cautions: [
//         "Sulfites"
//       ],
//       ingredientLines: [
//         "Unsalted butter, room temperature",
//         "2 slices white sandwich bread",
//         "2 teaspoons mango chutney",
//         "1/4 cup shredded mature white cheddar cheese"
//       ],
//       ingredients: [
//         {
//           text: "Unsalted butter, room temperature",
//           weight: 1.3543333333425307,
//           image: "RecipeImages/The Secret Ingredient (Mango Chutney) Chutney and Cheddar Toasties Recipe1.jpg",
//           _id: "6404de13bdf63a6cc30e64c8"
//         },
//         {
//           text: "2 slices white sandwich bread",
//           weight: 58,
//           image: "RecipeImages/The Secret Ingredient (Mango Chutney) Chutney and Cheddar Toasties Recipe2.jpg",
//           _id: "6404de13bdf63a6cc30e64c9"
//         },
//         {
//           text: "2 teaspoons mango chutney",
//           weight: 13.333333334009616,
//           image: "RecipeImages/The Secret Ingredient (Mango Chutney) Chutney and Cheddar Toasties Recipe3.jpg",
//           _id: "6404de13bdf63a6cc30e64ca"
//         },
//         {
//           text: "1/4 cup shredded mature white cheddar cheese",
//           weight: 28.25,
//           image: "RecipeImages/The Secret Ingredient (Mango Chutney) Chutney and Cheddar Toasties Recipe4.jpg",
//           _id: "6404de13bdf63a6cc30e64cb"
//         }
//       ],
//       calories: 312.0655700017296,
//       totalWeight: 100.93766666735215,
//       totalTime: 10,
//       cuisineType: [
//         "indian"
//       ],
//       mealType: [
//         "breakfast"
//       ],
//       dishType: [
//         "starter"
//       ],
//       date: "2023-03-05T18:23:15.777Z",
//       Comments: [],
//       __v: 0
//     },
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1771996062/recipes/drlwxgr7d3bz0g5vfhml.jpg",
//         public_id: "recipes/drlwxgr7d3bz0g5vfhml"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 225.952419,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 7.954480940000001,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 3.84784755,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 0.17718815999999998,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 33.904975910000005,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 127.82000000000001,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 40.53303947408763,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 8.742678361518704,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 26.762563,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 10.336100000000002,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 0.7022062520000001,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 0.5281304200000001,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 5.928328167000001,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 1.0539191790000002,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 1.2616,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 0,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 1.59549576,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 125.96697384395075,
//           unit: "g"
//         },
//         FASAT: {
//           label: "Saturated",
//           quantity: 2.302219248,
//           unit: "g"
//         }
//       },
//       _id: "640b43a199ccc9ff5d19f496",
//       user: "63facb96becdc8f79c2b8b50",
//       instruction: [
//         "Preheat the oven to 400°F (200°C).",
//         "In a small bowl, mix together the curry powder, cumin, coriander, paprika, salt, and pepper.",
//         "Score the skin of the duck breasts with a sharp knife, making diagonal cuts about 1/4 inch deep in a cross-hatch pattern.",
//         "Rub the spice mixture all over the duck breasts, making sure to cover both sides evenly.",
//         "Heat the olive oil in an oven-safe skillet over medium-high heat. Add the duck breasts skin-side down and cook for 4-5 minutes until the skin is golden brown and crispy.",
//         "Flip the duck breasts over and transfer the skillet to the preheated oven. Roast for 8-10 minutes until the duck breasts are cooked to your desired doneness.",
//         "Remove the skillet from the oven and let the duck breasts rest for 5 minutes before slicing and serving.",
//         "Serve the duck breasts hot, garnished with fresh herbs, if desired."
//       ],
//       Likes: 0,
//       label: "Dinner Tonight: Duck Breast With Curry Seasoning",
//       source: "Serious Eats",
//       dietLabels: [
//         "High-Protein",
//         "Low-Carb"
//       ],
//       healthLabels: [
//         "Sugar-Conscious",
//         "Keto-Friendly",
//         "Paleo",
//         "Mediterranean",
//         "DASH",
//         "Dairy-Free",
//         "Gluten-Free",
//         "Wheat-Free",
//         "Egg-Free",
//         "Peanut-Free",
//         "Tree-Nut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Shellfish-Free",
//         "Pork-Free",
//         "Crustacean-Free",
//         "Celery-Free",
//         "Mustard-Free",
//         "Sesame-Free",
//         "Lupine-Free",
//         "Mollusk-Free",
//         "Alcohol-Free",
//         "No oil added",
//         "Sulfite-Free",
//         "Kosher"
//       ],
//       cautions: [],
//       ingredientLines: [
//         "1 tablespoon curry powder",
//         "1 duck breast",
//         "Salt and pepper"
//       ],
//       ingredients: [
//         {
//           text: "1 tablespoon curry powder",
//           weight: 6.3,
//           image: "RecipeImages/Dinner Tonight Duck Breast With Curry Seasoning1.jpg",
//           _id: "640b43a199ccc9ff5d19f497"
//         },
//         {
//           text: "1 duck breast",
//           weight: 166,
//           image: "RecipeImages/Dinner Tonight Duck Breast With Curry Seasoning2.jpg",
//           _id: "640b43a199ccc9ff5d19f498"
//         },
//         {
//           text: "Salt and pepper",
//           weight: 1.0338,
//           image: "RecipeImages/salt.jpg",
//           _id: "640b43a199ccc9ff5d19f499"
//         },
//         {
//           text: "Salt and pepper",
//           weight: 0.5169,
//           image: "RecipeImages/salt.jpg",
//           _id: "640b43a199ccc9ff5d19f49a"
//         }
//       ],
//       calories: 225.952419,
//       totalWeight: 173.6009519753651,
//       totalTime: 0,
//       cuisineType: [
//         "indian"
//       ],
//       mealType: [
//         "lunch/dinner"
//       ],
//       dishType: [
//         "main course"
//       ],
//       date: "2023-03-10T14:50:09.057Z",
//       Comments: [],
//       __v: 0
//     },
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1771996376/recipes/sfnlvhkcohiak0ydyyvn.jpg",
//         public_id: "recipes/sfnlvhkcohiak0ydyyvn"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 1286.39,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 3.36695,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 327.61899,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 314.344,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 7.18321,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 0,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 131.27700000000002,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 1.8011000000000001,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 453.78900000000004,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 306.7456,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 0.239965,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 0.36270899999999995,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 5.65186,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 1.01127,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 0,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 7.5600000000000005,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 1648.4049,
//           unit: "g"
//         },
//         FASAT: {
//           label: "Saturated",
//           quantity: 0.7975019999999999,
//           unit: "g"
//         }
//       },
//       _id: "640b71cdf30fd4f027f67a18",
//       user: "63facb96becdc8f79c2b8b50",
//       instruction: [
//         "Wash and peel the mangoes. Cut the mango flesh off the seed and roughly chop it.",
//         "In a blender, puree the mango pieces with 1/2 cup water until smooth.",
//         "Transfer the mango puree to a deep pan and add sugar, cardamom powder, black salt, roasted cumin powder, red chili powder, and remaining water. Mix well.",
//         "Cook the mixture on medium heat for about 10-15 minutes or until it thickens slightly. Stir occasionally.",
//         "Remove the pan from heat and let it cool down.",
//         "Strain the mixture through a sieve into a pitcher to remove any lumps or fibers.",
//         "Add ice cubes to the pitcher and stir well.",
//         "Pour the mango cooler into glasses and garnish with mint leaves.",
//         "Enjoy the refreshing Indian Mango Cooler (Panha)!"
//       ],
//       Likes: 0,
//       label: "Indian Mango Cooler (Panha) Recipe",
//       source: "Serious Eats",
//       dietLabels: [
//         "Low-Fat",
//         "Low-Sodium"
//       ],
//       healthLabels: [
//         "Vegan",
//         "Vegetarian",
//         "Pescatarian",
//         "Dairy-Free",
//         "Gluten-Free",
//         "Wheat-Free",
//         "Egg-Free",
//         "Peanut-Free",
//         "Tree-Nut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Shellfish-Free",
//         "Pork-Free",
//         "Red-Meat-Free",
//         "Crustacean-Free",
//         "Celery-Free",
//         "Mustard-Free",
//         "Sesame-Free",
//         "Lupine-Free",
//         "Mollusk-Free",
//         "Alcohol-Free",
//         "No oil added",
//         "Kosher"
//       ],
//       cautions: [
//         "Sulfites"
//       ],
//       ingredientLines: [
//         "2 large mangoes (about 1 pound total)",
//         "4 cups boiling water",
//         "1 cup sugar",
//         "1 teaspoon saffron threads",
//         "1 teaspoon green cardamom powder"
//       ],
//       ingredients: [
//         {
//           text: "2 large mangoes (about 1 pound total)",
//           weight: 840,
//           image: "RecipeImages/mango.jpg",
//           _id: "640b71cdf30fd4f027f67a19"
//         },
//         {
//           text: "4 cups boiling water",
//           weight: 948,
//           image: "RecipeImages/water.jpg",
//           _id: "640b71cdf30fd4f027f67a1a"
//         },
//         {
//           text: "1 cup sugar",
//           weight: 200,
//           image: "RecipeImages/sugar.jpg",
//           _id: "640b71cdf30fd4f027f67a1b"
//         },
//         {
//           text: "1 teaspoon saffron threads",
//           weight: 0.7,
//           image: "RecipeImages/Indian Mango Cooler (Panha) Recipe1.jpg",
//           _id: "640b71cdf30fd4f027f67a1c"
//         },
//         {
//           text: "1 teaspoon green cardamom powder",
//           weight: 2,
//           image: "RecipeImages/Indian Mango Cooler (Panha) Recipe2.jpg",
//           _id: "640b71cdf30fd4f027f67a1d"
//         }
//       ],
//       calories: 1286.39,
//       totalWeight: 1990.7,
//       totalTime: 40,
//       cuisineType: [
//         "indian"
//       ],
//       mealType: [
//         "lunch/dinner"
//       ],
//       dishType: [
//         "main course"
//       ],
//       date: "2023-03-10T18:07:09.356Z",
//       Comments: [],
//       __v: 0
//     },
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1771996108/recipes/yudcdsg7f8w0q2ocexdk.jpg",
//         public_id: "recipes/yudcdsg7f8w0q2ocexdk"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 657.58988470019,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 55.744251339003405,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 41.23728443904098,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 16.834117512024083,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 9.912081621006207,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 0,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 217.90356605566663,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 6.924409965018596,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 175.99007950077652,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 88.94303164001842,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 0.4242703059000476,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 0.5123858773007066,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 3.636262308305084,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 0.7970908667004751,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 0,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 9.807964967001842,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 465.94519443113455,
//           unit: "g"
//         },
//         FASAT: {
//           label: "Saturated",
//           quantity: 7.754046497500478,
//           unit: "g"
//         }
//       },
//       _id: "63fcf4915442eda1a9acae1c",
//       user: "63e0c5fc45655465af205a73",
//       Likes: 1,
//       label: "Grilled Green Beans With Garlic And Lemon Zest",
//       source: "Ruhlman",
//       dietLabels: [
//         "Low-Carb"
//       ],
//       healthLabels: [
//         "Keto-Friendly",
//         "Vegan",
//         "Vegetarian",
//         "Pescatarian",
//         "Paleo",
//         "Mediterranean",
//         "DASH",
//         "Dairy-Free",
//         "Gluten-Free",
//         "Wheat-Free",
//         "Egg-Free",
//         "Peanut-Free",
//         "Tree-Nut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Shellfish-Free",
//         "Pork-Free",
//         "Red-Meat-Free",
//         "Crustacean-Free",
//         "Celery-Free",
//         "Mustard-Free",
//         "Sesame-Free",
//         "Lupine-Free",
//         "Mollusk-Free",
//         "Alcohol-Free",
//         "Sulfite-Free",
//         "Kosher",
//         "Immuno-Supportive"
//       ],
//       cautions: [
//         "Sulfites"
//       ],
//       ingredientLines: [
//         "1/4 cup olive oil",
//         "2 to 3 cloves of garlic, crushed or minced to a paste",
//         "1 to 2 teaspoons red pepper flakes (optional)",
//         "1 teaspoon cumin seeds, whole or crushed in a mortar and pestle (optional)",
//         "1 pound green beans, stem ends picked (if you don’t have a grill pan, substitute asparagus)",
//         "1 lemon for zesting",
//         "Salt to taste"
//       ],
//       ingredients: [
//         {
//           text: "1/4 cup olive oil",
//           weight: 54,
//           image: "RecipeImages/Grilled Green Beans With Garlic And Lemon Zest1.jpg",
//           _id: "64058ca3a0370aaeec6417a6"
//         },
//         {
//           text: "2 to 3 cloves of garlic, crushed or minced to a paste",
//           weight: 7.5,
//           image: "RecipeImages/Grilled Green Beans With Garlic And Lemon Zest2.jpg",
//           _id: "64058ca3a0370aaeec6417a7"
//         },
//         {
//           text: "1 to 2 teaspoons red pepper flakes (optional)",
//           weight: 1.1562500000586464,
//           image: "RecipeImages/Grilled Green Beans With Garlic And Lemon Zest3.jpg",
//           _id: "64058ca3a0370aaeec6417a8"
//         },
//         {
//           text: "1 teaspoon cumin seeds, whole or crushed in a mortar and pestle (optional)",
//           weight: 2.1,
//           image: "RecipeImages/Grilled Green Beans With Garlic And Lemon Zest4.jpg",
//           _id: "64058ca3a0370aaeec6417a9"
//         },
//         {
//           text: "1 pound green beans, stem ends picked (if you don’t have a grill pan, substitute asparagus)",
//           weight: 453.59237,
//           image: "RecipeImages/Grilled Green Beans With Garlic And Lemon Zest5.jpg",
//           _id: "64058ca3a0370aaeec6417aa"
//         },
//         {
//           text: "1 lemon for zesting",
//           weight: 58,
//           image: "RecipeImages/Grilled Green Beans With Garlic And Lemon Zest5.jpg",
//           _id: "64058ca3a0370aaeec6417ab"
//         },
//         {
//           text: "Salt to taste",
//           weight: 3.458091720000352,
//           image: "RecipeImages/salt.jpg",
//           _id: "64058ca3a0370aaeec6417ac"
//         }
//       ],
//       calories: 657.58988470019,
//       totalWeight: 579.7156060652263,
//       totalTime: 60,
//       cuisineType: [
//         "indian"
//       ],
//       mealType: [
//         "lunch/dinner"
//       ],
//       dishType: [
//         "main course"
//       ],
//       date: "2023-02-27T18:21:05.699Z",
//       __v: 1,
//       instruction: [
//         "Preheat your grill to medium-high heat.",
//         "In a large mixing bowl, combine the green beans, minced garlic, olive oil, lemon zest, salt, and pepper. Toss to coat evenly.",
//         "Place the green beans onto a grilling basket or directly onto the grill grates.",
//         "Grill the green beans for 8-10 minutes, flipping occasionally, until they are tender and slightly charred.",
//         "Remove from the grill and transfer to a serving platter.",
//         "Garnish with extra lemon zest and serve hot."
//       ],
//       Comments: []
//     },
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1771996420/recipes/ldosiho6maxikxedhdxz.jpg",
//         public_id: "recipes/ldosiho6maxikxedhdxz"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 2009.6586101579965,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 5.823123295003248,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 495.8233799060116,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 400.9689798282176,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 22.268284770024344,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 0,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 611.2056579214204,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 12.182708866371765,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 296.05422720034085,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 347.6452755172074,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 0.7823939885019475,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 0.8538736590014606,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 7.801779737514607,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 1.9344481844778567,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 0,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 4.512549260504058,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 1473.8263181914,
//           unit: "g"
//         },
//         FASAT: {
//           label: "Saturated",
//           quantity: 0.7815497613003897,
//           unit: "g"
//         }
//       },
//       _id: "64062d4832054841c51b5905",
//       user: "63e0c5fc45655465af205a73",
//       instruction: [
//         "Combine all the ingredients in a large pot and bring to a boil over high heat.",
//         "Reduce the heat to low and let the mixture simmer for about an hour, stirring occasionally, until the chutney thickens and the fruits are tender.",
//         "Once the chutney is ready, remove it from the heat and let it cool down.",
//         "Transfer the chutney to sterilized jars and store in the fridge for up to a month."
//       ],
//       Likes: 0,
//       label: "Green Tomato-Apple Chutney",
//       source: "David Lebovitz",
//       dietLabels: [
//         "High-Fiber",
//         "Low-Fat",
//         "Low-Sodium"
//       ],
//       healthLabels: [
//         "Vegan",
//         "Vegetarian",
//         "Pescatarian",
//         "Dairy-Free",
//         "Gluten-Free",
//         "Wheat-Free",
//         "Egg-Free",
//         "Peanut-Free",
//         "Tree-Nut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Shellfish-Free",
//         "Pork-Free",
//         "Red-Meat-Free",
//         "Crustacean-Free",
//         "Celery-Free",
//         "Sesame-Free",
//         "Lupine-Free",
//         "Mollusk-Free",
//         "Alcohol-Free",
//         "No oil added",
//         "Kosher"
//       ],
//       cautions: [
//         "Sulfites"
//       ],
//       ingredientLines: [
//         "1 3/4 pound (825g) green tomatoes, cored and cut into chunks",
//         "2 firm apples, cored, and cut into chunks (peeled or unpeeled)",
//         "1 cup (100g) peeled and sliced shallots",
//         "1 to 2 dried chiles, split and seeded, or 1 fresh chile, seeded and finely chopped",
//         "1/3 cup (65g) chopped candied ginger",
//         "1 cup (250ml) apple cider vinegar",
//         "1 cup (160g) golden raisins",
//         "1 cup (180g) light or dark brown sugar",
//         "1 tablespoon yellow or black mustard seeds",
//         "1 teaspoon ground cardamom",
//         "1/2 teaspoon ground allspice",
//         "zest of one orange or 1/4 cup (45g) chopped candied orange peel"
//       ],
//       ingredients: [
//         {
//           text: "1 3/4 pound (825g) green tomatoes, cored and cut into chunks",
//           weight: 793.7866475000001,
//           image: "RecipeImages/Green Tomato-Apple Chutney1.jpg",
//           _id: "64062d9a32054841c51b5920"
//         },
//         {
//           text: "2 firm apples, cored, and cut into chunks (peeled or unpeeled)",
//           weight: 364,
//           image: "RecipeImages/Green Tomato-Apple Chutney2.jpg",
//           _id: "64062d9a32054841c51b5921"
//         },
//         {
//           text: "1 cup (100g) peeled and sliced shallots",
//           weight: 100,
//           image: "RecipeImages/Green Tomato-Apple Chutney3.jpg",
//           _id: "64062d9a32054841c51b5922"
//         },
//         {
//           text: "1 to 2 dried chiles, split and seeded, or 1 fresh chile, seeded and finely chopped",
//           weight: 0.75,
//           image: "RecipeImages/Green Tomato-Apple Chutney4.jpg",
//           _id: "64062d9a32054841c51b5923"
//         },
//         {
//           text: "1/3 cup (65g) chopped candied ginger",
//           weight: 65,
//           image: "RecipeImages/Green Tomato-Apple Chutney5.jpg",
//           _id: "64062d9a32054841c51b5924"
//         },
//         {
//           text: "1 cup (250ml) apple cider vinegar",
//           weight: 252.5484820543899,
//           image: "RecipeImages/Green Tomato-Apple Chutney6.jpg",
//           _id: "64062d9a32054841c51b5925"
//         },
//         {
//           text: "1 cup (160g) golden raisins",
//           weight: 160,
//           image: "RecipeImages/Green Tomato-Apple Chutney7.jpg",
//           _id: "64062d9a32054841c51b5926"
//         },
//         {
//           text: "1 cup (180g) light or dark brown sugar",
//           weight: 180,
//           image: "RecipeImages/Green Tomato-Apple Chutney8.jpg",
//           _id: "64062d9a32054841c51b5927"
//         },
//         {
//           text: "1 tablespoon yellow or black mustard seeds",
//           weight: 6.3,
//           image: "RecipeImages/Green Tomato-Apple Chutney9.jpg",
//           _id: "64062d9a32054841c51b5928"
//         },
//         {
//           text: "1 teaspoon ground cardamom",
//           weight: 2,
//           image: "RecipeImages/Green Tomato-Apple Chutney10.jpg",
//           _id: "64062d9a32054841c51b5929"
//         },
//         {
//           text: "1/2 teaspoon ground allspice",
//           weight: 0.95,
//           image: "RecipeImages/Green Tomato-Apple Chutney11.jpg",
//           _id: "64062d9a32054841c51b592a"
//         },
//         {
//           text: "zest of one orange or 1/4 cup (45g) chopped candied orange peel",
//           weight: 96.00000000162306,
//           image: "RecipeImages/Green Tomato-Apple Chutney12.jpg",
//           _id: "64062d9a32054841c51b592b"
//         }
//       ],
//       calories: 2009.6586101579962,
//       totalWeight: 2021.335129556013,
//       totalTime: 0,
//       cuisineType: [
//         "indian"
//       ],
//       mealType: [
//         "lunch/dinner"
//       ],
//       dishType: [
//         "condiments and sauces"
//       ],
//       date: "2023-03-06T18:13:28.773Z",
//       Comments: [],
//       __v: 0
//     },
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1771996411/recipes/tosrbmnrvnpiuzdihjbm.jpg",
//         public_id: "recipes/tosrbmnrvnpiuzdihjbm"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 187.23599999928382,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 5.962499999998985,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 27.842639999847027,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 26.0079,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 6.130499999975248,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 18.3,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 212.96549999971396,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 0.19559999999105282,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 84.18,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 0,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 0.08441999999998377,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 0.31468199999984986,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 1.0080599999428415,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 0.06674999999994116,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 0.8235,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 2.379,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 0.12810000000000002,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 220.5650099999937,
//           unit: "g"
//         },
//         FASAT: {
//           label: "Saturated",
//           quantity: 3.4188599999996003,
//           unit: "g"
//         }
//       },
//       _id: "6404d6d529811ee0c1a8f925",
//       user: "63e0c5fc45655465af205a73",
//       instruction: [
//         "In a mixing bowl, combine the instant coffee, sugar, and hot water.",
//         "Using a whisk or electric mixer, beat the mixture until it becomes thick and frothy.",
//         "Heat the milk in a saucepan or microwave until hot, but not boiling.",
//         "Pour the hot milk into a cup.",
//         "Spoon the frothy coffee mixture on top of the milk.",
//         "Optionally, sprinkle some cocoa powder or cinnamon on top of the froth.",
//         "Stir the coffee and milk together before drinking."
//       ],
//       Likes: 1,
//       label: "Frothy Indian Coffee",
//       source: "Seven Spoons",
//       dietLabels: [
//         "Balanced",
//         "Low-Sodium"
//       ],
//       healthLabels: [
//         "Kidney-Friendly",
//         "Vegetarian",
//         "Pescatarian",
//         "Gluten-Free",
//         "Wheat-Free",
//         "Egg-Free",
//         "Peanut-Free",
//         "Tree-Nut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Shellfish-Free",
//         "Pork-Free",
//         "Red-Meat-Free",
//         "Crustacean-Free",
//         "Celery-Free",
//         "Mustard-Free",
//         "Sesame-Free",
//         "Lupine-Free",
//         "Mollusk-Free",
//         "Alcohol-Free",
//         "No oil added",
//         "Kosher"
//       ],
//       cautions: [
//         "Sulfites"
//       ],
//       ingredientLines: [
//         "3/4 cup milk",
//         "1/4 cup water, plus around 1/2 teaspoon more",
//         "4 tsp sugar, or to taste",
//         "1 tbsp instant coffee powder"
//       ],
//       ingredients: [
//         {
//           text: "3/4 cup milk",
//           weight: 183,
//           image: "RecipeImages/Frothy Indian Coffee1.jpg",
//           _id: "6404d6d529811ee0c1a8f926"
//         },
//         {
//           text: "1/4 cup water, plus around 1/2 teaspoon more",
//           weight: 59.25,
//           image: "RecipeImages/Frothy Indian Coffee2.jpg",
//           _id: "6404d6d529811ee0c1a8f927"
//         },
//         {
//           text: "4 tsp sugar, or to taste",
//           weight: 16.8,
//           image: "RecipeImages/Frothy Indian Coffee3.jpg",
//           _id: "6404d6d529811ee0c1a8f928"
//         },
//         {
//           text: "1 tbsp instant coffee powder",
//           weight: 2.999999999797116,
//           image: "RecipeImages/Frothy Indian Coffee4.jpg",
//           _id: "6404d6d529811ee0c1a8f929"
//         }
//       ],
//       calories: 187.23599999928382,
//       totalWeight: 262.04999999979714,
//       totalTime: 0,
//       cuisineType: [
//         "indian"
//       ],
//       mealType: [
//         "teatime"
//       ],
//       dishType: [
//         "drinks"
//       ],
//       date: "2023-03-05T17:52:21.951Z",
//       Comments: [
//         {
//           comment: "th",
//           rating: 4,
//           Profileimage: "UserImages/default.jpg",
//           _id: "6404dacf9dad2a1a4baf6d62",
//           date: "2023-03-05T18:09:19.624Z"
//         }
//       ],
//       __v: 0
//     },
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1771996388/recipes/eswhga0d8dnymml3f8zy.jpg",
//         public_id: "recipes/eswhga0d8dnymml3f8zy"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 375.53000000000003,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 2.6938500000000003,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 78.12043,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 57.39028,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 7.43108,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 0,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 299.51766069167655,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 8.158432834510553,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 151.447,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 56.758300000000006,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 0.206246,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 0.276437,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 1.9914490000000002,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 0.208295,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 0,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 3.4779,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 732.870890505764,
//           unit: "g"
//         },
//         FASAT: {
//           label: "Saturated",
//           quantity: 0.29940900000000004,
//           unit: "g"
//         }
//       },
//       _id: "64058f4da0370aaeec649ef5",
//       user: "63e0c5fc45655465af205a73",
//       instruction: [
//         "Bring the vinegar, water, sugar, curry powder, and salt to a boil in a saucepan, stirring until the sugar dissolves.",
//         "Reduce the heat and simmer for 5 minutes.",
//         "Place the ramps in a large sterilized jar or several smaller jars.",
//         "Pour the hot pickling liquid over the ramps, making sure they are fully submerged.",
//         "Let the ramps cool to room temperature.",
//         "Seal the jar(s) tightly and refrigerate for at least 24 hours before using.",
//         "The pickled ramps will keep in the refrigerator for up to 1 month."
//       ],
//       Likes: 0,
//       label: "Curry Pickled Ramps",
//       source: "No Recipes",
//       dietLabels: [
//         "High-Fiber",
//         "Low-Fat"
//       ],
//       healthLabels: [
//         "Vegan",
//         "Vegetarian",
//         "Pescatarian",
//         "Dairy-Free",
//         "Gluten-Free",
//         "Wheat-Free",
//         "Egg-Free",
//         "Peanut-Free",
//         "Tree-Nut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Shellfish-Free",
//         "Pork-Free",
//         "Red-Meat-Free",
//         "Crustacean-Free",
//         "Celery-Free",
//         "Sesame-Free",
//         "Lupine-Free",
//         "Mollusk-Free",
//         "Alcohol-Free",
//         "No oil added",
//         "Kosher"
//       ],
//       cautions: [],
//       ingredientLines: [
//         "1 cup rice vinegar",
//         "1 cup water",
//         "1/4 cup sugar",
//         "2 tablespoons kosher salt (halve if using regular salt)",
//         "1 tablespoon curry powder",
//         "1 teaspoon whole cumin seeds",
//         "1 teaspoon whole black mustard seeds",
//         "1/2 teaspoon turmeric",
//         "300 grams ramp bottoms (white bulbs and stems only)"
//       ],
//       ingredients: [
//         {
//           text: "1 cup rice vinegar",
//           weight: 238,
//           image: "RecipeImages/Curry Pickled Ramps1.jpg",
//           _id: "64058f4da0370aaeec649ef6"
//         },
//         {
//           text: "1 cup water",
//           weight: 237,
//           image: "RecipeImages/water.jpg",
//           _id: "64058f4da0370aaeec649ef7"
//         },
//         {
//           text: "1/4 cup sugar",
//           weight: 50,
//           image: "RecipeImages/sugar.jpg",
//           _id: "64058f4da0370aaeec649ef8"
//         },
//         {
//           text: "2 tablespoons kosher salt (halve if using regular salt)",
//           weight: 29.124999999507587,
//           image: "RecipeImages/salt.jpg",
//           _id: "64058f4da0370aaeec649ef9"
//         },
//         {
//           text: "1 tablespoon curry powder",
//           weight: 6.3,
//           image: "RecipeImages/Curry Pickled Ramps2.jpg",
//           _id: "64058f4da0370aaeec649efa"
//         },
//         {
//           text: "1 teaspoon whole cumin seeds",
//           weight: 2.1,
//           image: "RecipeImages/Curry Pickled Ramps3.jpg",
//           _id: "64058f4da0370aaeec649efb"
//         },
//         {
//           text: "1 teaspoon whole black mustard seeds",
//           weight: 2,
//           image: "RecipeImages/Curry Pickled Ramps4.jpg",
//           _id: "64058f4da0370aaeec649efc"
//         },
//         {
//           text: "1/2 teaspoon turmeric",
//           weight: 1.5,
//           image: "RecipeImages/Curry Pickled Ramps5.jpg",
//           _id: "64058f4da0370aaeec649efd"
//         },
//         {
//           text: "300 grams ramp bottoms (white bulbs and stems only)",
//           weight: 300,
//           image: "RecipeImages/Curry Pickled Ramps6.jpg",
//           _id: "64058f4da0370aaeec649efe"
//         }
//       ],
//       calories: 375.53000000000003,
//       totalWeight: 841.7402528819856,
//       totalTime: 0,
//       cuisineType: [
//         "indian"
//       ],
//       mealType: [
//         "lunch/dinner"
//       ],
//       dishType: [
//         "preserve"
//       ],
//       date: "2023-03-06T06:59:25.129Z",
//       Comments: [
//         {
//           user: "63facb96becdc8f79c2b8b50",
//           comment: "nice",
//           rating: 5,
//           username: "Rohitdr85",
//           Profileimage: "data:image/jpeg;base64,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",
//           _id: "64391cbe1d0baab7499e3de6",
//           date: "2023-04-14T09:28:30.257Z"
//         }
//       ],
//       __v: 0
//     },
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1771996418/recipes/agychua5jujapygn79jq.jpg",
//         public_id: "recipes/agychua5jujapygn79jq"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 2784.627187500174,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 88.7355750000033,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 425.4006400000369,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 308.65271875,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 80.32415375000642,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 195.2,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 2348.737312500062,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 8.65910625000624,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 897.931812500015,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 0.8875375000454224,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 1.7895584375000646,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 3.6913227500001504,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 8.99728843750082,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 1.0245587500005677,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 309.41249999999997,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 8.784,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 25.376000000000005,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 10.179775,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 1740.6026093750065,
//           unit: "g"
//         },
//         FASAT: {
//           label: "Saturated",
//           quantity: 42.66925012500089,
//           unit: "g"
//         }
//       },
//       _id: "6405523e951da4b15a1f3279",
//       user: "63e0c5fc45655465af205a73",
//       instruction: [
//         "Rinse the Basmati rice in cold water and soak it in water for 30 minutes.",
//         "In a large heavy-bottomed pan, heat the milk on medium heat, stirring occasionally to prevent burning. Allow the milk to come to a boil.",
//         "Drain the soaked rice and add it to the boiling milk. Lower the heat to low and let the rice cook in the milk for about 40-45 minutes, stirring occasionally.",
//         "Once the rice is cooked, add the sugar to the milk and stir it in until it dissolves completely.",
//         "Add the chopped almonds and pistachios to the pan, along with the ground cardamom and saffron threads. Mix everything together well.",
//         "Let the mixture simmer on low heat for another 5-7 minutes until the kheer thickens and the nuts are tender.",
//         "Turn off the heat and stir in the rose water. Allow the kheer to cool down to room temperature.",
//         "Chill the kheer in the refrigerator for a few hours or overnight.",
//         "Serve the chilled kheer in bowls, garnished with some chopped nuts and saffron threads."
//       ],
//       Likes: 2,
//       label: "Kashmiri Kheer",
//       source: "The Traveler's Lunchbox",
//       dietLabels: [
//         "Balanced"
//       ],
//       healthLabels: [
//         "Vegetarian",
//         "Pescatarian",
//         "Gluten-Free",
//         "Wheat-Free",
//         "Egg-Free",
//         "Peanut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Shellfish-Free",
//         "Pork-Free",
//         "Red-Meat-Free",
//         "Crustacean-Free",
//         "Celery-Free",
//         "Mustard-Free",
//         "Sesame-Free",
//         "Lupine-Free",
//         "Mollusk-Free",
//         "Alcohol-Free",
//         "No oil added",
//         "Kosher"
//       ],
//       cautions: [
//         "Tree-Nuts",
//         "Sulfites"
//       ],
//       ingredientLines: [
//         "3/4 cup basmati rice",
//         "8 cup whole milk",
//         "1 cup sugar",
//         "1 tsp freshly ground cardamom",
//         "pinch saffron threads, crumbled",
//         "1/4 cup blanched almonds, halved",
//         "a small handful of dry coconut and raisins (optional - I prefer it without)"
//       ],
//       ingredients: [
//         {
//           text: "3/4 cup basmati rice",
//           weight: 138.75,
//           image: "RecipeImages/Kashmiri Kheer1.jpg",
//           _id: "6405523e951da4b15a1f327a"
//         },
//         {
//           text: "8 cup whole milk",
//           weight: 1952,
//           image: "RecipeImages/milk.jpg",
//           _id: "6405523e951da4b15a1f327b"
//         },
//         {
//           text: "1 cup sugar",
//           weight: 200,
//           image: "RecipeImages/sugar.jpg",
//           _id: "6405523e951da4b15a1f327c"
//         },
//         {
//           text: "1 tsp freshly ground cardamom",
//           weight: 2,
//           image: "RecipeImages/Kashmiri Kheer2.jpg",
//           _id: "6405523e951da4b15a1f327d"
//         },
//         {
//           text: "pinch saffron threads, crumbled",
//           weight: 0.043750000056215814,
//           image: "RecipeImages/Kashmiri Kheer3.jpg",
//           _id: "6405523e951da4b15a1f327e"
//         },
//         {
//           text: "1/4 cup blanched almonds, halved",
//           weight: 36.25,
//           image: "RecipeImages/Kashmiri Kheer4.jpg",
//           _id: "6405523e951da4b15a1f327f"
//         },
//         {
//           text: "a small handful of dry coconut and raisins (optional - I prefer it without)",
//           weight: 7.96875,
//           image: "RecipeImages/Kashmiri Kheer5.jpg",
//           _id: "6405523e951da4b15a1f3280"
//         },
//         {
//           text: "a small handful of dry coconut and raisins (optional - I prefer it without)",
//           weight: 13.59375,
//           image: "RecipeImages/Kashmiri Kheer6.jpg",
//           _id: "6405523e951da4b15a1f3281"
//         }
//       ],
//       calories: 2784.627187500174,
//       totalWeight: 2350.606250000056,
//       totalTime: 0,
//       cuisineType: [
//         "indian"
//       ],
//       mealType: [
//         "lunch/dinner"
//       ],
//       dishType: [
//         "desserts"
//       ],
//       date: "2023-03-06T02:38:54.897Z",
//       Comments: [
//         {
//           date: "2023-03-06T02:39:47.171Z",
//           comment: "loved this",
//           rating: 4,
//           Profileimage: "UserImages/default.jpg",
//           _id: "63facb96becdc8f79c2b8b50"
//         },
//         {
//           comment: "loved this so much",
//           rating: 4,
//           Profileimage: "UserImages/default.jpg",
//           _id: "6405527e951da4b15a1f47aa",
//           date: "2023-03-06T02:39:58.364Z"
//         }
//       ],
//       __v: 0
//     },
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1771996387/recipes/fqpclcwtoiljfy32rujy.jpg",
//         public_id: "recipes/fqpclcwtoiljfy32rujy"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 238.7169999995251,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 8.595238333307542,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 33.60345333324876,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 31.466030833317895,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 9.755331666648733,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 31.85,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 313.35741666645305,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 0.3932523437384527,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 154.41733333022546,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 54.86568333321923,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 0.11350116666617681,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 0.40760516666529417,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 1.2018462916536723,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 0.2634814583296744,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 0.9065000000000001,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 0.24500000000000002,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 1.5966866666221171,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 337.60850520832145,
//           unit: "g"
//         },
//         FASAT: {
//           label: "Saturated",
//           quantity: 5.284320833328464,
//           unit: "g"
//         }
//       },
//       _id: "64069c029fef48e38368c637",
//       user: "63facb96becdc8f79c2b8b50",
//       instruction: [
//         "In a blender, combine the chopped mango, plain yogurt, and cold water. Blend until smooth.",
//         "Add the salt, cumin powder, and red chili powder to the blender. Blend again until everything is well combined.",
//         "Taste the mixture and adjust the seasoning as needed. If you like your lassi spicier, you can add more chili powder.",
//         "Add a few ice cubes to the blender and blend until they are crushed and the lassi becomes frothy.",
//         "Pour the lassi into serving glasses and garnish with chopped fresh mint leaves.",
//         "Serve chilled and enjoy your Spicy and Salty Mango Lassi!"
//       ],
//       Likes: 0,
//       label: "Spicy and Salty Mango Lassi Recipe",
//       source: "Serious Eats",
//       dietLabels: [
//         "Balanced"
//       ],
//       healthLabels: [
//         "Vegetarian",
//         "Pescatarian",
//         "Mediterranean",
//         "Gluten-Free",
//         "Wheat-Free",
//         "Egg-Free",
//         "Peanut-Free",
//         "Tree-Nut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Shellfish-Free",
//         "Pork-Free",
//         "Red-Meat-Free",
//         "Crustacean-Free",
//         "Celery-Free",
//         "Mustard-Free",
//         "Sesame-Free",
//         "Lupine-Free",
//         "Mollusk-Free",
//         "Alcohol-Free",
//         "No oil added",
//         "Sulfite-Free",
//         "Kosher",
//         "Immuno-Supportive"
//       ],
//       cautions: [
//         "Sulfites"
//       ],
//       ingredientLines: [
//         "1 cup plain, whole-milk kefir",
//         "Flesh of 2 Ataulfo mangoes (about 1 1/4 cup), cubed",
//         "1/8 teaspoon kosher salt",
//         "2 generous dashes of cayenne pepper, or more to taste"
//       ],
//       ingredients: [
//         {
//           text: "1 cup plain, whole-milk kefir",
//           weight: 245,
//           image: "RecipeImages/Spicy and Salty Mango Lassi Recipe1.jpg",
//           _id: "64069c029fef48e38368c638"
//         },
//         {
//           text: "Flesh of 2 Ataulfo mangoes (about 1 1/4 cup), cubed",
//           weight: 206.25,
//           image: "RecipeImages/Spicy and Salty Mango Lassi Recipe2.jpg",
//           _id: "64069c029fef48e38368c639"
//         },
//         {
//           text: "1/8 teaspoon kosher salt",
//           weight: 0.6067708333641094,
//           image: "RecipeImages/salt.jpg",
//           _id: "64069c029fef48e38368c63a"
//         },
//         {
//           text: "2 generous dashes of cayenne pepper, or more to taste",
//           weight: 0.441666666517322,
//           image: "RecipeImages/Spicy and Salty Mango Lassi Recipe3.jpg",
//           _id: "64069c029fef48e38368c63b"
//         }
//       ],
//       calories: 238.7169999995251,
//       totalWeight: 452.29843749988146,
//       totalTime: 5,
//       cuisineType: [
//         "indian"
//       ],
//       mealType: [
//         "lunch/dinner",
//         "snack"
//       ],
//       dishType: [
//         "drinks"
//       ],
//       date: "2023-03-07T02:05:54.153Z",
//       Comments: [
//         {
//           comment: "this is firsty",
//           rating: 4,
//           Profileimage: "data:image/jpeg;base64,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",
//           _id: "640acf79db97b7fe6249b576",
//           date: "2023-03-10T06:34:33.341Z"
//         }
//       ],
//       __v: 0
//     },
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1771996413/recipes/krxy45p6ua3eezifzmf4.jpg",
//         public_id: "recipes/krxy45p6ua3eezifzmf4"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 2301.668810685,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 97.47654457930001,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 308.19569182017005,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 53.978870744599995,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 78.67355079299999,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 0,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 807.5581493908683,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 23.63659942990011,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 4584.867061876001,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 220.99721165300002,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 2.8802190792999998,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 1.0505614158599998,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 17.5641149516,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 3.1353909521219996,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 0,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 22.86826994192001,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 882.8560302175681,
//           unit: "g"
//         },
//         FASAT: {
//           label: "Saturated",
//           quantity: 12.899475811653002,
//           unit: "g"
//         }
//       },
//       _id: "640b3b8999ccc9ff5d156f1f",
//       user: "63facb96becdc8f79c2b8b50",
//       instruction: [
//         "Preheat the oven to 400°F.",
//         "In a large bowl, toss the diced butternut squash and chickpeas with the olive oil, ground cumin, ground coriander, smoked paprika, salt, and pepper until well coated.",
//         "Spread the butternut squash and chickpea mixture in a single layer on a baking sheet.",
//         "Roast in the preheated oven for 20-25 minutes, or until the butternut squash is tender and lightly browned.",
//         "Remove the baking sheet from the oven and let the roasted butternut squash and chickpeas cool slightly.",
//         "In a large bowl, toss the roasted butternut squash and chickpeas with the baby spinach, crumbled feta cheese, chopped fresh parsley, and lemon juice.",
//         "Serve the warm butternut squash and chickpea salad immediately, garnished with additional chopped parsley, if desired."
//       ],
//       Likes: 0,
//       label: "Warm Butternut Squash And Chickpea Salad",
//       source: "Smitten Kitchen",
//       dietLabels: [
//         "Balanced",
//         "High-Fiber"
//       ],
//       healthLabels: [
//         "Vegan",
//         "Vegetarian",
//         "Pescatarian",
//         "Mediterranean",
//         "Dairy-Free",
//         "Gluten-Free",
//         "Wheat-Free",
//         "Egg-Free",
//         "Peanut-Free",
//         "Tree-Nut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Shellfish-Free",
//         "Pork-Free",
//         "Red-Meat-Free",
//         "Crustacean-Free",
//         "Celery-Free",
//         "Mustard-Free",
//         "Lupine-Free",
//         "Mollusk-Free",
//         "Alcohol-Free",
//         "Sulfite-Free",
//         "Kosher"
//       ],
//       cautions: [
//         "Sulfites"
//       ],
//       ingredientLines: [
//         "1 medium butternut squash (about 2 to 2 1/2 pounds), peeled, seeded, and cut into 1 1/2-inch pieces",
//         "1 medium garlic clove, minced or pressed",
//         "1/2 teaspoons ground allspice (I skip this)",
//         "2 tablespoons olive oil",
//         "Salt",
//         "One 15-ounce can chickpeas, drained and rinsed (1 1/2 cups)",
//         "1/4 of a medium red onion, finely chopped",
//         "1/4 cup coarsely chopped fresh cilantro or parsley",
//         "1 medium garlic clove, finely minced with a pinch of salt",
//         "1/4 cup lemon juice",
//         "3 tablespoons well-stirred tahini",
//         "2 tablespoons water",
//         "2 tablespoons olive oil, plus more to taste"
//       ],
//       ingredients: [
//         {
//           text: "1 medium butternut squash (about 2 to 2 1/2 pounds), peeled, seeded, and cut into 1 1/2-inch pieces",
//           weight: 1020.5828325,
//           image: "RecipeImages/Warm Butternut Squash And Chickpea Salad1.jpg",
//           _id: "640b3b8999ccc9ff5d156f20"
//         },
//         {
//           text: "1 medium garlic clove, minced or pressed",
//           weight: 3,
//           image: "RecipeImages/garlic.jpg",
//           _id: "640b3b8999ccc9ff5d156f21"
//         },
//         {
//           text: "1/2 teaspoons ground allspice (I skip this)",
//           weight: 0.95,
//           image: "RecipeImages/Warm Butternut Squash And Chickpea Salad2.jpg",
//           _id: "640b3b8999ccc9ff5d156f22"
//         },
//         {
//           text: "2 tablespoons olive oil",
//           weight: 27,
//           image: "RecipeImages/Warm Butternut Squash And Chickpea Salad3.jpg",
//           _id: "640b3b8999ccc9ff5d156f23"
//         },
//         {
//           text: "Salt",
//           weight: 9.291638172372,
//           image: "RecipeImages/salt.jpg",
//           _id: "640b3b8999ccc9ff5d156f24"
//         },
//         {
//           text: "One 15-ounce can chickpeas, drained and rinsed (1 1/2 cups)",
//           weight: 300,
//           image: "RecipeImages/Warm Butternut Squash And Chickpea Salad4.jpg",
//           _id: "640b3b8999ccc9ff5d156f25"
//         },
//         {
//           text: "1/4 of a medium red onion, finely chopped",
//           weight: 27.5,
//           image: "hRecipeImages/onion.jpg",
//           _id: "640b3b8999ccc9ff5d156f26"
//         },
//         {
//           text: "1/4 cup coarsely chopped fresh cilantro or parsley",
//           weight: 4,
//           image: "RecipeImages/Warm Butternut Squash And Chickpea Salad5.jpg",
//           _id: "640b3b8999ccc9ff5d156f27"
//         },
//         {
//           text: "1 medium garlic clove, finely minced with a pinch of salt",
//           weight: 3,
//           image: "RecipeImages/garlic.jpg",
//           _id: "640b3b8999ccc9ff5d156f28"
//         },
//         {
//           text: "1/4 cup lemon juice",
//           weight: 61,
//           image: "RecipeImages/Warm Butternut Squash And Chickpea Salad6.jpg",
//           _id: "640b3b8999ccc9ff5d156f29"
//         },
//         {
//           text: "3 tablespoons well-stirred tahini",
//           weight: 45,
//           image: "RecipeImages/Warm Butternut Squash And Chickpea Salad7.jpg",
//           _id: "640b3b8999ccc9ff5d156f2a"
//         },
//         {
//           text: "2 tablespoons water",
//           weight: 29.573529562,
//           image: "RecipeImages/water.jpg",
//           _id: "640b3b8999ccc9ff5d156f2b"
//         },
//         {
//           text: "2 tablespoons olive oil, plus more to taste",
//           weight: 27,
//           image: "RecipeImages/oliveoil.jpg",
//           _id: "640b3b8999ccc9ff5d156f2c"
//         }
//       ],
//       calories: 2301.668810685,
//       totalWeight: 1557.4707180620348,
//       totalTime: 0,
//       cuisineType: [
//         "indian"
//       ],
//       mealType: [
//         "lunch/dinner"
//       ],
//       dishType: [
//         "salad"
//       ],
//       date: "2023-03-10T14:15:37.461Z",
//       Comments: [],
//       __v: 0
//     },
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1771996404/recipes/pakdre8w9g3z99rj9uue.jpg",
//         public_id: "recipes/pakdre8w9g3z99rj9uue"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 657.58988470019,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 55.744251339003405,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 41.23728443904098,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 16.834117512024083,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 9.912081621006207,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 0,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 217.90356605566663,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 6.924409965018596,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 175.99007950077652,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 88.94303164001842,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 0.4242703059000476,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 0.5123858773007066,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 3.636262308305084,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 0.7970908667004751,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 0,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 9.807964967001842,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 465.94519443113455,
//           unit: "g"
//         },
//         FASAT: {
//           label: "Saturated",
//           quantity: 7.754046497500478,
//           unit: "g"
//         }
//       },
//       _id: "640589ad41d329959e0bdb02",
//       user: "63e0c5fc45655465af205a73",
//       instruction: [],
//       Likes: 0,
//       label: "Grilled Green Beans With Garlic And Lemon Zest",
//       source: "Ruhlman",
//       dietLabels: [
//         "Low-Carb"
//       ],
//       healthLabels: [
//         "Keto-Friendly",
//         "Vegan",
//         "Vegetarian",
//         "Pescatarian",
//         "Paleo",
//         "Mediterranean",
//         "DASH",
//         "Dairy-Free",
//         "Gluten-Free",
//         "Wheat-Free",
//         "Egg-Free",
//         "Peanut-Free",
//         "Tree-Nut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Shellfish-Free",
//         "Pork-Free",
//         "Red-Meat-Free",
//         "Crustacean-Free",
//         "Celery-Free",
//         "Mustard-Free",
//         "Sesame-Free",
//         "Lupine-Free",
//         "Mollusk-Free",
//         "Alcohol-Free",
//         "Sulfite-Free",
//         "Kosher",
//         "Immuno-Supportive"
//       ],
//       cautions: [
//         "Sulfites"
//       ],
//       ingredientLines: [
//         "1/4 cup olive oil",
//         "2 to 3 cloves of garlic, crushed or minced to a paste",
//         "1 to 2 teaspoons red pepper flakes (optional)",
//         "1 teaspoon cumin seeds, whole or crushed in a mortar and pestle (optional)",
//         "1 pound green beans, stem ends picked (if you don’t have a grill pan, substitute asparagus)",
//         "1 lemon for zesting",
//         "Salt to taste"
//       ],
//       ingredients: [
//         {
//           text: "1/4 cup olive oil",
//           weight: 54,
//           image: "RecipeImages/Grilled Green Beans With Garlic And Lemon Zest1.jpg",
//           _id: "640589ad41d329959e0bdb03"
//         },
//         {
//           text: "2 to 3 cloves of garlic, crushed or minced to a paste",
//           weight: 7.5,
//           image: "RecipeImages/Grilled Green Beans With Garlic And Lemon Zest2.jpg",
//           _id: "640589ad41d329959e0bdb04"
//         },
//         {
//           text: "1 to 2 teaspoons red pepper flakes (optional)",
//           weight: 1.1562500000586464,
//           image: "RecipeImages/Grilled Green Beans With Garlic And Lemon Zest3.jpg",
//           _id: "640589ad41d329959e0bdb05"
//         },
//         {
//           text: "1 teaspoon cumin seeds, whole or crushed in a mortar and pestle (optional)",
//           weight: 2.1,
//           image: "RecipeImages/Grilled Green Beans With Garlic And Lemon Zest4.jpg",
//           _id: "640589ad41d329959e0bdb06"
//         },
//         {
//           text: "1 pound green beans, stem ends picked (if you don’t have a grill pan, substitute asparagus)",
//           weight: 453.59237,
//           image: "RecipeImages/Grilled Green Beans With Garlic And Lemon Zest5.jpg",
//           _id: "640589ad41d329959e0bdb07"
//         },
//         {
//           text: "1 lemon for zesting",
//           weight: 58,
//           image: "RecipeImages/Grilled Green Beans With Garlic And Lemon Zest5.jpg",
//           _id: "640589ad41d329959e0bdb08"
//         },
//         {
//           text: "Salt to taste",
//           weight: 3.458091720000352,
//           image: "RecipeImages/salt.jpg",
//           _id: "640589ad41d329959e0bdb09"
//         }
//       ],
//       calories: 657.58988470019,
//       totalWeight: 579.7156060652263,
//       totalTime: 0,
//       cuisineType: [
//         "indian"
//       ],
//       mealType: [
//         "lunch/dinner"
//       ],
//       dishType: [
//         "main course"
//       ],
//       date: "2023-03-06T06:35:25.600Z",
//       Comments: [],
//       __v: 0
//     },
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1771996426/recipes/ejhegtszuq48xyciiqmt.jpg",
//         public_id: "recipes/ejhegtszuq48xyciiqmt"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 2336.6029999982507,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 38.57455499999999,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 426.2922699995578,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 39.110989999578244,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 64.42933999999354,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 97.6,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 496.04515978713596,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 26.731464072084044,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 277.5,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 2.8482999999957728,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 4.796847999999916,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 3.195057999999698,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 32.951176999997564,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 0.404197,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 775.8687499999007,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 0.25492,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 2.9459999999999997,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 2.18811,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 336.4928021649001,
//           unit: "g"
//         },
//         FASAT: {
//           label: "Saturated",
//           quantity: 21.307619000000003,
//           unit: "g"
//         }
//       },
//       _id: "640b376f99ccc9ff5d125605",
//       user: "63facb96becdc8f79c2b8b50",
//       instruction: [
//         "In a large mixing bowl, combine the flour, yeast, sugar, salt, curry powder, cumin seeds, coriander seeds, turmeric powder, cayenne pepper, and chopped curry leaves.",
//         "Mix well to combine all the ingredients.",
//         "Add the warm water and vegetable oil to the mixing bowl.",
//         "Stir until the dough comes together.",
//         "Turn the dough out onto a floured surface and knead for 5-10 minutes, until the dough is smooth and elastic.",
//         "Place the dough in a greased bowl and cover with a clean kitchen towel.",
//         "Let the dough rise in a warm place for 1-2 hours, or until it has doubled in size.",
//         "Preheat the oven to 375°F.",
//         "Punch down the risen dough and turn it out onto a floured surface.",
//         "Knead the dough for a few minutes and then shape it into a loaf.",
//         "Place the loaf in a greased loaf pan and cover with a clean kitchen towel.",
//         "Let the dough rise for another 30-40 minutes, until it has risen above the edge of the loaf pan.",
//         "Bake the bread in the preheated oven for 35-40 minutes, or until the crust is golden brown and the bread sounds hollow when tapped.",
//         "Remove the bread from the oven and let it cool in the pan for 5 minutes.",
//         "Turn the bread out onto a wire rack and let it cool completely before slicing."
//       ],
//       Likes: 0,
//       label: "Monica Bhide’s Curry Leaf Bread",
//       source: "Ruhlman",
//       dietLabels: [
//         "Low-Fat"
//       ],
//       healthLabels: [
//         "Low Potassium",
//         "Kidney-Friendly",
//         "Vegetarian",
//         "Pescatarian",
//         "Egg-Free",
//         "Peanut-Free",
//         "Tree-Nut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Shellfish-Free",
//         "Pork-Free",
//         "Red-Meat-Free",
//         "Crustacean-Free",
//         "Celery-Free",
//         "Mustard-Free",
//         "Sesame-Free",
//         "Lupine-Free",
//         "Mollusk-Free",
//         "Alcohol-Free",
//         "Kosher"
//       ],
//       cautions: [
//         "FODMAP"
//       ],
//       ingredientLines: [
//         "4 cups all-purpose flour",
//         "2 tablespoons sugar",
//         "1 envelope active dry yeast (or 2 ¼ teaspoons)",
//         "1-1/2 teaspoons kosher salt",
//         "1 teaspoon turmeric",
//         "1 teaspoon cumin seeds, pounded in a mortar or crushed",
//         "2 tablespoons finely chopped fresh curry leaves",
//         "2 tablespoons unsalted butter",
//         "¾ cup water (more if needed)",
//         "1/2 cup evaporated milk"
//       ],
//       ingredients: [
//         {
//           text: "4 cups all-purpose flour",
//           weight: 500,
//           image: "RecipeImages/Monica Bhide’s Curry Leaf Bread1.jpg",
//           _id: "640b376f99ccc9ff5d125606"
//         },
//         {
//           text: "2 tablespoons sugar",
//           weight: 24.9999999995774,
//           image: "RecipeImages/sugar.jpg",
//           _id: "640b376f99ccc9ff5d125607"
//         },
//         {
//           text: "1 envelope active dry yeast (or 2 ¼ teaspoons)",
//           weight: 7.2,
//           image: "RecipeImages/Monica Bhide’s Curry Leaf Bread2.jpg",
//           _id: "640b376f99ccc9ff5d125608"
//         },
//         {
//           text: "1-1/2 teaspoons kosher salt",
//           weight: 7.2812500003693135,
//           image: "RecipeImages/salt.jpg",
//           _id: "640b376f99ccc9ff5d125609"
//         },
//         {
//           text: "1 teaspoon turmeric",
//           weight: 3,
//           image: "RecipeImages/Monica Bhide’s Curry Leaf Bread3.jpg",
//           _id: "640b376f99ccc9ff5d12560a"
//         },
//         {
//           text: "1 teaspoon cumin seeds, pounded in a mortar or crushed",
//           weight: 2.1,
//           image: "RecipeImages/Monica Bhide’s Curry Leaf Bread4.jpg",
//           _id: "640b376f99ccc9ff5d12560b"
//         },
//         {
//           text: "2 tablespoons finely chopped fresh curry leaves",
//           weight: 6.249999999894331,
//           image: null,
//           _id: "640b376f99ccc9ff5d12560c"
//         },
//         {
//           text: "2 tablespoons unsalted butter",
//           weight: 28.4,
//           image: "RecipeImages/Monica Bhide’s Curry Leaf Bread5.jpg",
//           _id: "640b376f99ccc9ff5d12560d"
//         },
//         {
//           text: "¾ cup water (more if needed)",
//           weight: 177.75,
//           image: "RecipeImages/butter.jpg",
//           _id: "640b376f99ccc9ff5d12560e"
//         },
//         {
//           text: "1/2 cup evaporated milk",
//           weight: 126,
//           image: "RecipeImages/milk.jpg",
//           _id: "640b376f99ccc9ff5d12560f"
//         }
//       ],
//       calories: 2336.6029999982507,
//       totalWeight: 880.5360824495435,
//       totalTime: 0,
//       cuisineType: [
//         "indian"
//       ],
//       mealType: [
//         "lunch/dinner"
//       ],
//       dishType: [
//         "bread"
//       ],
//       date: "2023-03-10T13:58:07.503Z",
//       Comments: [],
//       __v: 0
//     },
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1772271130/recipes/p2wrkvogspgunfwpl6ru.jpg",
//         public_id: "recipes/p2wrkvogspgunfwpl6ru"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 187.23599999928385,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 5.962499999998985,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 27.84599999984703,
//           unit: "g"
//         },
//         FIBTG: {
//           label: "Fiber",
//           quantity: 0,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 26.0079,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 6.130499999975248,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 18.3,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 212.96241177346394,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 0.19559999999105282,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 84.18,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 0,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 0.08441999999998377,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 0.31468199999984986,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 1.0088699999427866,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 0.06674999999994116,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 0.8235000000000001,
//           unit: "µg"
//         },
//         VITK1: {
//           label: "Vitamin K",
//           quantity: 0.6059999999961453,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 2.379,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 0.12810000000000002,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 220.4072720658687,
//           unit: "g"
//         }
//       },
//       _id: "69a2b4fa2a363b527422785c",
//       user: "63facb96becdc8f79c2b8b50",
//       instruction: [],
//       Likes: 0,
//       label: "Frothy Indian Coffee",
//       source: "Seven Spoons",
//       dietLabels: [
//         "Balanced",
//         "Low-Sodium"
//       ],
//       healthLabels: [
//         "Kidney-Friendly",
//         "Vegetarian",
//         "Pescatarian",
//         "Gluten-Free",
//         "Wheat-Free",
//         "Egg-Free",
//         "Peanut-Free",
//         "Tree-Nut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Shellfish-Free",
//         "Pork-Free",
//         "Red-Meat-Free",
//         "Crustacean-Free",
//         "Celery-Free",
//         "Mustard-Free",
//         "Sesame-Free",
//         "Lupine-Free",
//         "Mollusk-Free",
//         "Alcohol-Free",
//         "No oil added",
//         "Kosher"
//       ],
//       cautions: [
//         "Sulfites"
//       ],
//       ingredientLines: [
//         "3/4 cup milk",
//         "1/4 cup water, plus around 1/2 teaspoon more",
//         "4 tsp sugar, or to taste",
//         "1 tbsp instant coffee powder"
//       ],
//       ingredients: [
//         {
//           text: "3/4 cup milk",
//           weight: 183,
//           image: "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg",
//           _id: "69a2b4fa2a363b527422785d"
//         },
//         {
//           text: "1/4 cup water, plus around 1/2 teaspoon more",
//           weight: 59.147059125,
//           image: "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg",
//           _id: "69a2b4fa2a363b527422785e"
//         },
//         {
//           text: "4 tsp sugar, or to taste",
//           weight: 16.8,
//           image: "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg",
//           _id: "69a2b4fa2a363b527422785f"
//         },
//         {
//           text: "1 tbsp instant coffee powder",
//           weight: 2.999999999797116,
//           image: "https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg",
//           _id: "69a2b4fa2a363b5274227860"
//         }
//       ],
//       calories: 187.23599999928382,
//       totalWeight: 261.94705912479714,
//       totalTime: 0,
//       cuisineType: [
//         "indian"
//       ],
//       mealType: [
//         "snack"
//       ],
//       dishType: [
//         "drinks"
//       ],
//       date: "2026-02-28T09:27:22.604Z",
//       Comments: [],
//       __v: 0
//     },
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1772274083/recipes/li1drgp3hbt54hsgszxc.jpg",
//         public_id: "recipes/li1drgp3hbt54hsgszxc"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 2064.492539335434,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 99.54135665989116,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 253.46724181176685,
//           unit: "g"
//         },
//         FIBTG: {
//           label: "Fiber",
//           quantity: 4.042499999990237,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 223.71199181183871,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 53.8108994023419,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 165.04373007500004,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 1176.3455799745266,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 8.945172302646725,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 389.4610595750001,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 10.931726417498522,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 0.876562531898385,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 1.7310622586035063,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 2.156538227414632,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 0.7148035090785886,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 1.7701306245000004,
//           unit: "µg"
//         },
//         VITK1: {
//           label: "Vitamin K",
//           quantity: 45.133859942399106,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 0.7937866475,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 2.0623293179973374,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 118.90518693233666,
//           unit: "g"
//         }
//       },
//       _id: "69a2c15f1a555b111e94148b",
//       user: "63facb96becdc8f79c2b8b50",
//       instruction: [],
//       Likes: 0,
//       label: "Milk Creams (Indian Cashew Sweets) Recipe",
//       source: "Serious Eats",
//       dietLabels: [
//         "Balanced",
//         "Low-Sodium"
//       ],
//       healthLabels: [
//         "Low Potassium",
//         "Kidney-Friendly",
//         "Vegetarian",
//         "Pescatarian",
//         "Gluten-Free",
//         "Wheat-Free",
//         "Egg-Free",
//         "Peanut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Shellfish-Free",
//         "Pork-Free",
//         "Red-Meat-Free",
//         "Crustacean-Free",
//         "Celery-Free",
//         "Mustard-Free",
//         "Sesame-Free",
//         "Lupine-Free",
//         "Mollusk-Free",
//         "Alcohol-Free",
//         "Sulfite-Free",
//         "Kosher"
//       ],
//       cautions: [
//         "Sulfites"
//       ],
//       ingredientLines: [
//         "One 14-ounce (396g) can sweetened condensed milk",
//         "3 1/2 ounces (100g) sifted, finely ground raw cashews (about 3/4 cup plus 2 tablespoons)",
//         "1 tablespoon (14g) unsalted butter or ghee, plus extra for greasing, kneading and shaping the milk creams",
//         "1 teaspoon (5ml) vanilla extract or almond extract"
//       ],
//       ingredients: [
//         {
//           text: "One 14-ounce (396g) can sweetened condensed milk",
//           weight: 396.89332375000004,
//           image: "https://www.edamam.com/food-img/bc9/bc97e9aa15ccef74dbad4d6267e30e3f.jpg",
//           _id: "69a2c15f1a555b111e94148c"
//         },
//         {
//           text: "3 1/2 ounces (100g) sifted, finely ground raw cashews (about 3/4 cup plus 2 tablespoons)",
//           weight: 105,
//           image: "https://www.edamam.com/food-img/d4b/d4bc3f8024cac35e2039ef5ead328e11.jpg",
//           _id: "69a2c15f1a555b111e94148d"
//         },
//         {
//           text: "3 1/2 ounces (100g) sifted, finely ground raw cashews (about 3/4 cup plus 2 tablespoons)",
//           weight: 17.49999999970413,
//           image: "https://www.edamam.com/food-img/d4b/d4bc3f8024cac35e2039ef5ead328e11.jpg",
//           _id: "69a2c15f1a555b111e94148e"
//         },
//         {
//           text: "1 tablespoon (14g) unsalted butter or ghee, plus extra for greasing, kneading and shaping the milk creams",
//           weight: 14,
//           image: "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg",
//           _id: "69a2c15f1a555b111e94148f"
//         },
//         {
//           text: "1 teaspoon (5ml) vanilla extract or almond extract",
//           weight: 4.395822951239589,
//           image: "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg",
//           _id: "69a2c15f1a555b111e941490"
//         }
//       ],
//       calories: 2064.492539335434,
//       totalWeight: 537.7891467009438,
//       totalTime: 750,
//       cuisineType: [
//         "indian",
//         "south american"
//       ],
//       mealType: [
//         "lunch/dinner"
//       ],
//       dishType: [
//         "desserts"
//       ],
//       date: "2026-02-28T10:20:15.854Z",
//       Comments: [],
//       __v: 0
//     },
//     {
//       image: {
//         url: "https://res.cloudinary.com/do2twyxai/image/upload/v1772274269/recipes/kg8fr6uppptjqnuyhjhz.jpg",
//         public_id: "recipes/kg8fr6uppptjqnuyhjhz"
//       },
//       totalNutrients: {
//         ENERC_KCAL: {
//           label: "Energy",
//           quantity: 2064.492539335434,
//           unit: "kcal"
//         },
//         FAT: {
//           label: "Fat",
//           quantity: 99.54135665989116,
//           unit: "g"
//         },
//         CHOCDF: {
//           label: "Carbs",
//           quantity: 253.46724181176685,
//           unit: "g"
//         },
//         FIBTG: {
//           label: "Fiber",
//           quantity: 4.042499999990237,
//           unit: "g"
//         },
//         SUGAR: {
//           label: "Sugars",
//           quantity: 223.71199181183871,
//           unit: "g"
//         },
//         PROCNT: {
//           label: "Protein",
//           quantity: 53.810899402341896,
//           unit: "g"
//         },
//         CHOLE: {
//           label: "Cholesterol",
//           quantity: 165.043730075,
//           unit: "mg"
//         },
//         CA: {
//           label: "Calcium",
//           quantity: 1176.3455799745266,
//           unit: "mg"
//         },
//         FE: {
//           label: "Iron",
//           quantity: 8.945172302646725,
//           unit: "mg"
//         },
//         VITA_RAE: {
//           label: "Vitamin A",
//           quantity: 389.46105957500004,
//           unit: "µg"
//         },
//         VITC: {
//           label: "Vitamin C",
//           quantity: 10.931726417498522,
//           unit: "mg"
//         },
//         THIA: {
//           label: "Thiamin (B1)",
//           quantity: 0.876562531898385,
//           unit: "mg"
//         },
//         RIBF: {
//           label: "Riboflavin (B2)",
//           quantity: 1.7310622586035063,
//           unit: "mg"
//         },
//         NIA: {
//           label: "Niacin (B3)",
//           quantity: 2.156538227414632,
//           unit: "mg"
//         },
//         VITB6A: {
//           label: "Vitamin B6",
//           quantity: 0.7148035090785885,
//           unit: "mg"
//         },
//         FOLAC: {
//           label: "Folic acid",
//           quantity: 0,
//           unit: "µg"
//         },
//         VITB12: {
//           label: "Vitamin B12",
//           quantity: 1.7701306245000004,
//           unit: "µg"
//         },
//         VITK1: {
//           label: "Vitamin K",
//           quantity: 45.133859942399106,
//           unit: "µg"
//         },
//         VITD: {
//           label: "Vitamin D",
//           quantity: 0.7937866475,
//           unit: "µg"
//         },
//         TOCPHA: {
//           label: "Vitamin E",
//           quantity: 2.0623293179973374,
//           unit: "mg"
//         },
//         WATER: {
//           label: "Water",
//           quantity: 118.90518693233666,
//           unit: "g"
//         }
//       },
//       _id: "69a2c22a1a555b111e9414a0",
//       user: "63facb96becdc8f79c2b8b50",
//       instruction: [],
//       Likes: 0,
//       label: "The Classic Indian Sweet My Mom Makes for Christmas Every Year",
//       source: "Serious Eats",
//       dietLabels: [
//         "Balanced",
//         "Low-Sodium"
//       ],
//       healthLabels: [
//         "Vegetarian",
//         "Pescatarian",
//         "Gluten-Free",
//         "Wheat-Free",
//         "Egg-Free",
//         "Peanut-Free",
//         "Soy-Free",
//         "Fish-Free",
//         "Shellfish-Free",
//         "Pork-Free",
//         "Red-Meat-Free",
//         "Crustacean-Free",
//         "Celery-Free",
//         "Mustard-Free",
//         "Sesame-Free",
//         "Lupine-Free",
//         "Mollusk-Free",
//         "Alcohol-Free",
//         "Sulfite-Free",
//         "Kosher"
//       ],
//       cautions: [
//         "Sulfites"
//       ],
//       ingredientLines: [
//         "One 14-ounce (396g) can sweetened condensed milk",
//         "3 1/2 ounces (100g) sifted, finely ground raw cashews (about 3/4 cup plus 2 tablespoons)",
//         "1 tablespoon (14g) unsalted butter or ghee, plus extra for greasing, kneading and shaping the milk creams",
//         "1 teaspoon (5ml) vanilla extract or almond extract"
//       ],
//       ingredients: [
//         {
//           text: "One 14-ounce (396g) can sweetened condensed milk",
//           weight: 396.89332375000004,
//           image: "https://www.edamam.com/food-img/bc9/bc97e9aa15ccef74dbad4d6267e30e3f.jpg",
//           _id: "69a2c22a1a555b111e9414a1"
//         },
//         {
//           text: "3 1/2 ounces (100g) sifted, finely ground raw cashews (about 3/4 cup plus 2 tablespoons)",
//           weight: 105,
//           image: "https://www.edamam.com/food-img/d4b/d4bc3f8024cac35e2039ef5ead328e11.jpg",
//           _id: "69a2c22a1a555b111e9414a2"
//         },
//         {
//           text: "3 1/2 ounces (100g) sifted, finely ground raw cashews (about 3/4 cup plus 2 tablespoons)",
//           weight: 17.49999999970413,
//           image: "https://www.edamam.com/food-img/d4b/d4bc3f8024cac35e2039ef5ead328e11.jpg",
//           _id: "69a2c22a1a555b111e9414a3"
//         },
//         {
//           text: "1 tablespoon (14g) unsalted butter or ghee, plus extra for greasing, kneading and shaping the milk creams",
//           weight: 14,
//           image: "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg",
//           _id: "69a2c22a1a555b111e9414a4"
//         },
//         {
//           text: "1 teaspoon (5ml) vanilla extract or almond extract",
//           weight: 4.395822951239589,
//           image: "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg",
//           _id: "69a2c22a1a555b111e9414a5"
//         }
//       ],
//       calories: 2064.492539335434,
//       totalWeight: 537.7891467009438,
//       totalTime: 0,
//       cuisineType: [
//         "indian",
//         "south american"
//       ],
//       mealType: [
//         "lunch/dinner"
//       ],
//       dishType: [
//         "special occasions",
//         "desserts"
//       ],
//       date: "2026-02-28T10:23:38.584Z",
//       Comments: [
//         {
//           user: "63facb96becdc8f79c2b8b50",
//           date: "2026-03-05T17:08:07.524Z",
//           comment: "good",
//           rating: 5,
//           username: "Rohitdr850",
//           Profileimage: "https://res.cloudinary.com/do2twyxai/image/upload/v1772522690/users/u7rrlkdxjfr7y7f64oss.jpg",
//           _id: "69a9b877bd2f14ac6cbcdb79"
//         },
//         {
//           user: "69a9b94bbd2f14ac6cbce6cd",
//           comment: "bad",
//           rating: 1,
//           username: "rohitdr098",
//           Profileimage: "UserImages/default.jpg",
//           _id: "69a9b970bd2f14ac6cbcec84",
//           date: "2026-03-05T17:12:16.543Z"
//         }
//       ],
//       __v: 0
//     }
//   ],
//   count: 23
// }
const sizeClass={
  normal:{
    footerPadding:"",
    titleSize:"text-lg",
    ratingPadding:"px-2 py-1",
    likePadding:"px-2 py-1"
  },
  feautedNormal:{
    footerPadding:"",
    titleSize:" text-sm md:text-lg",
    ratingPadding:"px-2 py-1",
    likePadding:"px-2 py-1"
  },
  feautedLarge:{
    footerPadding:"py-3 px-8",
     titleSize:"text-xl md:text-3xl",
       ratingPadding:"px-4 py-3",
     likePadding:"px-4 py-3"
  }
}
  const rating =
    recipe?.Comments?.length > 0
      ? recipe.Comments[0].rating
      : 0;

  const user = recipe?.Comments?.[0];

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`relative w-full aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer group`}
    >
      {/* Image */}
      <motion.img
        src={recipe?.image?.url}
        alt={recipe?.label}
        className="absolute inset-0 w-full h-full object-cover"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.15 }
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
        variants={{
          rest: { opacity: 0.6 },
          hover: { opacity: 0.9 }
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Glow sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        variants={{ hover: { x: "100%" } }}
        transition={{ duration: 0.8 }}
      />

      {/* Top Info (minimal) */}
      <div className="absolute top-3 left-3 right-3 flex justify-between items-center text-xs">
        <span className={`bg-black/60 ${sizeClass[size].ratingPadding} px-2 py-1 rounded-full text-orange-400 backdrop-blur`}>
          ⭐ {rating}
        </span>

        <span className={`bg-black/60 ${sizeClass[size].likePadding}  rounded-full backdrop-blur`}>
          ❤️ {recipe?.Likes}
        </span>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 w-full p-4">
        
        {/* Title */}
        <h2 className={`text-white ${sizeClass[size].titleSize}  font-bold leading-tight`}>
          {recipe?.label}
        </h2>

        {/* Reveal Section */}
        <motion.div
          className="mt-2 flex justify-between items-center"
          variants={{
            rest: { opacity: 0, y: 20 },
            hover: { opacity: 1, y: 0 }
          }}
          transition={{ delay: 0.1 }}
        >
          {/* User */}
          {user && (
            <div className="flex items-center gap-2">
              <img
                src={user.Profileimage}
                className="w-6 h-6 rounded-full border border-orange-400"
              />
              <span className="text-[11px] text-gray-300">
                {user.username}
              </span>
            </div>
          )}

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`text-xs px-3 py-1 ${sizeClass[size].footerPadding} rounded-full bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg shadow-orange-500/30 ${size==="large" && ""}`}
          >
            View →
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}