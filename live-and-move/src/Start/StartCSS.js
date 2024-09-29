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
box-shadow: 0px 0px 100px #474747;
opacity: 0.5;
  display: flex;
  width: 10%;
  height: 100vh;
  object-fit: cover;
`;   
export const Div001 = styled.div`
  // background-color: black;
  // box-shadow: 0px 0px 100px black;
  background: linear-gradient(to top, black, transparent);
  opacity: 0.8;
`;
export const Div002 = styled.div`
  position: absolute;  /* 부모 요소를 기준으로 절대 위치 설정 */
  top: 35%;            /* 수직 중앙 */
  left: 50%;           /* 수평 중앙 */
  transform: translate(-50%, -50%);  /* 중앙 정렬을 위한 변환 */
  color: white;        /* 글씨 색상 */
  font-size: 4rem;     /* 글씨 크기 설정 */
  text-align: center;
  font-weight: bold;
`;