import React from "react";
import LoginPage from "../Login/LoginPage";
import MainPage from "../Main/MainPage";

const MainScreens = {
  Login: {
    path: "/user/login",
    element: <LoginPage />,
  },
  Main: {
    path: "/main",
    element: <MainPage />,
  },
};

export const AppRouteDef = {
  ...MainScreens,
};
