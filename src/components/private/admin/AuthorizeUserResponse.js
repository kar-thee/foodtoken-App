import { Box, Typography } from "@mui/material";
import React from "react";
import ComponentWrapper from "../ComponentWrapper";

const AuthorizeUserResponse = () => {
  return (
    <>
      <ComponentWrapper>
        {/* here comes msgDelivery*/}
        <Box>
          <Typography
            varaint="h5"
            sx={{ color: "#fff", background: "red", p: 3 }}
          >
            All users are verified, so no worries
          </Typography>
        </Box>
      </ComponentWrapper>
    </>
  );
};

export default AuthorizeUserResponse;
