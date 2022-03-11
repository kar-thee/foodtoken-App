import axios from "axios";

const GetUserProfileApiCall = (jwtToken) => {
  try {
    const response = axios.get(
      `${process.env.REACT_APP_API_DOMAIN_NAME}/${process.env.REACT_APP_GET_USER_PROFILE}`,
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

export default GetUserProfileApiCall;
