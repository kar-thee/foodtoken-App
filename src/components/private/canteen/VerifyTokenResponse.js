import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import ComponentWrapper from "../ComponentWrapper";

const VerifyTokenResponse = ({ msgState, goBackFunc }) => {
  return (
    <>
      <ComponentWrapper>
        {/* here comes msgDelivery*/}
        <Box>
          <Typography
            varaint="h5"
            sx={
              msgState.type === "success"
                ? { color: "#fff", background: "green", p: 3 }
                : { color: "#fff", background: "red", p: 3 }
            }
          >
            {msgState.msg}
          </Typography>

          {msgState.serving === "beverage" && (
            <Typography variant="h4" sx={{ pt: 5 }}>
              Serving - ☕
            </Typography>
          )}

          {msgState.serving === "meal" && (
            <Typography variant="h4" sx={{ pt: 5 }}>
              Serving - 🥪
            </Typography>
          )}
        </Box>

        <Stack sx={{ alignItems: "flex-end", py: 5, mt: 5 }}>
          <Button
            variant="outlined"
            color="warning"
            onClick={() => goBackFunc()}
          >
            Go Back
          </Button>
        </Stack>
      </ComponentWrapper>
    </>
  );
};

export default VerifyTokenResponse;
