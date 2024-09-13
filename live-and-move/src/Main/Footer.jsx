import React from "react";
import {
  FooterDiv,
  Container,
  Top,
  Ul,
  TopMenuLi,
  A,
  BottomMenu,
  BottomMenuLi,
  BottomTelLi,
  BottomInfoSpan,
  BottomCopyRight,
  FooterRight,
  SocialMediaLogo,
  SocialMediaA,
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
      <Container>
        <div className="Left">
          <Top>
            <div className="top-menu">
              <Ul>
                {FooterTopMenuList.map(({ title, path }, index) => {
                  return (
                    <TopMenuLi key={title + index}>
                      <A href={path} textcolor="white">
                        {title}
                      </A>
                    </TopMenuLi>
                  );
                })}
              </Ul>
            </div>
          </Top>

          <div className="Bottom">
            <BottomMenu>
              <Ul>
                {FooterBottomMenuList.map(({ title, path }, index) => {
                  return (
                    <BottomMenuLi key={title + index}>
                      <A href={path} textcolor="#8D8D8D">
                        {title}
                      </A>
                    </BottomMenuLi>
                  );
                })}
              </Ul>
            </BottomMenu>

            <div className="Bottom-Tel">
              <Ul>
                <BottomTelLi>T. 제휴/대리점 개설문의 051-8711-3309</BottomTelLi>
                <BottomTelLi>M. liveandmove@gmaiil.com</BottomTelLi>
              </Ul>
            </div>

            <div className="Bottom-Info">
              <Ul>
                <li>
                  <BottomInfoSpan textcolor="#BDBABD">
                    (주)리브앤무브
                  </BottomInfoSpan>
                </li>
                <li>
                  <BottomInfoSpan textcolor="#BDBABD">대표이사</BottomInfoSpan>
                </li>
                <li>
                  <BottomInfoSpan textcolor="#878687">
                    조동희 이은석 위지훈
                  </BottomInfoSpan>
                </li>
                <li>
                  <BottomInfoSpan textcolor="#BDBABD">본사</BottomInfoSpan>
                </li>
                <li>
                  <BottomInfoSpan textcolor="#878687">
                    부산광역시 동래구 낙민동 온천천로 339번길
                  </BottomInfoSpan>
                </li>
                <li>
                  <BottomInfoSpan textcolor="#BDBABD">
                    개인정보관리 책임자
                  </BottomInfoSpan>
                </li>
                <li>
                  <BottomInfoSpan textcolor="#878687">고옴치</BottomInfoSpan>
                </li>
                <li>
                  <BottomInfoSpan textcolor="#BDBABD">
                    사업자등록번호
                  </BottomInfoSpan>
                </li>
                <li>
                  <BottomInfoSpan textcolor="#878687 ">
                    001-741861-01-014
                  </BottomInfoSpan>
                </li>
              </Ul>
            </div>

            <BottomCopyRight>
              Copyrightⓒ Live And Move Corporation. All Rights Reserved.
            </BottomCopyRight>
          </div>
        </div>
        <FooterRight>
          <div>
            <SocialMediaLogo>
              {FooterBottomSocialMediaList.map((logo, index) => (
                <SocialMediaA key={index} href={logo.href}>
                  <img src={logo.src} alt="logo"></img>
                </SocialMediaA>
              ))}
            </SocialMediaLogo>
            <div>
              <SocialMediaH3>고객센터 8711-3309</SocialMediaH3>
              <SocialMediaSpan>(유료)</SocialMediaSpan>
            </div>
          </div>
        </FooterRight>
      </Container>
    </FooterDiv>
  );
}

export default Footer;
