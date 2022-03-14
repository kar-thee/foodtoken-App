import { useReducer, useEffect } from "react";
import initialValues from "./initialValues";
import reducerFunc from "./reducerFunc";

const useStore = () => {
  const [state, dispatch] = useReducer(reducerFunc, initialValues, () => {
    const authToken = JSON.parse(localStorage.getItem("jwtToken"));
    const userInfo = JSON.parse(localStorage.getItem("userData"));

    return {
      ...initialValues,
      jwtToken: authToken || initialValues.jwtToken,
      userData: userInfo || initialValues.userData,
    };
  });

  //updating to localStorage whenever jwtToken and userData changes
  useEffect(() => {
    localStorage.setItem("jwtToken", JSON.stringify(state.jwtToken));
    localStorage.setItem("userData", JSON.stringify(state.userData));
  }, [state.jwtToken, state.userData]);

  return [state, dispatch];
};

export default useStore;
