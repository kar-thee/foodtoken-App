import { Box, Button, TextField } from "@mui/material";
import React from "react";
import ComponentWrapper from "../ComponentWrapper";

const UpdatePwd = ({ state, handleChange, updatePasswordFunc, errorState }) => {
  return (
    <>
      <ComponentWrapper>
        <Box component="form">
          <Box sx={{ py: 2 }}>
            <TextField
              type="password"
              label="old password"
              name="oldPwd"
              value={state.oldPwd}
              onChange={(ev) => handleChange(ev)}
              variant="standard"
              error={errorState.oldPwdError}
              helperText={"eg: Password1@"}
              fullWidth
            />
          </Box>
          <Box sx={{ py: 2 }}>
            <TextField
              type="password"
              label="new password"
              name="newPwd"
              value={state.password}
              onChange={(ev) => handleChange(ev)}
              variant="standard"
              error={errorState.newPwdError}
              helperText={"eg: Password1@"}
              fullWidth
            />
          </Box>

          {/* here submit btn */}
          <Box sx={{ py: 3 }}>
            <Button
              onClick={() => updatePasswordFunc()}
              variant="contained"
              fullWidth
            >
              Update Password
            </Button>
          </Box>
        </Box>
      </ComponentWrapper>
    </>
  );
};

export default UpdatePwd;
