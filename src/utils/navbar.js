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
];
