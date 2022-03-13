import axios from "axios";

const GetUserTokensApiCall = async (jwtToken) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_DOMAIN_NAME}/${process.env.REACT_APP_GET_USER_TOKENS}`,
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

export default GetUserTokensApiCall;
