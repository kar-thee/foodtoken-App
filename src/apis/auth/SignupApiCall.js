import axios from "axios";

const SignupApiCall = async (data) => {
  // data -> {email,password,name,employeeId}
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_DOMAIN_NAME}/${process.env.REACT_APP_SIGNUP}`,
      data
    );
    return response;
  } catch (err) {
    return err.response;
  }
};

export default SignupApiCall;
