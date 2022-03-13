import useRole from "../../hooks/useRole";
import { EMPLOYEE } from "../UserRoles";

const EmployeeProtected = ({ children, redirect }) => {
  const userRole = useRole();

  return userRole === EMPLOYEE ? children : redirect;
};

export default EmployeeProtected;
