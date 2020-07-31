const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("./pages/HomePage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "*",
    name: "notFound",
    component: () => import("./pages/NotFoundPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage"),
  },
  {
    path: "/profile/favorite",
    name: "favorite",
    component: () => import("./pages/FavoriteRecipesPage"),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/profile/personal",
    name: "personal",
    component: () => import("./pages/PersonalRecipesPage"),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/profile/family",
    name: "family",
    component: () => import("./pages/FamilyRecipesPage"),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/recipe/preparing/:recipeId",
    name: "preparing",
    component: () => import("./pages/PreparingRecipePage"),
    // meta: {
    //   requiresAuth: true,
    // }
  },
  {
    path: "/profile/newRecipe",
    name: "new",
    component: () => import("./pages/NewRecipePage"),
    
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/profile/meal",
    name: "meal",
    component: () => import("./pages/PreparingMealPage"),
    meta: {
      requiresAuth: true,
    }
  },
];

export default routes;
