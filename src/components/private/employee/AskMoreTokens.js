import { Box, Button, MenuItem, TextField } from "@mui/material";
import React from "react";
import ComponentWrapper from "../ComponentWrapper";

const monthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const AskMoreTokens = ({ state, handleChange, RequestMoreTokensFunc }) => {
  return (
    <>
      <ComponentWrapper>
        <Box component="form">
          <TextField
            label="Select Month"
            name="requestmoretokens"
            value={state}
            onChange={(ev) => handleChange(ev)}
            fullWidth
            variant="standard"
            select
            sx={{
              width: { xs: "30ch", sm: "45ch", md: "50ch", lg: "60ch" },
              overflow: "hidden",
            }}
            helperText="Select how many months"
          >
            {monthArray.map((month) => (
              <MenuItem key={month} value={month}>
                {month}
              </MenuItem>
            ))}
          </TextField>
          <Box sx={{ py: 2, my: 2 }}>
            <Button variant="contained" onClick={() => RequestMoreTokensFunc()}>
              Request for Tokens
            </Button>
          </Box>
        </Box>
      </ComponentWrapper>
    </>
  );
};

export default AskMoreTokens;
