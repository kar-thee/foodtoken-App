import React, { useState } from "react";

import VerifyToken from "../../../components/private/canteen/VerifyToken";
import PageTitle from "../../../components/private/navigation/PageTitle";

import useActionDispatcher from "../../../hooks/useActionDispatcher";
import useStateValues from "../../../hooks/useStateValues";

import VerifyTokenApiCall from "../../../apis/canteen/VerifyTokenApiCall";
import ToastFunc from "../../../helpers/toasts/ToastFunc";
import VerifyTokenResponse from "../../../components/private/canteen/VerifyTokenResponse";

const VerifyTokenPage = () => {
  const [state, setState] = useState("");
  const [msgState, setMsgState] = useState(null);

  const dispatch = useActionDispatcher();
  const { jwtToken } = useStateValues();

  const handleChange = (ev) => {
    setState(ev.target.value);
  };

  const goBackFunc = () => {
    setMsgState(null);
  };

  const VerifyTokenFunc = async () => {
    // checking if state(string) is empty
    if (state.length < 1) {
      return;
    }
    //here call api
    dispatch({ type: "loadingOn" });
    const data = { tokenFromRequest: state };
    const response = await VerifyTokenApiCall(data, jwtToken);
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
        <PageTitle title="Verify Token" />
      </>

      {/* this is verifyTokenComponent (wrapper + form) or (wrapper+resultMsg) */}
      {msgState === null ? (
        <>
          {/* here comes verifyTokenForm*/}
          <VerifyToken
            state={state}
            handleChange={handleChange}
            VerifyTokenFunc={VerifyTokenFunc}
          />
        </>
      ) : (
        <>
          {/* here comes msgDelivery*/}
          <VerifyTokenResponse msgState={msgState} goBackFunc={goBackFunc} />
        </>
      )}
    </>
  );
};

export default VerifyTokenPage;
