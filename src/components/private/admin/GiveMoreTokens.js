import { Box, Button, MenuItem, Stack, TextField } from "@mui/material";
import React from "react";
import ComponentWrapper from "../ComponentWrapper";

const GiveMoreTokens = ({
  usersState,
  selectedUser,
  handleChange,
  selectedMonths,
  handleMonthsChange,
  AuthorizeUserFunc,
}) => {
  return (
    <>
      <ComponentWrapper>
        <Box component="form">
          <Stack>
            <TextField
              label="Select User"
              name="authorizeUser"
              value={selectedUser}
              onChange={(ev) => handleChange(ev)}
              fullWidth
              variant="standard"
              select
              sx={{
                width: { xs: "30ch", sm: "45ch", md: "50ch", lg: "60ch" },
                overflow: "hidden",
                my: 1,
                py: 1,
              }}
              helperText="Select token type"
            >
              {usersState.map((userObj) => (
                <MenuItem key={userObj._id} value={userObj._id}>
                  {userObj.name}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Select Months"
              name="totalmonths"
              value={selectedMonths}
              onChange={(ev) => handleMonthsChange(ev)}
              fullWidth
              variant="standard"
              select
              sx={{
                width: { xs: "30ch", sm: "45ch", md: "50ch", lg: "60ch" },
                overflow: "hidden",
                my: 1,
                py: 1,
              }}
              helperText="Select token type"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
                <MenuItem key={month} value={month}>
                  {month}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
          <Box sx={{ py: 2, my: 2 }}>
            <Button variant="contained" onClick={() => AuthorizeUserFunc()}>
              Give More Tokens
            </Button>
          </Box>
        </Box>
      </ComponentWrapper>
    </>
  );
};

export default GiveMoreTokens;
