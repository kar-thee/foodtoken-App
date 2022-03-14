import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PageTitle from "../../../components/private/navigation/PageTitle";
import ToastFunc from "../../../helpers/toasts/ToastFunc";

import useActionDispatcher from "../../../hooks/useActionDispatcher";
import useStateValues from "../../../hooks/useStateValues";

import GetAllUsersWithTokenRequestApiCall from "../../../apis/admin/GetAllUsersWithTokenRequestApiCall";
import GiveMoreTokensApiCall from "../../../apis/admin/GiveMoreTokensApiCall";

import GiveMoreTokens from "../../../components/private/admin/GiveMoreTokens";
import GiveMoreTokensResponse from "../../../components/private/admin/GiveMoreTokensResponse";

const GiveMoreTokensPage = () => {
  const [selectedUser, setSelectedUserState] = useState("");
  const [selectedMonths, setSelectedMonthsState] = useState("");
  const [usersState, setUsersState] = useState("");

  const navigate = useNavigate();
  const dispatch = useActionDispatcher();
  const { jwtToken } = useStateValues();

  useEffect(() => {
    (async () => {
      dispatch({ type: "loadingOn" });
      const response = await GetAllUsersWithTokenRequestApiCall(jwtToken);
      dispatch({ type: "loadingOff" });

      if (response.data.type === "success") {
        //api call success
        setUsersState(response.data.usersWithTokenRequest);
        ToastFunc({ msg: response.data.msg, type: "success" });
      } else {
        //apicall failed
        ToastFunc({ msg: response.data.msg, type: "error" });
        setUsersState(response.data.usersWithTokenRequest);
      }
    })();
  }, [dispatch, jwtToken]);

  const handleChange = (ev) => {
    setSelectedUserState(ev.target.value);
  };

  const handleMonthsChange = (ev) => {
    setSelectedMonthsState(ev.target.value);
  };

  const AuthorizeUserFunc = async () => {
    if (selectedUser.length < 1) {
      return;
    }
    //apicall here
    dispatch({ type: "loadingOn" });
    const data = { userId: selectedUser, noOfMonthsFoodAccess: selectedMonths };
    const response = await GiveMoreTokensApiCall(data, jwtToken);
    dispatch({ type: "loadingOff" });

    if (response.data.type === "success") {
      //api call success
      ToastFunc({ msg: response.data.msg, type: "success" });
      navigate("/dashboard");
    } else {
      //apicall failed
      ToastFunc({ msg: response.data.msg, type: "error" });
      navigate("/dashboard");
    }
  };
  return (
    <>
      {/* this is pageTitle */}
      <>
        <PageTitle title="Authorize User" />
      </>
      {/* here AuthorizeUser component */}
      {usersState.length > 0 ? (
        <GiveMoreTokens
          usersState={usersState}
          selectedUser={selectedUser}
          handleChange={handleChange}
          selectedMonths={selectedMonths}
          handleMonthsChange={handleMonthsChange}
          AuthorizeUserFunc={AuthorizeUserFunc}
        />
      ) : (
        <>
          <GiveMoreTokensResponse />
        </>
      )}
    </>
  );
};

export default GiveMoreTokensPage;
