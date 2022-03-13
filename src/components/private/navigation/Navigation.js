import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import MenuIcon from "@mui/icons-material/Menu";
import FoodBankIcon from "@mui/icons-material/FoodBank";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import UserNavList from "./UserNavList";

const Navigation = ({ navFeaturesList }) => {
  // navFeaturesList will give navList based on userRole called from user's layout
  const [userEl, setUserEl] = useState(null);
  const [navEl, setNavEl] = useState(null);

  //   to navigate when clicked on navLinks
  const navigate = useNavigate();
  const goToWhere = (whereTo) => {
    navigate(`${whereTo}`);
  };

  // for user AvatarButton UserMenu
  const handleOpenUserIcon = (ev) => {
    setUserEl(ev.currentTarget);
  };
  const handleCloseUserIcon = () => {
    setUserEl(null);
  };

  // for opening navMenu (below md view)
  const handleOpenNavList = (ev) => {
    setNavEl(ev.currentTarget);
  };
  const handleCloseNavList = () => {
    setNavEl(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ background: "#00695c" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{ display: { xs: "none", md: "block" }, cursor: "pointer" }}
              onClick={() => goToWhere("")}
            >
              <FoodBankIcon />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              foodTokenApp
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={(ev) => handleOpenNavList(ev)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={navEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(navEl)}
                onClose={() => handleCloseNavList()}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {navFeaturesList.map(({ name, href }) => (
                  <MenuItem key={name} onClick={() => handleCloseNavList()}>
                    <Button
                      sx={{ color: "#009688", textAlign: "center" }}
                      onClick={() => goToWhere(href)}
                    >
                      {name}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* this is logo showing in mobileView */}
            <Box
              sx={{ display: { xs: "block", md: "none" }, cursor: "pointer" }}
              onClick={() => goToWhere("")}
            >
              <FoodBankIcon />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              foodTokenApp
            </Typography>

            {/* this is the navigation in above md View */}
            <Box
              sx={{ flexGrow: 1, ml: 5, display: { xs: "none", md: "flex" } }}
            >
              {navFeaturesList.map(({ name, href }) => (
                <Button
                  key={name}
                  sx={{ my: 2, color: "white", display: "block", mr: 3 }}
                  onClick={() => goToWhere(href)}
                >
                  {name}
                </Button>
              ))}
            </Box>

            {/* this is user avatar with menu list */}
            <Box sx={{ flexGrow: 0, mr: 1 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={(ev) => handleOpenUserIcon(ev)}
                  sx={{ p: 0 }}
                >
                  <Avatar sx={{ background: "#004d40" }}>
                    <AssignmentIndIcon />
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={userEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(userEl)}
                onClose={() => handleCloseUserIcon()}
              >
                {/* this down  will give profile,logout,updatePwd (all user related) */}
                <Stack>
                  <UserNavList />
                </Stack>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navigation;
