import { Box, Typography } from "@mui/material";
import React from "react";
import ComponentWrapper from "../../components/private/ComponentWrapper";

const AccountNotVerified = () => {
  return (
    <>
      <ComponentWrapper>
        <Box
          sx={{
            py: 1,
            my: 1,
            color: "red",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <Typography variant="h3">Account not Verified Yet...</Typography>
          <Typography variant="h6" sx={{ background: "black", p: 1, my: 2 }}>
            Wait till admin authorize you...Sit back Tight
          </Typography>
        </Box>
      </ComponentWrapper>
    </>
  );
};

export default AccountNotVerified;
