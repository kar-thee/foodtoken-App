import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";

const Protected = ({ children, redirect }) => {
  const isTokenPresent = useAuth();
  const isRolePresent = useRole();

  //if role is not present(i.e false) return false
  if (!isRolePresent) {
    return redirect;
  }
  //if token present ->return true or false

  return isTokenPresent ? children : redirect;
};

export default Protected;
