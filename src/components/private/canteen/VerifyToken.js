import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";
import ComponentWrapper from "../ComponentWrapper";

const VerifyToken = ({ state, handleChange, VerifyTokenFunc }) => {
  return (
    <ComponentWrapper>
      <Box component="form">
        <TextField
          label="Token"
          name="verifytoken"
          value={state}
          onChange={(ev) => handleChange(ev)}
          fullWidth
          variant="standard"
          sx={{
            width: { xs: "30ch", sm: "45ch", md: "50ch", lg: "60ch" },
            overflow: "hidden",
          }}
        />
        <Stack sx={{ py: 2, my: 2 }}>
          <Button
            variant="contained"
            onClick={() => VerifyTokenFunc()}
            sx={{ my: 1 }}
          >
            Verify
          </Button>
        </Stack>
      </Box>
    </ComponentWrapper>
  );
};

export default VerifyToken;
