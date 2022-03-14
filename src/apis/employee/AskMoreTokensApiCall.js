import axios from "axios";

const AskMoreTokensApiCall = async (data, jwtToken) => {
  //data -> {noOfMonthsExtra}
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_DOMAIN_NAME}/${process.env.REACT_APP_ASK_MORETOKENS}`,
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

export default AskMoreTokensApiCall;
