import axios from "axios";

const GetAllTokensApiCall = async (jwtToken) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_DOMAIN_NAME}/${process.env.REACT_APP_GET_ALLTOKENS}`,
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

export default GetAllTokensApiCall;
