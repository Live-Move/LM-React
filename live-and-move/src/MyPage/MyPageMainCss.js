import { Button, Col } from "react-bootstrap";
import styled from "styled-components";



export const TopContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  margin-bottom: 100px
`;

export const MyInfoContainer = styled.div`
  margin: 0px 100px;
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
  border: 1.5px solid #076ca39f;
  border-radius: 7%;
  background-color: #0484ca;
  color: white;
  box-shadow: 0px 0px 5px black;
  position: fixed;
`;

export const Div01 = styled.div`
 position: absolute; /* 절대 위치로 설정 */
  top: 10px; /* 위쪽 여백 */
  left: 10px; /* 왼쪽 여백 */
  color: white; /* 텍스트 색상 */
  font-size: 1rem; /* 텍스트 크기 조정 */
`;
export const Div02 = styled.div`
 position: absolute; /* 절대 위치로 설정 */
  bottom: 1px; /* 위쪽 여백 */
  left: 10px; /* 왼쪽 여백 */
  color: white; /* 텍스트 색상 */
  font-size: 0.8rem; /* 텍스트 크기 조정 */
`;

export const BodyContainer = styled.div`
  
`;


export const Div1 = styled.div` // +,-버튼
  display: flex;
  align-items:center ;
  gap: 0px;
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
export const Div3 = styled.div` //상품주문하기 버튼
  display: flex;
  justify-content:space-between;
  align-items:center ;
  padding: 1em;
  
`;
export const ColCard = styled(Col)` //구독상품 리스트 테두리 
  //border-top: 1px solid #878787;
  padding:2em;
`;
export const Button1 = styled.button`// +,-버튼
  font-size: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items:center;
  border: none;
  cursor: pointer;
  background:none ;
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
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.bg_color};
  border-radius: 5px;
  opacity: 0.6;
  max-width: px;
  min-width: px;
  max-height: px;
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
  justify-content: center; 
  height: 30vh; 
  
`;
export const MyInfoCol = styled(Col)`
  display: flex;
  align-items: center; 
  height: 30vh; 
  position: relative;
  margin-left: 80px;
`;