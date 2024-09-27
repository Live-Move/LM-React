import React from "react";
import MainPage from "../Main/MainPage";
import ListPage from "../List/ListPage";
import LoginMain from "../Login/LoginMain";
import SignupMain from "../Signup/SignupMain";
import SignupPage from "../Signup/SignupPage";
import ListDetailpage from "../ListDetail/ListDetailpage";
import Cart from "../Cart/Cart";
import KakaoLoginPage from "../Login/Social/Kakao/KakaoLoginPage";
import AccountMain from "../Login/Account/AccountMain";
import AccountPage from "../Login/Account/AccountPage";
import MyPageMain from "../MyPage/MyPageMain";

const MainScreens = {
  SocialLogin: {
    path: "/user/social/kakao",
    element: <KakaoLoginPage />,
  },
  Login: {
    path: "/user/login",
    element: <LoginMain />,
  },
  Account: {
    path: "/account",
    element: <AccountMain />,
  },
  AccountPage: {
    path: "/account/page",
    element: <AccountPage />,
  },
  MyPage: {
    path: "/mypage",
    element: <MyPageMain />,
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
  Cart: {
    path: "/cart",
    element: <Cart />,
  },
};

export const AppRouteDef = {
  ...MainScreens,
};
