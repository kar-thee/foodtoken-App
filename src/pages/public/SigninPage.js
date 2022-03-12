/* eslint-disable no-useless-escape */
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SigninApiCall from "../../apis/auth/SigninApiCall";
import SigninComponent from "../../components/public/SigninComponent";
import ToastFunc from "../../helpers/toasts/ToastFunc";

import useActionDispatcher from "../../hooks/useActionDispatcher";

const SigninPage = () => {
  const initialValue = {
    email: "",
    password: "",
  };
  const initialErrorState = {
    emailError: false,
    passwordError: false,
    hasError: false,
  };
  const [state, setState] = useState(initialValue);
  const [errorState, setErrorState] = useState(initialErrorState);
  const dispatch = useActionDispatcher();
  const navigate = useNavigate();

  const handleChange = (ev) => {
    setState((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
  };

  const validateStateValues = () => {
    const { email, password } = state;

    const emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    );
    const passwordTest =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

    const emailError = email.length < 1 ? true : false;
    const passwordError = password.length < 8 ? true : false;

    //setting errorState
    setErrorState((prev) => ({
      ...prev,
      emailError: emailError || !emailTest,
      passwordError: passwordError || !passwordTest,
    }));

    //if any error variable present return true
    return emailError || passwordError || !emailTest || !passwordTest
      ? true
      : false;
  };

  const submitForm = async () => {
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
      const response = await SigninApiCall(state);
      dispatch({ type: "loadingOff" });

      if (response.data.type === "success") {
        //api call success
        dispatch({
          type: "signIn",
          payload: {
            jwtToken: response.data.tokenGenerated,
            userData: response.data.userData,
          },
        });
        navigate("/dashboard");
        ToastFunc({ msg: response.data.msg, type: "success" });
      } else {
        //apicall failed
        ToastFunc({ msg: response.data.msg, type: "error" });
      }
    }
  };

  return (
    <>
      <>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3">SignIn</Typography>
        </Box>
      </>
      <SigninComponent
        state={state}
        errorState={errorState}
        submitForm={submitForm}
        handleChange={handleChange}
      />
    </>
  );
};

export default SigninPage;
