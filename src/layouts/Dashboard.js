import React from "react";
import { ADMIN, CANTEEN, EMPLOYEE } from "../helpers/UserRoles";
import useRole from "../hooks/useRole";
import AdminLayout from "./AdminLayout";

import CanteenLayout from "./CanteenLayout";
import EmployeeLayout from "./EmployeeLayout";

const Dashboard = () => {
  const userRole = useRole();
  return (
    <>
      Dashboard
      {userRole === ADMIN && (
        <>
          <AdminLayout />
        </>
      )}
      {userRole === CANTEEN && (
        <>
          <CanteenLayout />
        </>
      )}
      {userRole === EMPLOYEE && (
        <>
          <EmployeeLayout />
        </>
      )}
    </>
  );
};

export default Dashboard;
