import { useLocation } from "react-router-dom";

export const useSearch = () => {
  let { search } = useLocation();
  return new URLSearchParams(search);
};
