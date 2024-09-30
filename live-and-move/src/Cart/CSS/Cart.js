import styled from "styled-components";
import { Button, Col, FormCheck } from "react-bootstrap";
import { IoArrowForwardCircle } from "react-icons/io5";

//Cart page
export const FormCheckStyled = styled(FormCheck)``;
export const Div1 = styled.div`
  // +,-버튼
  display: flex;
  align-items: center;
  gap: 0px;
  margin-bottom: 20px;
`;
export const Div2 = styled.div`
  // 구독상품 리스트
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  align-items: center;
  padding: 1em;
  &:first-child {
    border-top: 1px solid #ccc; /* 첫 번째 블록에만 윗줄 보더 추가 */
  }
`;
export const Div3 = styled.div`
  //상품주문하기 버튼
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`;
export const ColCard = styled(Col)`
  //구독상품 리스트 테두리
  //border-top: 1px solid #878787;
  padding: 2em;
`;
export const Button1 = styled.button`
  // +,-버튼
  font-size: 30px;
  width: 60px;
  height: 60px;
  text-align: center;
  border: none;
  cursor: pointer;
  background: none;
`;
export const Input1 = styled.input`
  // + 숫자 -
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  margin-left: 15px;
  align-items: center;
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 20px;
  border: none;
  color: #2020d9;
`;

export const ButtonInCart = styled(Button)`
  // 상품 주문하기 버튼
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: white;
  margin-bottom: 5em;
  background-color: #c1ab86;
  /* border: 1px solid #ccc; */
  &:hover {
    transform: scale(1.04);
    transition-duration: 0.4s;
    background-color: #b37840;
    color: white;
    font-weight: "bold";
  }
  &:active {
    transition-duration: 0.4s;
    transform: scale(0.98);
  }
`;

export const ColJM = styled(Col)`
  // 주문 예상 금액
  margin-left: 50px;
`;
export const JMContainer = styled.div`
  // 주문 예상 금액
  background: #ededed;
  padding: 2em;
  border-radius: 20px;
  position: fixed;
  width: 25%;
  max-height: 350px;
`;

export const Icon1 = styled(IoArrowForwardCircle)`
  font-size: 2rem;
`;
