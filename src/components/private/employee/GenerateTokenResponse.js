import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import GenerateQrCode from "../../../helpers/qrcode-generate/GenerateQrCode";
import ComponentWrapper from "../ComponentWrapper";

const GenerateTokenResponse = ({ msgState, goBackFunc }) => {
  return (
    <>
      <ComponentWrapper>
        {/* here comes msgDelivery*/}
        <Box>
          <Typography
            varaint="h5"
            sx={
              msgState.type === "success"
                ? {
                    color: "#fff",
                    background: "green",
                    p: 3,
                    mx: { xs: 1, md: 0 },
                  }
                : { color: "#fff", background: "red", p: 3 }
            }
          >
            {msgState.msg}
          </Typography>

          {/* only success, show below */}
          {msgState.type === "success" && (
            <>
              {msgState.tokenString[0] === "B" && (
                <Typography variant="h4" sx={{ pt: 5, mx: { xs: 1, md: 0 } }}>
                  Serving - ☕
                </Typography>
              )}

              {msgState.tokenString[0] === "M" && (
                <Typography variant="h4" sx={{ pt: 5, mx: { xs: 1, md: 0 } }}>
                  Serving - 🥪
                </Typography>
              )}

              <Box sx={{ pt: 5, px: 1 }}>
                {/* here display token string,qrcode later */}
                <Typography variant="h6">Food Token :</Typography>
                <Typography
                  variant="body1"
                  sx={{
                    py: 2,
                    border: "1px solid brown",
                    textAlign: { xs: "unset", sm: "center" },
                  }}
                >
                  {msgState.tokenString}
                </Typography>
              </Box>

              <Box
                sx={{
                  pt: 5,
                  pb: 3,
                  px: 4,
                  my: 4,
                  border: "1px solid brown",
                  textAlign: { xs: "unset", sm: "center" },
                  mx: { xs: 1, md: 0 },
                }}
              >
                <Typography variant="h5" sx={{ py: 2 }}>
                  {" "}
                  Scan Qr-code here :
                </Typography>
                {/* react-qr-code component here */}
                <GenerateQrCode tokenCode={msgState.tokenString} />
              </Box>
            </>
          )}
        </Box>

        <Stack sx={{ alignItems: "flex-end", py: 5, mt: 5, mr: 1 }}>
          <Button
            variant="outlined"
            color="warning"
            onClick={() => goBackFunc()}
          >
            Go Back
          </Button>
        </Stack>
      </ComponentWrapper>
    </>
  );
};

export default GenerateTokenResponse;
