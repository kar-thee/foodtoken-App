import React from "react";
import useStore from "../hooks/useStore";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useStore();

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
