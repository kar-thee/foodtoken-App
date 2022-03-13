import React from "react";
import MyTokens from "../employee/MyTokens";

const GetAllTokens = ({ tokenState }) => {
  return (
    <>
      <MyTokens myTokens={tokenState} />
    </>
  );
};

export default GetAllTokens;
