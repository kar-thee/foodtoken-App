import { useContext } from "react";
import AppContext from "../context/AppContext";

const useStateValues = () => {
  const [state] = useContext(AppContext);

  return state;
};

export default useStateValues;
