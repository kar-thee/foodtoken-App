import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../components/private/navigation/Navigation";
import adminNavList from "../helpers/navItems/AdminNavList";

const AdminLayout = () => {
  return (
    <>
      {/* this below outlet will help in changing pages when user clicks the links in navbar */}
      <>
        <Outlet />
      </>
    </>
  );
};

export default AdminLayout;
