import React from "react";
import useUniquieId from "../hooks/useId";
import FavoritesPage from "../pages/favorites";
import RegisterPage from "../pages/register";
import MyProfile from "../pages/profile";
import AddNewHouse from "../pages/addHouse"
const PropertiesPage = React.lazy(() => import("../pages/properties"));
const HomePage = React.lazy(() => import("../pages/home"));
const HousePage = React.lazy(() => import("../pages/houseItem"));
export const navbar = [
  {
    id: useUniquieId,
    title: "Home",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HomePage />
      </React.Suspense>
    ),
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useUniquieId,
    title: "House page",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HousePage />
      </React.Suspense>
    ),
    path: "/properties/:id",
    private: false,
    hidden: true,
  },
  {
    id: useUniquieId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <PropertiesPage />
      </React.Suspense>
    ),
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useUniquieId,
    element: <RegisterPage />,
    title: "Sign in",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: useUniquieId,
    element: <FavoritesPage />,
    title: "Favorites",
    path: "/favorites",
    private: true,
    hidden: true,
  },
  {
    id: useUniquieId,
    element: <MyProfile />,
    title: "My profile",
    path: "/profile",
    private: true,
    hidden: true,
  },
  {
    id: useUniquieId,
    element: <AddNewHouse />,
    title: "Add New House",
    path: "/profile/new-house",
    private: true,
    hidden: true,
  },
  {
    id: useUniquieId,
    element: <AddNewHouse />,
    title: "Add New House",
    path: "/profile/edit-house/:id",
    private: true,
    hidden: true,
  },
];
