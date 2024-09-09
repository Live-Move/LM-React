import React from "react";
import LoginPage from "../Login/LoginPage";
import MainPage from "../Main/MainPage";
import ListPage from "../List/ListPage";

const MainScreens = {
  Login: {
    path: "/user/login",
    element: <LoginPage />,
  },
  Main: {
    path: "/main",
    element: <MainPage />,
  },
  List: {
    path: "/list",
    element: <ListPage />,
  },
};

export const AppRouteDef = {
  ...MainScreens,
};
