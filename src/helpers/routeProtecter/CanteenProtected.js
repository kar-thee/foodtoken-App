import useRole from "../../hooks/useRole";
import { CANTEEN } from "../UserRoles";

const CanteenProtected = ({ children, redirect }) => {
  const userRole = useRole();

  return userRole === CANTEEN ? children : redirect;
};

export default CanteenProtected;
