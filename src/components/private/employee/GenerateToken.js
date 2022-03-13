import { Box, Button, TextField, MenuItem } from "@mui/material";
import React from "react";
import ComponentWrapper from "../ComponentWrapper";

const GenerateToken = ({ state, handleChange, GenerateTokenFunc }) => {
  return (
    <>
      <ComponentWrapper>
        <Box component="form">
          <TextField
            label="Select Token"
            name="generatetoken"
            value={state}
            onChange={(ev) => handleChange(ev)}
            fullWidth
            variant="standard"
            select
            sx={{
              width: { xs: "30ch", sm: "45ch", md: "50ch", lg: "60ch" },
              overflow: "hidden",
            }}
            helperText="Select token type"
          >
            {["meal", "beverage"].map((mealType) => (
              <MenuItem key={mealType} value={mealType}>
                {mealType}
              </MenuItem>
            ))}
          </TextField>
          <Box sx={{ py: 2, my: 2 }}>
            <Button variant="contained" onClick={() => GenerateTokenFunc()}>
              Generate
            </Button>
          </Box>
        </Box>
      </ComponentWrapper>
    </>
  );
};

export default GenerateToken;
