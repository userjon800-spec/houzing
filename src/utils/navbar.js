import React from "react";
import useUniquieId from "../hooks/useId";
const PropertiesPage = React.lazy(() => import("../pages/properties"));
const HomePage = React.lazy(() => import("../pages/home"));
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
    element: <h1>Sahifa topilmadi (signin)</h1>,
    title: "Sign in",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: useUniquieId,
    element: <h1>Sahifa topilmadi (signup)</h1>,
    title: "Sign Up",
    path: "/signup",
    private: false,
    hidden: true,
  },
];
