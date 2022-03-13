import axios from "axios";

const GenerateTokenApiCall = async (data, jwtToken) => {
  //data -> {tokenType}
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_DOMAIN_NAME}/${process.env.REACT_APP_GENERATE_TOKEN}`,
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

export default GenerateTokenApiCall;
