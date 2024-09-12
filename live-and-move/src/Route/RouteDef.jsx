import React from "react";
import MainPage from "../Main/MainPage";
import ListPage from "../List/ListPage";
import LoginMain from "../Login/LoginMain";
import LoginPage from "../Login/LoginPage";
import SignupMain from "../Signup/SignupMain";
import SignupPage from "../Signup/SignupPage";
import ListDetailpage from "../ListDetail/ListDetailpage";

const MainScreens = {
  Login: {
    path: "/user/login",
    element: <LoginMain />,
  },
  LoginTest: {
    path: "/user/login/test",
    element: <LoginPage />,
  },
  Signup: {
    path: "/user/signup",
    element: <SignupMain />,
  },
  SignupTest: {
    path: "/user/signup/test",
    element: <SignupPage />,
  },
  Main: {
    path: "/main",
    element: <MainPage />,
  },
  List: {
    path: "/list",
    element: <ListPage />,
  },
  ListDetail: {
    path: "/listdetail",
    element: <ListDetailpage />,
  },
};

export const AppRouteDef = {
  ...MainScreens,
};
