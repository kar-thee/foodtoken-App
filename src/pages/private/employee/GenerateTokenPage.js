import React, { useState, useEffect } from "react";

import GenerateToken from "../../../components/private/employee/GenerateToken";
import GenerateTokenResponse from "../../../components/private/employee/GenerateTokenResponse";
import PageTitle from "../../../components/private/navigation/PageTitle";

import ToastFunc from "../../../helpers/toasts/ToastFunc";

import useActionDispatcher from "../../../hooks/useActionDispatcher";
import useStateValues from "../../../hooks/useStateValues";

import GenerateTokenApiCall from "../../../apis/employee/GenerateTokenApiCall";
import { useNavigate } from "react-router-dom";

const GenerateTokenPage = () => {
  const [state, setState] = useState("");
  const [msgState, setMsgState] = useState(null);

  const dispatch = useActionDispatcher();
  const { jwtToken, userData } = useStateValues();

  const navigate = useNavigate();
  useEffect(() => {
    // the below code helps in accessing only if user is verified
    if (userData.accountVerified === false) {
      navigate("/dashboard/accountnotverified");
    }
  }, [navigate, userData.accountVerified]);

  const handleChange = (ev) => {
    setState(ev.target.value);
  };

  const goBackFunc = () => {
    setMsgState(null);
  };

  const GenerateTokenFunc = async () => {
    // checking if state(string) is empty
    if (state.length < 1) {
      return;
    }
    //here call api
    dispatch({ type: "loadingOn" });
    const data = { tokenType: state };
    const response = await GenerateTokenApiCall(data, jwtToken);
    dispatch({ type: "loadingOff" });
    setState("");
    if (response.data.type === "success") {
      //api call success
      setMsgState(response.data);
      ToastFunc({ msg: response.data.msg, type: "success" });
    } else {
      //apicall failed
      ToastFunc({ msg: response.data.msg, type: "error" });
      setMsgState(response.data);
    }
  };

  return (
    <>
      {/* this is pageTitle */}
      <>
        <PageTitle title="Generate Token" />
      </>

      {/* this is generateTokenComponent (wrapper + form) or (wrapper+resultMsg) */}
      {msgState === null ? (
        <>
          {/* here comes generateTokenForm*/}
          <GenerateToken
            state={state}
            handleChange={handleChange}
            GenerateTokenFunc={GenerateTokenFunc}
          />
        </>
      ) : (
        <>
          {/* here comes msgDelivery*/}
          <GenerateTokenResponse msgState={msgState} goBackFunc={goBackFunc} />
        </>
      )}
    </>
  );
};

export default GenerateTokenPage;
