import useUniquieId from "../hooks/useId";
import HomePage from "../pages/home";
import PropertiesPage from "../pages/properties";
export const navbar = [
  {
    id: useUniquieId,
    title: "Home",
    element: <HomePage />,
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useUniquieId,
    element: <PropertiesPage />,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useUniquieId,
    element:  <h1>Sahifa topilmadi (signin)</h1>,
    title: "Sign in",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: useUniquieId,
    element:  <h1>Sahifa topilmadi (signup)</h1>,
    title: "Sign Up",
    path: "/signup",
    private: false,
    hidden: true,
  },
];
