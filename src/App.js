import React from "react";
import { Route, Routes } from "react-router-dom";

import AppProvider from "./context/AppProvider";
import SignupPage from "./pages/public/SignupPage";
import SigninPage from "./pages/public/SigninPage";

import Dashboard from "./layouts/Dashboard";

import Protected from "./helpers/routeProtecter/Protected";
import { Toaster } from "react-hot-toast";
import Loader from "./helpers/Loader";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import WelcomeUser from "./pages/private/WelcomeUser";

// admin
import GetAllUsersPage from "./pages/private/admin/GetAllUsersPage";
import GetAllTokensPage from "./pages/private/admin/GetAllTokensPage";
import AuthorizeUserPage from "./pages/private/admin/AuthorizeUserPage";
// canteen
import VerifyTokenPage from "./pages/private/canteen/VerifyTokenPage";
// employee
import GenerateTokenPage from "./pages/private/employee/GenerateTokenPage";
import UserTokensPage from "./pages/private/employee/UserTokensPage";
import UserProfilePage from "./pages/private/employee/UserProfilePage";
import UpdatePwdPage from "./pages/private/employee/UpdatePwdPage";

// this helps in accessing only userAllowed routes/pages
import EmployeeProtected from "./helpers/routeProtecter/EmployeeProtected";
import CanteenProtected from "./helpers/routeProtecter/CanteenProtected";
import AdminProtected from "./helpers/routeProtecter/AdminProtected";
import GetSingleUserPage from "./pages/private/admin/GetSingleUserPage";
import AccountNotVerified from "./pages/private/AccountNotVerified";
import AskMoreTokensPage from "./pages/private/employee/AskMoreTokensPage";
import GiveMoreTokensPage from "./pages/private/admin/GiveMoreTokensPage";

const App = () => {
  const theme = createTheme({
    palette: {
      background: {
        default: "rgba(51,221,33,0.69)",
      },
    },
  });
  return (
    <>
      <AppProvider>
        <ThemeProvider theme={theme} />
        <CssBaseline />

        <Routes>
          <Route path="/" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />

          <Route
            path="/dashboard"
            element={
              <Protected redirect={<SigninPage />}>
                <Dashboard />
              </Protected>
            }
          >
            <Route path="" element={<WelcomeUser />} />

            {/* admin routes */}
            <Route
              path="getallusers"
              element={
                <AdminProtected redirect={<WelcomeUser />}>
                  <GetAllUsersPage />
                </AdminProtected>
              }
            />
            <Route
              path="userInfo/:userId"
              element={
                <AdminProtected redirect={<WelcomeUser />}>
                  <GetSingleUserPage />
                </AdminProtected>
              }
            />
            <Route
              path="getalltokens"
              element={
                <AdminProtected redirect={<WelcomeUser />}>
                  <GetAllTokensPage />
                </AdminProtected>
              }
            />
            <Route
              path="authorizeuser"
              element={
                <AdminProtected redirect={<WelcomeUser />}>
                  <AuthorizeUserPage />
                </AdminProtected>
              }
            />
            <Route
              path="givemoretokens"
              element={
                <AdminProtected redirect={<WelcomeUser />}>
                  <GiveMoreTokensPage />
                </AdminProtected>
              }
            />

            {/* canteen route */}
            <Route
              path="verifytoken"
              element={
                <CanteenProtected redirect={<WelcomeUser />}>
                  <VerifyTokenPage />
                </CanteenProtected>
              }
            />

            {/* employee routes */}
            <Route
              path="generatetoken"
              element={
                <EmployeeProtected redirect={<WelcomeUser />}>
                  <GenerateTokenPage />
                </EmployeeProtected>
              }
            />
            <Route
              path="requestmoretokens"
              element={
                <EmployeeProtected redirect={<WelcomeUser />}>
                  <AskMoreTokensPage />
                </EmployeeProtected>
              }
            />
            <Route
              path="mytokens"
              element={
                <EmployeeProtected redirect={<WelcomeUser />}>
                  <UserTokensPage />
                </EmployeeProtected>
              }
            />
            <Route
              path="myprofile"
              element={
                <EmployeeProtected redirect={<WelcomeUser />}>
                  <UserProfilePage />
                </EmployeeProtected>
              }
            />
            <Route
              path="changepwd"
              element={
                <EmployeeProtected redirect={<WelcomeUser />}>
                  <UpdatePwdPage />
                </EmployeeProtected>
              }
            />
            <Route
              path="accountnotverified"
              element={
                <EmployeeProtected redirect={<WelcomeUser />}>
                  <AccountNotVerified />
                </EmployeeProtected>
              }
            />

            <Route path="*" element={<WelcomeUser />} />
          </Route>

          <Route path="*" element={<SigninPage />} />
        </Routes>

        {/* loader */}
        <Loader />
      </AppProvider>

      {/* react hot toast */}
      <Toaster position="bottom-right" reverseOrder={true} />
    </>
  );
};

export default App;
