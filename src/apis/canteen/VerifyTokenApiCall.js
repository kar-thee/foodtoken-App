import axios from "axios";

const VerifyTokenApiCall = async (data, jwtToken) => {
  //data -> {tokenFromRequest - mealToken or beverageToken}
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_DOMAIN_NAME}/${process.env.REACT_APP_CANTEEN_VERIFYTOKEN}`,
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

export default VerifyTokenApiCall;
