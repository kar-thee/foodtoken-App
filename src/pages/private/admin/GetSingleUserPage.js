import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import GetSingleUserApiCall from "../../../apis/admin/GetSingleUserApiCall";
import GetSingleUserInfo from "../../../components/private/admin/GetSingleUserInfo";
import PageTitle from "../../../components/private/navigation/PageTitle";
import ToastFunc from "../../../helpers/toasts/ToastFunc";
import useActionDispatcher from "../../../hooks/useActionDispatcher";
import useStateValues from "../../../hooks/useStateValues";

const GetSingleUserPage = () => {
  const [userState, setUserState] = useState("");
  const { userId } = useParams();

  const dispatch = useActionDispatcher();
  const { jwtToken } = useStateValues();

  useEffect(() => {
    (async () => {
      dispatch({ type: "loadingOn" });
      const response = await GetSingleUserApiCall(userId, jwtToken);
      dispatch({ type: "loadingOff" });

      if (response.data.type === "success") {
        //api call success
        setUserState(response.data.userFound);
        ToastFunc({ msg: response.data.msg, type: "success" });
      } else {
        //apicall failed
        ToastFunc({ msg: response.data.msg, type: "error" });
      }
    })();
  }, [dispatch, jwtToken, userId]);
  return (
    <>
      {/* this is pageTitle */}
      <>
        <PageTitle title="UserInfo" />
      </>

      <GetSingleUserInfo userState={userState} />
    </>
  );
};

export default GetSingleUserPage;
