import React from "react";
import {
  FooterDiv,
  FooterLeft,
  FooterTop,
  FooterTopMenuUl,
  FooterTopMenuLi,
  TopATagColorChange,
  FooterBottomMenu,
  FooterBottomMenuUl,
  FooterBottomMenuLi,
  BottomATagColorChange,
  FooterBottomTelUl,
  FooterBottomTelLi,
  FooterBottomInfoUl,
  FooterBottomInfoSpan,
  FooterBottomCopyRight,
  FooterRight,
  SocialMediaATag,
  SocialMediaH3,
  SocialMediaSpan,
} from "./FooterCss.js";

function Footer(props) {
  const FooterTopMenuList = [
    {
      title: "회사소개",
      path: "/",
    },
    {
      title: "개인정보 처리방침",
      path: "/",
    },
    {
      title: "위치정보 이용약관",
      path: "/",
    },
    {
      title: "영상정보처리기기 운영/관리 방침",
      path: "/",
    },
    {
      title: "이용약관",
      path: "/",
    },
    {
      title: "경영이념",
      path: "/",
    },
    {
      title: "투자정보   ",
      path: "/",
    },
    {
      title: "인재채용",
      path: "/",
    },
    {
      title: "제휴 및 대리점 개설안내",
      path: "/",
    },
  ];

  const FooterBottomMenuList = [
    {
      title: "AS 에약",
      path: "/",
    },
    {
      title: "자주하는 질문",
      path: "/",
    },
    {
      title: "1:1 문의",
      path: "/",
    },
    {
      title: "매장 찾기",
      path: "/",
    },
    {
      title: "고객의 소리",
      path: "/",
    },
    {
      title: "대량 구매",
      path: "/",
    },
  ];

  const FooterBottomSocialMediaList = [
    {
      src: "/",
      href: "/",
    },
    {
      src: "/",
      href: "/",
    },
    {
      src: "/",
      href: "/",
    },
    {
      src: "/",
      href: "/",
    },
  ];

  return (
    <FooterDiv>
      <FooterLeft>
        <FooterTop>
          <div className="footer-top-menu">
            <FooterTopMenuUl>
              {FooterTopMenuList.map(({ title, path }, index) => {
                return (
                  <FooterTopMenuLi key={title + index}>
                    <TopATagColorChange href={path}>{title}</TopATagColorChange>
                  </FooterTopMenuLi>
                );
              })}
            </FooterTopMenuUl>
          </div>
        </FooterTop>

        <div className="footer-bottom">
          <FooterBottomMenu>
            <FooterBottomMenuUl>
              {FooterBottomMenuList.map(({ title, path }, index) => {
                return (
                  <FooterBottomMenuLi key={title + index}>
                    <BottomATagColorChange href={path}>
                      {title}
                    </BottomATagColorChange>
                  </FooterBottomMenuLi>
                );
              })}
            </FooterBottomMenuUl>
          </FooterBottomMenu>

          <div className="footer-bottom-tel">
            <FooterBottomTelUl>
              <FooterBottomTelLi>
                T. 제휴/대리점 개설문의 051-8711-3309
              </FooterBottomTelLi>
              <FooterBottomTelLi>M. liveandmove@gmaiil.com</FooterBottomTelLi>
            </FooterBottomTelUl>
          </div>

          <div className="footer-bottom-info">
            <FooterBottomInfoUl>
              <li>
                <FooterBottomInfoSpan className="footer-bottom-info-title">
                  (주)리브앤무브
                </FooterBottomInfoSpan>
              </li>
              <li>
                <FooterBottomInfoSpan className="footer-bottom-info-title">
                  대표이사
                </FooterBottomInfoSpan>
              </li>
              <li>
                <FooterBottomInfoSpan className="footer-bottom-info-content">
                  조동희 이은석 위지훈
                </FooterBottomInfoSpan>
              </li>
              <li>
                <FooterBottomInfoSpan className="footer-bottom-info-title">
                  본사
                </FooterBottomInfoSpan>
              </li>
              <li>
                <FooterBottomInfoSpan className="footer-bottom-info-content">
                  부산광역시 동래구 낙민동 온천천로 339번길
                </FooterBottomInfoSpan>
              </li>
              <li>
                <FooterBottomInfoSpan className="footer-bottom-info-title">
                  개인정보관리 책임자
                </FooterBottomInfoSpan>
              </li>
              <li>
                <FooterBottomInfoSpan className="footer-bottom-info-content">
                  고옴치
                </FooterBottomInfoSpan>
              </li>
              <li>
                <FooterBottomInfoSpan className="footer-bottom-info-title">
                  사업자등록번호
                </FooterBottomInfoSpan>
              </li>
              <li>
                <FooterBottomInfoSpan className="footer-bottom-info-content">
                  001-741861-01-014
                </FooterBottomInfoSpan>
              </li>
            </FooterBottomInfoUl>
          </div>

          <FooterBottomCopyRight>
            Copyrightⓒ Live And Move Corporation. All Rights Reserved.
          </FooterBottomCopyRight>
        </div>
      </FooterLeft>
      <FooterRight>
        <div>
          {FooterBottomSocialMediaList.map((logo, index) => (
            <SocialMediaATag key={index} href="logo.href">
              <img src={logo.src} alt="logo"></img>
            </SocialMediaATag>
          ))}
          <div>
            <SocialMediaH3>고객센터 8711-3309</SocialMediaH3>
            <SocialMediaSpan>(유료)</SocialMediaSpan>
          </div>
        </div>
      </FooterRight>
    </FooterDiv>
  );
}

export default Footer;
