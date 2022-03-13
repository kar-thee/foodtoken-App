import React, { useEffect, useState } from "react";
import PageTitle from "../../../components/private/navigation/PageTitle";
import ToastFunc from "../../../helpers/toasts/ToastFunc";

import GetUserProfileApiCall from "../../../apis/employee/GetUserProfileApiCall";
import useActionDispatcher from "../../../hooks/useActionDispatcher";
import useStateValues from "../../../hooks/useStateValues";
import MyProfile from "../../../components/private/employee/MyProfile";

const UserProfilePage = () => {
  const [profileState, setProfileState] = useState(null);
  const dispatch = useActionDispatcher();
  const { jwtToken, userData } = useStateValues();

  useEffect(() => {
    (async () => {
      dispatch({ type: "loadingOn" });
      const response = await GetUserProfileApiCall(userData.userId, jwtToken);
      dispatch({ type: "loadingOff" });

      if (response.data.type === "success") {
        //api call success
        setProfileState(response.data.userFound);
        ToastFunc({ msg: response.data.msg, type: "success" });
      } else {
        //apicall failed
        ToastFunc({ msg: response.data.msg, type: "error" });
        setProfileState("empty");
      }
    })();
  }, [dispatch, jwtToken, userData.userId]);

  return (
    <>
      {/* this is pageTitle */}
      <>
        <PageTitle title="My Profile" />
      </>

      {profileState && <MyProfile profileState={profileState} />}
    </>
  );
};

export default UserProfilePage;
