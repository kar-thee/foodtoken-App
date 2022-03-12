import { Backdrop } from "@mui/material";
import React from "react";

import ReactLoading from "react-loading";
import useStateValues from "../hooks/useStateValues";

const Loader = () => {
  const { loadingState } = useStateValues();
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loadingState}
      >
        <ReactLoading type="bars" color="#fff" />
      </Backdrop>
    </>
  );
};

export default Loader;
