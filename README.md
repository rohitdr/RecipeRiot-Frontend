# 🍽️ RecipeRiot Frontend

A modern and responsive recipe discovery UI where users can explore, search, and interact with recipes seamlessly.

## 🚀 Overview

RecipeRiot frontend provides an intuitive user interface for browsing recipes, interacting with content, and managing favorites.


## ⚙️ Tech Stack

* ⚛️ React
* 🌐 Fetch API (Data fetching)
* 🎨 Bootstrap (UI styling)
* 🎞️ Framer Motion (Animations)
* ⏳ React Top Loading Bar (Progress indicator)
* ♾️ React Infinite Scroll (Lazy loading content)


## ✨ Features

* 🔍 Search recipes by keyword

* 🧭 Category-based filtering

* ♾️ Infinite scroll for seamless browsing

* ⏳ Top loading bar for better UX feedback

* ❤️ Like & save favorite recipes

* 💬 Comment and rating system

* 📄 Detailed recipe page (ingredients & instructions)

* 🛠️ Admin Panel

  * Manage recipes (Add / Update / Delete)
  * Manage users (View / Control access)
  * View platform statistics

* 👤 User Profile

  * Update profile details
  * Manage personal data
  * View liked recipes

* 🎞️ Smooth animations using Framer Motion

* 📱 Fully responsive UI


## 🎥 Demo

[![Watch Demo](https://res.cloudinary.com/do2twyxai/image/upload/v1776501406/RecipeRiot_a7yxem.png)](https://youtu.be/UGOtACSJBls)


## 📸 Screenshots

### 🔍 Search Recipes

![Search](https://res.cloudinary.com/do2twyxai/image/upload/v1776501406/Search_o1ck9o.png)

### 🛠️ Admin Panel

![Admin Panel](https://res.cloudinary.com/do2twyxai/image/upload/v1776501405/AdminPanel_vewg1z.png)

### ❤️ Favorite Recipes

![Favorite](https://res.cloudinary.com/do2twyxai/image/upload/v1776501405/Favorite_ycunvz.png)

### 🍽️ Recipe Details

![Recipe Item](https://res.cloudinary.com/do2twyxai/image/upload/v1776501405/RecipeItem_u1wra6.png)

### ⭐ Comments & Ratings

![Rating](https://res.cloudinary.com/do2twyxai/image/upload/v1776501404/Comment_Rating_xy9ywp.png)



## 📁 Folder Structure

```
src/
├── components/        # Reusable UI components
│   └── pages/         # Page components (Home, Recipe, Admin, etc.)
├── context/           # Global state management (Context API)
├── App.jsx
├── main.jsx
```


## 🔧 Environment Variables

Create a `.env` file in the root directory:

```
REACT_APP_FETCH_API_START=your_api_base_url
REACT_APP_ADMIN_EMAIL=your_admin_email
```

### 📌 Notes

* All environment variables must start with `REACT_APP_`
* Restart the development server after updating `.env`
* Do not commit `.env` file to GitHub


## ▶️ Getting Started

```bash id="rr3"
git clone https://github.com/your-username/RecipeRiot-Frontend.git
cd RecipeRiot-Frontend
npm install
npm run start
```

---

## 🧠 Key Concepts

* Component-based UI design
* API integration using Fetch
* State handling for user interactions
* Dynamic filtering & search
* Responsive layout with Bootstrap CSS

---

## 🔗 Backend Repository

👉 https://github.com/rohitdr/RecipeRiot-Backend.git

---
## 📌 Note

This project was initially developed as a single full-stack repository combining both frontend and backend.
It has now been refactored into separate repositories for better scalability, maintainability, and cleaner architecture.

Due to this restructuring, the current repository may have a limited commit history.

👉 Original Monorepo: https://github.com/rohitdr/RecipeRiot.git


## 👨‍💻 Author

Rohit Kumar

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
