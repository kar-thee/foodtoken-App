import { Box, Typography } from "@mui/material";
import React from "react";
import ComponentWrapper from "../../components/private/ComponentWrapper";
import PageTitle from "../../components/private/navigation/PageTitle";
import { ADMIN, CANTEEN, EMPLOYEE } from "../../helpers/UserRoles";
import useRole from "../../hooks/useRole";

const WelcomeUser = () => {
  const userRole = useRole();
  return (
    <>
      {/* this is pageTitle */}
      <>
        <PageTitle title="Welcome User" />
      </>

      <ComponentWrapper>
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
      </ComponentWrapper>
    </>
  );
};

export default WelcomeUser;
