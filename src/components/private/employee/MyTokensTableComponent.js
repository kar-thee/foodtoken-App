import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const MyTokensTableComponent = ({ myTokens }) => {
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          width: { xs: "55%", sm: "65%", md: "75%", lg: "95%", xl: "95%" },
          mx: "auto",
        }}
        elevation={4}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ background: "#a1887f" }}>
              <TableCell align="left" sx={{ fontWeight: "bolder" }}>
                S.No
              </TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Redeemed</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Type</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>createdDate</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>tokenString</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myTokens.map((tokenObj, ind) => (
              <TableRow
                key={tokenObj._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{ind + 1}</TableCell>
                <TableCell
                  sx={
                    tokenObj.tokenRedeemed === true
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {tokenObj.tokenRedeemed === true ? "Yes" : "No"}
                </TableCell>
                <TableCell
                  sx={
                    tokenObj.tokenType === "meal"
                      ? { color: "#2196f3" }
                      : { color: "#673ab7" }
                  }
                >
                  {tokenObj.tokenType}
                </TableCell>
                <TableCell>{tokenObj.createdDate}</TableCell>
                <TableCell>{tokenObj.tokenString}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MyTokensTableComponent;
