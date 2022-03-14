import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import ComponentWrapper from "../ComponentWrapper";

const AskMoreTokensResponse = ({ msgState, goBackFunc }) => {
  return (
    <>
      <ComponentWrapper>
        {/* here comes msgDelivery*/}
        <Box>
          <Typography
            varaint="h5"
            sx={
              msgState.type === "success"
                ? {
                    color: "#fff",
                    background: "green",
                    p: 3,
                    mx: { xs: 1, md: 0 },
                  }
                : { color: "#fff", background: "red", p: 3 }
            }
          >
            {msgState.msg}
          </Typography>
        </Box>

        <Stack sx={{ alignItems: "flex-end", py: 5, mt: 5, mr: 1 }}>
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

export default AskMoreTokensResponse;
