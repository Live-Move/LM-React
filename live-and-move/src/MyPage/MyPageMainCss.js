import { Button, Card, Col } from "react-bootstrap";
import { SlArrowRightCircle } from "react-icons/sl";
import styled from "styled-components";



export const Divfont = styled.div`
font-family: 'apple'
`;   
export const TopContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  margin-bottom: 100px
`;   

export const MyInfoContainer = styled.div`
  margin: 0px 00px;
  padding: 10px;
  width: 30%;
  max-width: 340px;
  min-width: 240px;
  height: 30vh;
  max-height: 250px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // border: 1.5px solid #076ca39f;
  border-radius: 7%;
  background-color: #b37840;
  color: #e6e3e1;
  box-shadow: 0px 0px 5px #474747;
  position: fixed;
  opacity: 0.9;
`;

export const Div01 = styled.div`
 position: absolute; /* 절대 위치로 설정 */
  top: 10px; /* 위쪽 여백 */
  left: 10px; /* 왼쪽 여백 */
  color: #e6e3e1; /* 텍스트 색상 */
  font-size: 1rem; /* 텍스트 크기 조정 */
`;
export const Div02 = styled.div`
 position: absolute; /* 절대 위치로 설정 */
  bottom: 10px; /* 위쪽 여백 */
  left: 10px; /* 왼쪽 여백 */
  color: #e6e3e1;
  font-size: 0.9rem; /* 텍스트 크기 조정 */
`;

export const BodyContainer = styled.div`
  margin-left: 100px;
`;


export const Div1 = styled.div` // 바로가기
  // margin: 0px;
  padding: 20px;
  min-width:250px;
  height: 150px;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  background-color: #e6e3e1;
  color: ;
  align-items:center ;
  margin-bottom: 20px
  
`;
export const Div2 = styled.div`// 구독상품 리스트
  display: flex;
  justify-content:space-between;
  border-bottom: 1px solid #ccc;
  align-items:center ;
  padding: 1em;
  &:first-child {
    border-top: 1px solid #ccc; /* 첫 번째 블록에만 윗줄 보더 추가 */
  }
`;
export const Div3 = styled.div` //내정보
  display: flex;
  // justify-content:space-between;
  align-items:center ;
  padding: 1em;
  text-align: cent;
`;
export const ColCard = styled(Col)` //구독중인 상품 
  //border-top: 1px solid #878787;
  padding:2em;
  display: flex;
  flex-wrap: wrap; /* 화면 크기에 맞춰 줄바꿈 */
  gap: 20px; /* 카드 사이 간격 */
  // justify-content: space-between; /* 카드 간 간격 균등 */
  
`;

export const Input1 = styled.input` // + 숫자 -
  width: 60px;
  height: 40px;
  text-align: center;
  font-size: 20px;
  border: none;
  color: #2020d9;
`;

export const ButtonDel = styled(Button)` // 선택상품삭제 버튼
  width: 10em;
  height: 3em;
  color:white;
  margin-bottom: 5em; 
  background-color:#95775a;
  border:none;
  &:hover {
    transform: scale(1.04);
    background-color:#baa388;
    }
    &:active {
      transform: scale(0.98);
  }
`;
export const ButtonJM = styled(Button)` // 상품 주문하기 버튼
  width: 100%;
  height: 5em;
  color:white;
  margin-bottom: 5em; 
  background-color:#0C0F67;
  border:1px solid #ccc;
  &:hover {
    transform: scale(1.04);
    background-color:#B0B8E6;
    }
    &:active {
      transform: scale(0.98);
  }
`;
export const ColJM = styled(Col)` // 주문 예상 금액
  background: #ededed;
  padding: 2em;
  border-radius: 20px;
`;

export const Icon1 = styled(SlArrowRightCircle)` 
  font-size: 2rem;
  background: #d1c8b8;
  border-radius: 50%;
  display: block; /* 아이콘을 아래로 내림 */
  margin-top: 50px;
`;
export const MainContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  background-color: ${(props) => props.bg_color};
  // border-radius: 5px;
  // opacity: 0.7;
  // max-width: px;
  // min-width: px;
  // max-height: px;
  width: 90%;
  height: auto;
  color: white;
  margin: 20px;
  padding: 20px 40px 12px 40px;
  gap: 4px;
`;


export const TopCol = styled(Col)`
  display: flex;
  align-items: center; 
  // justify-content: center; 
  height: 30vh; 
  margin-left: 100px;
  opacity: 1;
`;
export const MyInfoCol = styled(Col)`
  display: flex;
  align-items: center; 
  height: 10vh; 
  position: relative;
  // margin: 00px, 50px;
  margin-right: 100px;
  // justify-content: center; 
`;
export const Card01 = styled(Card)`
  // display: flex;
  // align-items: center; 
  width: 200px;
  color:black;
  padding:3px;
  // height: 10vh; 
  // position: relative;
  // margin: 00px, 50px;
  // margin-right: 100px;
  // justify-content: center; 
  border-radius: 0.3em;
  background-color:#e6e3e1;
  box-shadow: 0px 0px 2px #474747;
  
  `;
export const Image01 = styled.img`
  display: flex;
  width: 100%;
  // align-items: center; 
  // color:black;
  // padding:10px;
  // height: 10vh; 
  // position: relative;
  // margin: 00px, 50px;
  // margin-right: 100px;
  // justify-content: center; 
  border-radius: 0.2em;
  opacity: 0.6;
  `;