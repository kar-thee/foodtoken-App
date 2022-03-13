import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { EMPLOYEE } from "../../../helpers/UserRoles";
import useActionDispatcher from "../../../hooks/useActionDispatcher";
import useRole from "../../../hooks/useRole";

const UserNavList = ({ handleCloseUserIcon }) => {
  const userRole = useRole();
  const dispatch = useActionDispatcher();

  //   to navigate when clicked on navLinks
  const navigate = useNavigate();
  const goToWhere = (whereTo) => {
    navigate(`${whereTo}`);
  };

  const logOutFunc = () => {
    dispatch({ type: "signOut" });
  };

  return (
    <>
      {/* profileView only for employees */}
      {userRole === EMPLOYEE && (
        <>
          <Button
            sx={{ color: "#009688", textAlign: "center" }}
            onClick={() => goToWhere("myprofile")}
          >
            My Profile
          </Button>

          <Button
            sx={{ color: "#009688", textAlign: "center" }}
            onClick={() => goToWhere("changepwd")}
          >
            Update Password
          </Button>
        </>
      )}

      <Button
        sx={{ color: "#009688", textAlign: "center" }}
        onClick={() => logOutFunc()}
      >
        Logout
      </Button>
    </>
  );
};

export default UserNavList;
