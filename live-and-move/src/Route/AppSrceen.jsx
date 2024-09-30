import React from "react";
import AppPages from "./AppPages";
import Footer from "../Main/Footer";
import Header from "../Main/Header";
import { useLocation } from "react-router-dom";

function AppSrceen(props) {
  const location = useLocation();

  const isStartPage = location.pathname === "/";

  return (
    <>
      {!isStartPage && <Header />}
      <AppPages />
      <Footer />
    </>
  );
}

export default AppSrceen;
