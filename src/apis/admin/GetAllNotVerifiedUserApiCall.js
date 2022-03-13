import axios from "axios";

const GetAllNotVerifiedUserApiCall = async (jwtToken) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_DOMAIN_NAME}/${process.env.REACT_APP_GETALL_NOTVERIFIED_USERS}`,
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

export default GetAllNotVerifiedUserApiCall;
