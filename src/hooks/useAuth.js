import useStateValues from "./useStateValues";

const useAuth = () => {
  const { jwtToken } = useStateValues();

  return jwtToken ? true : false;
};

export default useAuth;
