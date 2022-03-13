import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/private/navigation/Navigation";

import adminNavList from "../helpers/navItems/AdminNavList";
import canteenNavList from "../helpers/navItems/CanteenNavList";
import employeeNavList from "../helpers/navItems/EmployeeNavList";

import { ADMIN, CANTEEN, EMPLOYEE } from "../helpers/UserRoles";
import useRole from "../hooks/useRole";

const Dashboard = () => {
  const userRole = useRole();
  return (
    <>
      {/* NavigationBar */}
      {/* if role is admin, show admin layout */}
      {userRole === ADMIN && (
        <>
          <Navigation navFeaturesList={adminNavList} />
        </>
      )}
      {/* if role is canteen, show canteen layout */}
      {userRole === CANTEEN && (
        <>
          <Navigation navFeaturesList={canteenNavList} />
        </>
      )}
      {/* if role is employee, show employee layout */}
      {userRole === EMPLOYEE && (
        <>
          <Navigation navFeaturesList={employeeNavList} />
        </>
      )}

      {/* this is where different components gets rendered based on url-path */}
      <>
        <Outlet />
      </>
    </>
  );
};

export default Dashboard;
