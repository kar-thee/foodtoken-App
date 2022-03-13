import useRole from "../../hooks/useRole";
import { ADMIN } from "../UserRoles";

const AdminProtected = ({ children, redirect }) => {
  const userRole = useRole();

  return userRole === ADMIN ? children : redirect;
};

export default AdminProtected;
