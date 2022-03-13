import React from "react";
import MyProfile from "../employee/MyProfile";

const GetSingleUserInfo = ({ userState }) => {
  return (
    <>
      {/* this is borrwoed from employee,, same component */}
      <MyProfile profileState={userState} />
    </>
  );
};

export default GetSingleUserInfo;
