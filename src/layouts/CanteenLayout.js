import React from "react";
import { Outlet } from "react-router-dom";

const CanteenLayout = () => {
  return (
    <div>
      CanteenLayout
      <>
        <Outlet />
      </>
    </div>
  );
};

export default CanteenLayout;
