import { Box, Typography } from "@mui/material";
import React from "react";
import ComponentWrapper from "../ComponentWrapper";
import MyTokensTableComponent from "./MyTokensTableComponent";

const MyTokens = ({ myTokens }) => {
  if (myTokens === "empty" || myTokens.length === 0) {
    return (
      <>
        <ComponentWrapper>
          <Box>
            <Typography
              varaint="h5"
              sx={{ color: "#fff", background: "red", p: 3 }}
            >
              No Tokens Available...Generate token now
            </Typography>
          </Box>
        </ComponentWrapper>
      </>
    );
  }

  return (
    <>
      <ComponentWrapper>
        <Typography variant="h6" sx={{ textAlign: "center", mr: 5 }}>
          Tokens :
        </Typography>
        <Box sx={{ py: 1, overflow: "auto", maxHeight: "1200px" }}>
          <MyTokensTableComponent myTokens={myTokens} />
        </Box>
      </ComponentWrapper>
    </>
  );
};

export default MyTokens;
