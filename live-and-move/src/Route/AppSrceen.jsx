import React, { useState } from "react";
import AppPages from "./AppPages";
import Footer from "../Main/Footer";
import Header from "../Main/Header";
import { useLocation } from "react-router-dom";

function AppSrceen(props) {
  const [loginState, setLoginState] = useState(false);
  const location = useLocation();

  const isStartPage = location.pathname === "/";

  return (
    <>
      {!isStartPage && (
        <Header loginState={loginState} setLoginState={setLoginState} />
      )}
      <AppPages />
      <Footer />
    </>
  );
}

export default AppSrceen;
