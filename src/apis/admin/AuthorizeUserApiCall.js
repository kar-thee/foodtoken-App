import axios from "axios";

const AuthorizeUserApiCall = (data, jwtToken) => {
  //data -> {userId,noOfMonthsFoodAccess}
  try {
    const response = axios.put(
      `${process.env.REACT_APP_API_DOMAIN_NAME}/${process.env.REACT_APP_AUTHORIZE_USER}`,
      data,
      {
        headers: {
          authorization: `BEARER ${jwtToken}`,
        },
      }
    );
    return response;
  } catch (err) {
    return err.response;
  }
};

export default AuthorizeUserApiCall;
