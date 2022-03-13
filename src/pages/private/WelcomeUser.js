import { Box, Typography } from "@mui/material";
import React from "react";
import { ADMIN, CANTEEN, EMPLOYEE } from "../../helpers/UserRoles";
import useRole from "../../hooks/useRole";

const WelcomeUser = () => {
  const userRole = useRole();
  return (
    <>
      {/* if role is admin, show admin layout */}
      {userRole === ADMIN && (
        <>
          <Typography variant="h4">Welcome ADMIN USER</Typography>
        </>
      )}
      {/* if role is canteen, show canteen layout */}
      {userRole === CANTEEN && (
        <>
          <Typography variant="h4">Welcome CANTEEN USER</Typography>
        </>
      )}
      {/* if role is employee, show employee layout */}
      {userRole === EMPLOYEE && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h4">Welcome EMPLOYEE USER</Typography>
        </Box>
      )}
    </>
  );
};

export default WelcomeUser;
