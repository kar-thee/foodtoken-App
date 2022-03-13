import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import ComponentWrapper from "../ComponentWrapper";

const MyProfile = ({ profileState }) => {
  return (
    <>
      <ComponentWrapper>
        <Box sx={{ overflowX: "scroll" }}>
          <Typography variant="h6" sx={{ py: 1, textAlign: "center" }}>
            Profile:
          </Typography>
          <TableContainer
            component={Paper}
            elevation={4}
            sx={{
              width: { xs: "85%", sm: "85%", md: "85%", lg: "95%", xl: "95%" },
              mx: "auto",
            }}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow sx={{ background: "#a1887f" }}>
                  <TableCell sx={{ fontWeight: "bolder" }}>Key</TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }}>:</TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }}>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>:</TableCell>
                  <TableCell>{profileState.name}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>:</TableCell>
                  <TableCell>{profileState.email}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>EmployeeId</TableCell>
                  <TableCell>:</TableCell>
                  <TableCell>{profileState.employeeId}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>UserRole</TableCell>
                  <TableCell>:</TableCell>
                  <TableCell>{profileState.userRole}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Account Verified</TableCell>
                  <TableCell>:</TableCell>
                  <TableCell>
                    {profileState.isVerified ? "Verified" : "Not Verified"}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Max MealTokens Given</TableCell>
                  <TableCell>:</TableCell>
                  <TableCell>{profileState.mealTokensMax}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Max BeverageTokens Given</TableCell>
                  <TableCell>:</TableCell>
                  <TableCell>{profileState.beverageTokensMax}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>MealTokens Generated</TableCell>
                  <TableCell>:</TableCell>
                  <TableCell>{profileState.mealTokensGenerated}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>BeverageTokens Generated</TableCell>
                  <TableCell>:</TableCell>
                  <TableCell>{profileState.beverageTokensGenerated}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Available Meal Tokens</TableCell>
                  <TableCell>:</TableCell>
                  <TableCell>
                    {profileState.mealTokensMax -
                      profileState.mealTokensGenerated}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Available Beverage Tokens</TableCell>
                  <TableCell>:</TableCell>
                  <TableCell>
                    {profileState.beverageTokensMax -
                      profileState.beverageTokensGenerated}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </ComponentWrapper>
    </>
  );
};

export default MyProfile;
