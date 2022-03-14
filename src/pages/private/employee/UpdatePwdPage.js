import React, { useEffect, useState } from "react";
import UpdatePwd from "../../../components/private/employee/UpdatePwd";
import PageTitle from "../../../components/private/navigation/PageTitle";

import useActionDispatcher from "../../../hooks/useActionDispatcher";
import useStateValues from "../../../hooks/useStateValues";

import UpdatePwdApiCall from "../../../apis/employee/UpdatePwdApiCall";
import ToastFunc from "../../../helpers/toasts/ToastFunc";
import UpdatePwdResponse from "../../../components/private/employee/UpdatePwdResponse";
import { useNavigate } from "react-router-dom";

const UpdatePwdPage = () => {
  const [state, setState] = useState({ oldPwd: "", newPwd: "" });
  const [errorState, setErrorState] = useState({
    oldPwdError: false,
    newPwdError: false,
    hasError: false,
  });
  const [pwdUpdateResponse, setPwdUpdateResponse] = useState(null);

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
    setState((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
  };

  const goBackFunc = () => {
    setPwdUpdateResponse(null);
  };
  const validateStateValues = () => {
    const { oldPwd, newPwd } = state;

    const oldPwdTest =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(oldPwd);
    const newPwdTest =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(newPwd);

    const oldPwdLength = oldPwd.length < 6 ? true : false;
    const newPwdLength = newPwd.length < 6 ? true : false;

    //setting errorState
    setErrorState((prev) => ({
      ...prev,
      oldPwdError: oldPwdLength || !oldPwdTest,
      newPwdError: newPwdLength || !newPwdTest,
    }));

    //if any error variable present return true
    //we are !oldPwdTest -> because .test(oldPwd) -> return true ,if no error Found
    //and we are setting error here
    return oldPwdLength || newPwdLength || !oldPwdTest || !newPwdTest
      ? true
      : false;
  };

  const updatePasswordFunc = async () => {
    //this validates state values and return either true/false
    const isErrorPresent = validateStateValues();
    setErrorState((prev) => ({ ...prev, hasError: isErrorPresent }));
    if (isErrorPresent) {
      //error present so dont sumbit form
      return;
    } else {
      if (errorState.hasError) {
        return;
      }
      //api call here
      dispatch({ type: "loadingOn" });
      const response = await UpdatePwdApiCall(state, jwtToken);
      dispatch({ type: "loadingOff" });

      // setting state to initial value
      setState({ oldPwd: "", newPwd: "" });

      if (response.data.type === "success") {
        //api call success
        ToastFunc({ msg: response.data.msg, type: "success" });
        setPwdUpdateResponse(response.data);
      } else {
        //apicall failed
        ToastFunc({ msg: response.data.msg, type: "error" });
        setPwdUpdateResponse(response.data);
      }
    }
  };

  return (
    <>
      {/* this is pageTitle */}
      <>
        <PageTitle title="Update Password" />
      </>

      {/* here updatePwd and response components*/}
      {pwdUpdateResponse === null ? (
        <>
          <UpdatePwd
            state={state}
            handleChange={handleChange}
            updatePasswordFunc={updatePasswordFunc}
            errorState={errorState}
          />
        </>
      ) : (
        <>
          <UpdatePwdResponse
            pwdUpdateResponse={pwdUpdateResponse}
            goBackFunc={goBackFunc}
          />
        </>
      )}
    </>
  );
};

export default UpdatePwdPage;
