import { Box, Button, Container, Stack, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SignupComponent = ({ state, errorState, submitForm, handleChange }) => {
  return (
    <>
      {/* here form elements */}
      <Container
        maxWidth="xs"
        sx={
          errorState.hasError
            ? {
                justifyContent: "center",
                border: "2px solid #f44336",
                mt: "1%",
                boxShadow: "-26px -21px 21px -6px rgba(224,34,34,0.64)",
                // boxShadow: "24px 29px 14px -9px rgba(51,221,33,0.69)",
              }
            : {
                justifyContent: "center",
                border: "2px solid #8bc34a",
                mt: "1%",
                // boxShadow: "-46px -31px 41px -6px rgba(224,34,34,0.64)",
                boxShadow: "24px 29px 14px -9px rgba(51,221,33,0.69)",
              }
        }
      >
        <Stack sx={{ py: 3, my: 3 }}>
          <Box sx={{ py: 2 }}>
            <TextField
              type="text"
              label="name"
              name="name"
              value={state.name}
              onChange={(ev) => handleChange(ev)}
              error={errorState.nameError}
              variant="standard"
              helperText={errorState.nameError && "Atleast 3 characters"}
              fullWidth
            />
          </Box>

          <Box sx={{ py: 2 }}>
            <TextField
              type="email"
              label="email"
              name="email"
              value={state.email}
              onChange={(ev) => handleChange(ev)}
              error={errorState.emailError}
              variant="standard"
              helperText={errorState.emailError && "Enter a valid email"}
              fullWidth
            />
          </Box>

          <Box sx={{ py: 2 }}>
            <TextField
              type="password"
              label="password"
              name="password"
              value={state.password}
              onChange={(ev) => handleChange(ev)}
              error={errorState.passwordError}
              variant="standard"
              helperText={errorState.passwordError && "eg: Password1@"}
              fullWidth
            />
          </Box>

          <Box sx={{ py: 2 }}>
            <TextField
              type="text"
              label="employeeId"
              name="employeeId"
              value={state.employeeId}
              onChange={(ev) => handleChange(ev)}
              error={errorState.employeeError}
              variant="standard"
              helperText={errorState.employeeError && "Eg: Emp-0332"}
              fullWidth
            />
          </Box>

          <Box sx={{ py: 3 }}>
            <Button onClick={() => submitForm()} variant="contained" fullWidth>
              Signup now
            </Button>
          </Box>
          <Button
            component={Link}
            to="/signin"
            sx={{ pt: 1 }}
            variant="outlined"
          >
            Go to SignIn
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default SignupComponent;
