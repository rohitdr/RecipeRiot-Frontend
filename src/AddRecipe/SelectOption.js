import React from 'react'
import Select from "react-select";
export default function SelectOption({formData,setFormData}) {
      const customSelectStyles = {
  container: (provided) => ({
    ...provided,
    width: "100%",
  }),

  control: (provided) => ({
    ...provided,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderColor: "#374151",
    minHeight: "45px",
    boxShadow: "none",
    borderRadius: "12px",
    width: "100%",
    flexWrap: "wrap",
  }),

  valueContainer: (provided) => ({
    ...provided,
    padding: "4px 8px",
    flexWrap: "wrap",
  }),

  menu: (provided) => ({
    ...provided,
    backgroundColor: "#111827",
    width: "100%",
    zIndex: 9999,
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? "#1f2937"
      : "#111827",
    color: "white",
  }),

  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#ea580c",
    borderRadius: "8px",
    maxWidth: "100%",
  }),

  multiValueLabel: (provided) => ({
    ...provided,
    color: "white",
    fontSize: "12px",
  }),

  multiValueRemove: (provided) => ({
    ...provided,
    color: "white",
    ":hover": {
      backgroundColor: "#c2410c",
      color: "white",
    },
  }),

  placeholder: (provided) => ({
    ...provided,
    color: "#9ca3af",
    fontSize: "14px",
  }),

  input: (provided) => ({
    ...provided,
    color: "white",
  }),
};
     const cuisineOptions = [
  { value: "Indian", label: "Indian" },
  { value: "Chinese", label: "Chinese" },
  { value: "Italian", label: "Italian" },
  { value: "Mexican", label: "Mexican" },
];

const mealOptions = [
  { value: "Breakfast", label: "Breakfast" },
  { value: "Lunch", label: "Lunch" },
  { value: "Dinner", label: "Dinner" },
  { value: "Snack", label: "Snack" },
  { value: "TeaTime", label: "Tea Time" },
];

const dishOptions = [
  { value: "Bread", label: "Bread" },
  { value: "Dessert", label: "Dessert" },
  { value: "Salad", label: "Salad" },
  { value: "Sandwich", label: "Sandwich" },
  { value: "Drinks", label: "Drinks" },
];


const handleMultiSelect = (field, selectedOptions) => {
  setFormData((prev) => ({
    ...prev,
    [field]: selectedOptions
      ? selectedOptions.map((item) => item.value)
      : [],
  }));
};
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

  {/* Cuisine */}
  <Select
    isMulti
    value={cuisineOptions.filter((option)=>formData.cuisineType.includes(option.value))}
    styles={customSelectStyles}
    options={cuisineOptions}
    placeholder="Select Cuisine Type"
    onChange={(selected) =>
      handleMultiSelect("cuisineType", selected)
    }
  />

  {/* Meal */}
  <Select
    isMulti
       value={mealOptions.filter((option)=>formData.mealType.includes(option.value))}
    options={mealOptions}
      styles={customSelectStyles}
    placeholder="Select Meal Type"
    onChange={(selected) =>
      handleMultiSelect("mealType", selected)
    }
  />

  {/* Dish */}
  <Select
    isMulti
       value={dishOptions.filter((option)=>formData.dishType.includes(option.value))}
      styles={customSelectStyles}
    options={dishOptions}
    placeholder="Select Dish Type"
    onChange={(selected) =>
      handleMultiSelect("dishType", selected)
    }
  />


   </div>
  )
}
