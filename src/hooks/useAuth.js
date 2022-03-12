import useStateValues from "./useStateValues";

const useAuth = () => {
  const { jwtToken } = useStateValues();

  return jwtToken && jwtToken !== null ? true : false;
};

export default useAuth;
