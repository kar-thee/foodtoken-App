import axios from "axios";

const UpdatePwdApiCall = async (data, jwtToken) => {
  //data -> {oldPwd,newPwd}
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_DOMAIN_NAME}/${process.env.REACT_APP_UPDATE_PWD}`,
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

export default UpdatePwdApiCall;
