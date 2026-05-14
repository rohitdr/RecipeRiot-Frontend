

export default function validateRecipeForm(formData,image,isEditMode) {
  if (!formData.label.trim()) {
    return "Recipe name is required";
  }

  if (!formData.source.trim()) {
    return "Recipe source is required";
  }
  if (!formData.totalTime) {
    return "Total cooking time is required";
  }

  if (Number(formData.totalTime) <= 0) {
    return "Total cooking time must be greater than 0";
  }

  if (!formData.calories) {
    return "Calories field is required";
  }

  if (Number(formData.calories) <= 0) {
    return "Calories must be greater than 0";
  }

  if (!formData.totalWeight) {
    return "Total weight is required";
  }

  if (Number(formData.totalWeight) <= 0) {
    return "Total weight must be greater than 0";
  }

  // image validation
  if (!isEditMode &&!image && !formData.image.url) {
    return "Recipe image is required";
  }

  // ingredient validation
  const validIngredients = formData.ingredientLines.filter(
    (item) => item.trim() !== ""
  );

  if (validIngredients.length === 0) {
    return "At least one ingredient is required";
  }

  // diet labels validation
  const validDietLabels = formData.dietLabels.filter(
    (item) => item.trim() !== ""
  );

  if (validDietLabels.length === 0) {
    return "At least one diet label is required";
  }

  // health labels validation
  const validHealthLabels = formData.healthLabels.filter(
    (item) => item.trim() !== ""
  );

  if (validHealthLabels.length === 0) {
    return "At least one health label is required";
  }

  // multi select validation
  if (formData.cuisineType.length === 0) {
    return "Please select at least one cuisine type";
  }

  if (formData.mealType.length === 0) {
    return "Please select at least one meal type";
  }

  if (formData.dishType.length === 0) {
    return "Please select at least one dish type";
  }

 

  // nutrient validation
  const hasValidNutrient = Object.values(
    formData.totalNutrients
  ).some(
    (nutrient) =>
      nutrient.quantity !== "" &&
      Number(nutrient.quantity) > 0
  );

  if (!hasValidNutrient) {
    return "Please enter at least one nutrient quantity";
  }

  return null;
}