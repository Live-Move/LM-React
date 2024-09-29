import { Button } from "react-bootstrap";
import styled from "styled-components";




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
  background: linear-gradient(to top, rgba(20, 79, 255, 0.3),rgba(20, 79, 255, 0));
  position: relative;
  overflow: hidden;
  background-size: cover;
`;
export const Div002 = styled.div`
  position: absolute;  /* 부모 요소를 기준으로 절대 위치 설정 */
  top: 35%;            /* 수직 중앙 */
  left: 50%;           /* 수평 중앙 */
  transform: translate(-50%, -50%);  /* 중앙 정렬을 위한 변환 */
  color: black;        /* 글씨 색상 */
  // font-size: 4rem;     /* 글씨 크기 설정 */
  text-align: center;
  font-weight: bold;
  width: 50em;
   /* md={6} 이상일 때 글씨 크기 고정 */
  @media (min-width: 900px) { /* Bootstrap의 md는 768px 이상 */
    font-size: 4rem; /* 고정 크기 */
  }

  /* md={6} 이하일 때 글씨 크기 작아짐 */
  @media (max-width: 900px) {
    font-size: 2rem; /* 줄어든 크기 */
  }
`;
export const Button001 = styled(Button)`
  position: absolute;  /* 부모 요소를 기준으로 절대 위치 설정 */
  top: 60%;            /* 수직 중앙 */
  left: 50%;           /* 수평 중앙 */
  transform: translate(-50%, -50%);  /* 중앙 정렬을 위한 변환 */
  color: whgit;        /* 글씨 색상 */
  font-size: 2rem;     /* 글씨 크기 설정 */
  text-align: center;
  font-weight: bold;
  background: black;
  border: none;
  opacity: 0.7;
  width: 10em;
  height: 3em;
  display: flex;        /* Flexbox 사용 */
  justify-content: center;  /* 가로 중앙 정렬 */
  align-items: center;      /* 세로 중앙 정렬 */
`;
export const Img02 = styled.img`
  position: absolute;  /* 부모 요소를 기준으로 절대 위치 설정 */
  top: 80px;            /* 수직 중앙 */
  left: 90px;           /* 수평 중앙 */
  transform: translate(-50%, -50%);  /* 중앙 정렬을 위한 변환 */
  width: 10em;
  height: 8em;
`;