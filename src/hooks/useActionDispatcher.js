import { useContext } from "react";
import AppContext from "../context/AppContext";

const useActionDispatcher = () => {
  const [, dispatch] = useContext(AppContext);

  return dispatch;
};

export default useActionDispatcher;
