import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import useActionDispatcher from "../../../hooks/useActionDispatcher";
import ComponentWrapper from "../ComponentWrapper";

const UpdatePwdResponse = ({ pwdUpdateResponse, goBackFunc }) => {
  const dispatch = useActionDispatcher();

  const logoutFunc = () => {
    dispatch({ type: "signOut" });
  };
  return (
    <>
      <ComponentWrapper>
        {/* here comes msgDelivery*/}
        <Box>
          <Typography
            varaint="h5"
            sx={
              pwdUpdateResponse.type === "success"
                ? {
                    color: "#fff",
                    background: "green",
                    p: 3,
                    mx: { xs: 1, md: 0 },
                  }
                : { color: "#fff", background: "red", p: 3 }
            }
          >
            {pwdUpdateResponse.msg}
          </Typography>
        </Box>

        <Stack sx={{ alignItems: "flex-end", py: 5, mt: 5, mr: 1 }}>
          <Button
            variant="outlined"
            color="warning"
            onClick={() => goBackFunc()}
            sx={{ my: 1 }}
          >
            Go Back
          </Button>

          <Button
            variant="outlined"
            color="warning"
            onClick={() => logoutFunc()}
            sx={{ my: 1 }}
          >
            Logout
          </Button>
        </Stack>
      </ComponentWrapper>
    </>
  );
};

export default UpdatePwdResponse;
