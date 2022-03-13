import React from "react";
import { Route, Routes } from "react-router-dom";

import AppProvider from "./context/AppProvider";
import SignupPage from "./pages/public/SignupPage";
import SigninPage from "./pages/public/SigninPage";

import Dashboard from "./layouts/Dashboard";

import Protected from "./helpers/Protected";
import { Toaster } from "react-hot-toast";
import Loader from "./helpers/Loader";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import WelcomeUser from "./pages/private/WelcomeUser";

const theme = createTheme({
  palette: {
    background: {
      default: "rgba(51,221,33,0.69)",
    },
  },
});

const App = () => {
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
            <Route path="go" element={<SignupPage />} />
            <Route path="*" element={<WelcomeUser />} />
          </Route>

          <Route path="*" element={<SigninPage />} />
        </Routes>

        {/* loader */}
        <Loader />
      </AppProvider>

      {/* react hot toast */}
      <Toaster position="top-right" reverseOrder={true} />
    </>
  );
};

export default App;
