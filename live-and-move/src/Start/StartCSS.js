import { Button } from "react-bootstrap";
import styled, { keyframes } from "styled-components";

export const Img01 = styled.img`
  margin: 0px 00px;
  // padding: px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // border: 1.5px solid #076ca39f;
  // border-radius: 7%;
  // background-color: #0484ca;
  // background-color: black;
  // color: white;
  // box-shadow: 0px 0px 100px #474747;
  opacity: 0.5;
  display: flex;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  overflow: hidden;
`;
export const Div001 = styled.div`
  // background-color: black;
  // box-shadow: 0px 0px 100px black;
  background: linear-gradient(
    to top,
    rgba(20, 79, 255, 0.3),
    rgba(20, 79, 255, 0)
  );
  position: relative;
  overflow: hidden;
  background-size: cover;
`;
export const Div002 = styled.div`
  position: absolute; /* 부모 요소를 기준으로 절대 위치 설정 */
  top: 35%; /* 수직 중앙 */
  left: 50%; /* 수평 중앙 */
  transform: translate(-50%, -50%); /* 중앙 정렬을 위한 변환 */
  color: black; /* 글씨 색상 */
  font-size: 3rem; /* 글씨 크기 설정 */
  text-align: center;
  font-weight: bold;
  width: 50em;

  @media (min-width: 1150px) {
    font-size: 5rem;
    font-weight: 900;
  }
  @media (max-width: 800px) {
    font-size: 2rem;
    font-weight: 900;
  }

  @keyframes typing {
    from { width: 0; }
    to  { width: 12ch; } /* 최종 너비 */
    }

  // 커서 깜빡임 애니메이션 정의
  @keyframes caret {
    50% { border-right-color: transparent; }
    }

  .move-text {
  // font: bold 100% Consolas, Monaco, monospace;
  width: 12ch; /* 글자 수에 따라 너비 설정 */
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.05em solid;
  animation: typing 8s steps(12),
  caret 1s steps(1) infinite;
  }

  .animated-text {
    opacity: 0;
    animation: fadeIn 3s ease-in forwards;
  }

  @keyframes fadeIn {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }
  
  .static-text { opacity: 1; }
`;

export const Button001 = styled(Button)`
  position: absolute; /* 부모 요소를 기준으로 절대 위치 설정 */
  top: 60%; /* 수직 중앙 */
  left: 50%; /* 수평 중앙 */
  transform: translate(-50%, -50%); /* 중앙 정렬을 위한 변환 */
  color: whgit; /* 글씨 색상 */
  font-size: 2rem; /* 글씨 크기 설정 */
  text-align: center;
  font-weight: bold;
  background: black;
  border: none;
  opacity: 0.7;
  width: 10em;
  height: 3em;
  display: flex; /* Flexbox 사용 */
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
`;
export const Img02 = styled.img`
  position: absolute; /* 부모 요소를 기준으로 절대 위치 설정 */
  top: 80px; /* 수직 중앙 */
  left: 90px; /* 수평 중앙 */
  transform: translate(-50%, -50%); /* 중앙 정렬을 위한 변환 */
  width: 10em;
  height: 8em;
`;
