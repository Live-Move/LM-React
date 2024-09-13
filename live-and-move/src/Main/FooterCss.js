import styled from "styled-components";
/////////////////////////////////////////////////////////////////////
// 공통
export const Ul = styled.ul`
  display: flex;
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

export const A = styled.a`
  text-decoration: none;
  font-size: 13px;
  color: ${(props) => props.textColor};
`;
/////////////////////////////////////////////////////////////////////
// top
// 제일큰 div
export const FooterDiv = styled.div`
  background-color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 300px;
  width: 100%;
  min-width: 1560px;
`;

// container
export const Container = styled.div`
  display: flex;
`;

// top div
export const Top = styled.div`
  padding: 45px 0px;
`;

// top li
export const TopMenuLi = styled.li`
  list-style: none;
  margin-right: 15px;

  &::after {
    content: "|";
    margin-left: 15px;
    color: #2c2c2c;
  }

  &:last-child::after {
    content: "";
  }
`;
/////////////////////////////////////////////////////////////////////
// bottom left
// Bottom Menu
export const BottomMenu = styled.div`
  border-width: 1px 0 0 0;
  border-style: solid;
  border-color: #4b4b4b;
  padding: 25px 0;
`;

// Bottom Menu li
export const BottomMenuLi = styled.li`
  margin-right: 50px;
`;
/////////////////////////////////////////////////////////////////////
// bottom tel li
export const BottomTelLi = styled.li`
  color: #878687;
  margin-right: 15px;
  font-size: 13px;
`;
/////////////////////////////////////////////////////////////////////
// bottom info span
export const BottomInfoSpan = styled.span`
  font-size: 13px;
  margin-right: 15px;
  color: ${(props) => props.textColor};
`;
/////////////////////////////////////////////////////////////////////
// footer bottom copyright
export const BottomCopyRight = styled.div`
  color: #878687;
  font-size: 13px;
  margin: 30px 0;
`;
/////////////////////////////////////////////////////////////////////
// bottom right
export const FooterRight = styled.div`
  margin-left: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const SocialMediaLogo = styled.div`
  display: flex;
  justify-content: center;
  aligin-items: center;
`;

// footer bottom socialMedia a tag
export const SocialMediaA = styled.a`
  margin-left: 10px;
`;

// footer bottom socialMedia h3
export const SocialMediaH3 = styled.h3`
  color: #cfcccf;
  display: inline-block;
`;

// footer bottom socialMedia span
export const SocialMediaSpan = styled.span`
  color: #cfcccf;
  font-size: 20px;
  margin-left: 10px;
`;
