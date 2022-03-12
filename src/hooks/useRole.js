import { ADMIN, CANTEEN, EMPLOYEE } from "../helpers/UserRoles";
import useStateValues from "./useStateValues";

const useRole = () => {
  const { userData } = useStateValues();
  const role = userData ? userData.userRole : null;

  //getting role from state
  switch (role) {
    case ADMIN: {
      return ADMIN;
    }
    case EMPLOYEE: {
      return EMPLOYEE;
    }
    case CANTEEN: {
      return CANTEEN;
    }
    default: {
      return false;
    }
  }
};

export default useRole;
