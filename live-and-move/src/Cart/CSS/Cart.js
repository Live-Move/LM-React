import styled from "styled-components";
import { Badge, Button, Col, Form, FormCheck } from "react-bootstrap";

//Cart page
export const FormCheckStyled = styled(FormCheck)`


`;
export const Div2 = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center ;
  border-bottom: 1px solid #ccc;
  padding: 1em;
  &:first-child {
    border-top: 1px solid #ccc; /* 첫 번째 블록에만 윗줄 보더 추가 */
  }
`;
export const ColCard = styled(Col)`
  //border-top: 1px solid #878787;
  padding:2em;
`;
export const Button1 = styled.button`
  display:;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  background: none;
`;
export const Input1 = styled.input`
  width: 60px;
  height: 40px;
  text-align: center;
  font-size: 20px;
  border: none;
  color: #2020d9;
`;

export const ButtonDel = styled(Button)`
  width: 10em;
  height: 3em;
  color:black;
  margin-bottom: 5em; 
  border:1px solid #ccc;
  &:hover {
    transform: scale(1.04);
  }
  &:active {
    transform: scale(0.98);
  }
`;