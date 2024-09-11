//import Button from "react-bootstrap/esm/Button";
import styled from "styled-components";
//////
//top설정

// 제일큰 div
export const FooterDiv = styled.div`
  background-color: #333333;
  display: flex;
`;

// 왼쪽 담당 div
export const FooterLeft = styled.div`
  margin-left: 80px;
`;
// top div
export const FooterTop = styled.div`
  padding: 45px 0px;
`;

// top menu ul
export const FooterTopMenuUl = styled.ul`
  display: flex;
  margin: 0px;
  padding: 0px;
`;

// Footer.jsx
export const FooterTopMenuLi = styled.li`
  list-style: none;
  margin-right: 15px;

  &::after {
    content: "|";
    margin-left: 15px;
    color: black;
  }

  &:last-child::after {
    content: "";
  }
`;

// top <a> 설정
export const TopATagColorChange = styled.a`
  color: white;
  text-decoration: none;
  font-size: 13px;
`;

//////////////////////////////////////////////////////////////////////////////
//bottom설정
// Footer.jsx
export const FooterBottomMenu = styled.div`
  border-width: 1px 0 0 0;
  border-style: solid;
  border-color: light-gray;
  padding: 25px 0;
`;

// Footer.jsx
export const FooterBottomMenuUl = styled.ul`
  display: flex;
  list-style: none;
  font-color: white;
  padding: 0px;
  margin: 0px;
`;

// Footer.jsx 나중에 밑에 a태그랑 합쳐도 될듯
export const FooterBottomMenuLi = styled.li`
  margin-right: 50px;
`;

// bottom <a> 설정
export const BottomATagColorChange = styled.a`
  color: white;
  text-decoration: none;
  font-size: 13px;
  font-color: lightgray;
`;

////////////////////////////////////////////////////////////////
//bottom tel ul
export const FooterBottomTelUl = styled.ul`
  display: flex;
  list-style: none;
  font-color: white;
  padding: 0;
  margin: 0;
`;
// bottom tel li
export const FooterBottomTelLi = styled.li`
  color: white;
  margin-right: 15px;
  font-size: 13px;
`;
//////////////////////////////////////////////////////////////////////////////////
// bottom info

// bottom info ul
export const FooterBottomInfoUl = styled.ul`
  display: flex;
  list-style: none;
  font-color: white;
  padding: 0;
  margin: 0;
`;

// bottom info li
export const FooterBottomInfoLi = styled.li`
  color: white;
`;

// bottom info span 내일 색깔 나누기
export const FooterBottomInfoSpan = styled.span`
  color: white;
  font-size: 13px;
  margin-right: 15px;
`;
//////////////////////////////////////////////////////////////////////////////
//footer bottom copyright
export const FooterBottomCopyRight = styled.div`
  color: white;
  font-size: 13px;
  margin: 30px 0;
`;
////////////////////////////////////////////////////////
//footer right socialMedia

//footer-right
export const FooterRight = styled.div`
  margin-left: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

//footer bottom socialMedia a tag
export const SocialMediaATag = styled.a`
  margin-left: 10px;
`;

//footer bottom socialMedia h3
export const SocialMediaH3 = styled.h3`
  color: white;
  display: inline-block;
`;

export const SocialMediaSpan = styled.span`
  color: white;
  font-size: 20px;
  margin-left: 10px;
`;
