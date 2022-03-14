import React, { useEffect, useState } from "react";
import PageTitle from "../../../components/private/navigation/PageTitle";

import GetUserTokensApiCall from "../../../apis/employee/GetUserTokensApiCall";

import useActionDispatcher from "../../../hooks/useActionDispatcher";
import useStateValues from "../../../hooks/useStateValues";
import ToastFunc from "../../../helpers/toasts/ToastFunc";
import MyTokens from "../../../components/private/employee/MyTokens";
import { useNavigate } from "react-router-dom";

const UserTokensPage = () => {
  const [myTokens, setMyTokens] = useState(null);

  const dispatch = useActionDispatcher();
  const { jwtToken, userData } = useStateValues();

  const navigate = useNavigate();

  useEffect(() => {
    // the below code helps in accessing only if user is verified
    if (userData.accountVerified === false) {
      navigate("/dashboard/accountnotverified");
      return;
    }
    (async () => {
      dispatch({ type: "loadingOn" });
      const response = await GetUserTokensApiCall(jwtToken);
      dispatch({ type: "loadingOff" });

      if (response.data.type === "success") {
        //api call success
        setMyTokens(response.data.userTokens);
        ToastFunc({ msg: response.data.msg, type: "success" });
      } else {
        //apicall failed
        ToastFunc({ msg: response.data.msg, type: "error" });
        setMyTokens("empty");
      }
    })();
  }, [dispatch, jwtToken, navigate, userData.accountVerified]);

  return (
    <>
      {/* this is pageTitle */}
      <>
        <PageTitle title="My Tokens" />
      </>

      {/* here all tokens in a table */}
      {myTokens === null ? (
        ""
      ) : (
        <>
          <MyTokens myTokens={myTokens} />
        </>
      )}
    </>
  );
};

export default UserTokensPage;
