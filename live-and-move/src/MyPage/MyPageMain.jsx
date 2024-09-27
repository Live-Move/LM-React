import React from "react";
import { MainContainer } from "../Login/CSS/LoginCss";
import styled from "styled-components";

const TopContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
`;

const MyInfoContainer = styled.div`
  margin: 0px 100px;
  padding: 10px;
  width: 30vw;
  max-width: 340px;
  min-width: 240px;
  height: 30vh;
  max-height: 250px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1.5px solid #076ca39f;
  border-radius: 7%;
  background-color: #0484ca;
  color: white;
  box-shadow: 0px 0px 5px black;
`;

function MyPageMain(props) {
  return (
    <>
      <MainContainer style={{ color: "#111111" }}>
        <TopContainer>
          <div>
            <h1 style={{ fontWeight: "bold" }}>
              <span style={{ color: "#007CC1" }}>MyPage</span>Main
            </h1>
            <h6>
              Live and Move를 방문해주셔서 감사합니다.
              <br />이 곳에서 회원님의 모든정보를 한눈에 확인할 수 있습니다.
            </h6>
          </div>
          <MyInfoContainer>UserInfo</MyInfoContainer>
        </TopContainer>
      </MainContainer>
    </>
  );
}

export default MyPageMain;
