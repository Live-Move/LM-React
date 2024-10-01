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
    rgba(149, 119, 90, 0.8),
    rgba(149, 119, 90, 0)
  );
  position: relative;
  overflow: hidden;
  background-size: cover;
`;

const flicker = keyframes`
  100% {
    opacity: 1; /* 깜빡임 */
  }
  0%,{
    opacity: 0; /* 어두워지기 */
  }
`;
export const Light2 = styled.span`
  
  width: 200px; /* 원의 크기 */
  height: 200px;
  
  border-radius: 50% ; /* 원 모양 */
  background: radial-gradient(circle, rgba(225,225,500, 0.5), rgba(255, 255,90, 0.3), rgba(0, 0, 0, 0.1)); /* 그라데이션 */
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
`;
export const AnimatedText = styled.span`
  display: inline-block;
  white-space: nowrap;
  // overflow: hidden;
  opacity: 0;
  animation: ${flicker} 6s ease-in-out infinite; /* 깜빡이는 애니메이션 */
  animation-delay: 2s; /* 3초 후에 애니메이션 시작 */
// color: #b37840;
  font-border: 20px solid #black;
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

  .animated-text {
    opacity: 0;
    animation: fadeIn 3s ease-in forwards;
    
  }

  @keyframes fadeIn {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }
  
  .static-text { opacity: 1; }
  font-family: 'apple'
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
  &:hover {
    background-color: #b37840; /* 호버 시 색상 */
    }
    font-family: 'apple'

    
`;
export const Img02 = styled.img`
  position: absolute; /* 부모 요소를 기준으로 절대 위치 설정 */
  top: 80px; /* 수직 중앙 */
  left: 90px; /* 수평 중앙 */
  transform: translate(-50%, -50%); /* 중앙 정렬을 위한 변환 */
  width: 10em;
  height: 8em;
`;
