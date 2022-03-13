import { Box, Typography } from "@mui/material";
import React from "react";

const PageTitle = ({ title }) => {
  return (
    <>
      <Box sx={{ background: "#80cbc4", p: 1, mb: 1 }}>
        <Typography variant="h5" sx={{ color: "#004d40" }}>
          {title.toUpperCase()}
        </Typography>
      </Box>
    </>
  );
};

export default PageTitle;
