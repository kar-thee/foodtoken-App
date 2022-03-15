import React from "react";

import QRCode from "react-qr-code";

const GenerateQrCode = ({ tokenCode }) => {
  return (
    <>
      <QRCode value={tokenCode} />
    </>
  );
};

export default GenerateQrCode;
