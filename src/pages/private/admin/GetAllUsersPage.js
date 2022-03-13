import React, { useEffect, useState } from "react";
import PageTitle from "../../../components/private/navigation/PageTitle";

import useActionDispatcher from "../../../hooks/useActionDispatcher";
import useStateValues from "../../../hooks/useStateValues";

import GetAllUserApiCall from "../../../apis/admin/GetAllUserApiCall";
import ToastFunc from "../../../helpers/toasts/ToastFunc";
import GetAllUsers from "../../../components/private/admin/GetAllUsers";
const GetAllUsersPage = () => {
  const [usersState, setUsersState] = useState("");

  const dispatch = useActionDispatcher();
  const { jwtToken } = useStateValues();

  useEffect(() => {
    (async () => {
      dispatch({ type: "loadingOn" });
      const response = await GetAllUserApiCall(jwtToken);
      dispatch({ type: "loadingOff" });

      if (response.data.type === "success") {
        //api call success
        setUsersState(response.data.usersFound);
        ToastFunc({ msg: response.data.msg, type: "success" });
      } else {
        //apicall failed
        ToastFunc({ msg: response.data.msg, type: "error" });
      }
    })();
  }, [dispatch, jwtToken]);

  return (
    <>
      {/* this is pageTitle */}
      <>
        <PageTitle title="GetAll Users" />
      </>

      {/* this is all user component */}
      {usersState && <GetAllUsers usersState={usersState} />}
    </>
  );
};

export default GetAllUsersPage;
