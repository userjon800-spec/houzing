import { useId } from "react";

const useUniquieId = () => {
  const id = useId();
  return id;
};

export default useUniquieId;
