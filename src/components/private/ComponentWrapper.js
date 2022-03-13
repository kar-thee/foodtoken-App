import { Container, Grid } from "@mui/material";
import React from "react";

const ComponentWrapper = ({ children }) => {
  return (
    <>
      <>
        <Container sx={{ py: 5, my: 5 }} maxWidth="lg">
          <Grid
            container
            sx={{
              justifyContent: "center",
              my: 2,
              border: "1px solid brown",
              boxShadow: "-2px 9px 45px 16px #1de9b6",
            }}
          >
            <Grid item maxWidth="lg" sx={{ py: 5, my: 5 }}>
              {/* here comes children component*/}
              {children}
            </Grid>
          </Grid>
        </Container>
      </>
    </>
  );
};

export default ComponentWrapper;
