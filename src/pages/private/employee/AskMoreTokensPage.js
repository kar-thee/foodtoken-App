import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AskMoreTokens from "../../../components/private/employee/AskMoreTokens";
import AskMoreTokensResponse from "../../../components/private/employee/AskMoreTokensResponse";
import PageTitle from "../../../components/private/navigation/PageTitle";
import ToastFunc from "../../../helpers/toasts/ToastFunc";

import useActionDispatcher from "../../../hooks/useActionDispatcher";
import useStateValues from "../../../hooks/useStateValues";

import AskMoreTokensApiCall from "../../../apis/employee/AskMoreTokensApiCall";

const AskMoreTokensPage = () => {
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

  const RequestMoreTokensFunc = async () => {
    // checking if state(string) is empty
    if (state.length < 1) {
      return;
    }
    //here call api
    dispatch({ type: "loadingOn" });
    const data = { noOfMonthsExtra: state };
    const response = await AskMoreTokensApiCall(data, jwtToken);
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
        <PageTitle title="Request More Tokens" />
      </>

      {msgState === null ? (
        <AskMoreTokens
          RequestMoreTokensFunc={RequestMoreTokensFunc}
          handleChange={handleChange}
          state={state}
        />
      ) : (
        <AskMoreTokensResponse msgState={msgState} goBackFunc={goBackFunc} />
      )}
    </>
  );
};

export default AskMoreTokensPage;
