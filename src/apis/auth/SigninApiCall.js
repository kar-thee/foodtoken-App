import axios from "axios";

const SigninApiCall = (data) => {
  // data -> {email,password}
  try {
    const response = axios.post(
      `${process.env.REACT_APP_API_DOMAIN_NAME}/${process.env.REACT_APP_SIGNIN}`,
      data
    );
    return response;
  } catch (err) {
    return err.response;
  }
};

export default SigninApiCall;
