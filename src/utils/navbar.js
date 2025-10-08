import React from "react";
import useUniquieId from "../hooks/useId";
import SigninPage from "../pages/signin";
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
    element: <SigninPage />,
    title: "Sign in",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: useUniquieId,
    element: <h1>saf</h1> ,
    title: "Sign Up",
    path: "/signup",
    private: false,
    hidden: true,
  },
];
