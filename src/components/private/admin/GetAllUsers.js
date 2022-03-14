import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ComponentWrapper from "../ComponentWrapper";

const GetAllUsers = ({ usersState }) => {
  return (
    <>
      <ComponentWrapper>
        <Typography variant="h5">All users</Typography>
        <List sx={{ py: 1, border: "1px solid green" }}>
          {usersState.map((userObj) => (
            <Box key={userObj._id}>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to={`/dashboard/userInfo/${userObj._id}`}
                >
                  <Typography>
                    {"    "}
                    {userObj.name}
                  </Typography>
                  {/* <ListItemText primary={userObj.name} />
                <ListItemText primary={userObj.email} /> */}
                </ListItemButton>
              </ListItem>
              <Divider />
            </Box>
          ))}
        </List>
      </ComponentWrapper>
    </>
  );
};

export default GetAllUsers;
