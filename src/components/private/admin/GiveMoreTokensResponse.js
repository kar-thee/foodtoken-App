import { Box, Typography } from "@mui/material";
import React from "react";
import ComponentWrapper from "../ComponentWrapper";

const GiveMoreTokensResponse = () => {
  return (
    <>
      <ComponentWrapper>
        {/* here comes msgDelivery*/}
        <Box>
          <Typography
            varaint="h5"
            sx={{ color: "#fff", background: "red", p: 3 }}
          >
            No Token Requests available, so no worries...
          </Typography>
        </Box>
      </ComponentWrapper>
    </>
  );
};

export default GiveMoreTokensResponse;
