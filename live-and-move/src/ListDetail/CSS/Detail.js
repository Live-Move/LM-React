import styled from "styled-components";
import { Button,Image } from "react-bootstrap";
import { GiPositionMarker } from "react-icons/gi";
import { FiCheckCircle } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
// Detail page
export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonBS = styled(Button)`
  font-size: 20px;
  width: 95%;
  height: 50px;
  background-color: #808080;
  position: relative;
  left: 15px;
  top: 20px;
  margin-bottom: 40px; 
  border: none;
  &:hover {
    background-color: #696969;
    transform: scale(1.04);
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const PinIcon = styled(GiPositionMarker)`
  vertical-align: middle;
  font-size: 30px;
`;
export const CheckCircle = styled(FiCheckCircle)`
  display: inline-block;
  verticalAlign: middle;
  color: #4646e2
`;
export const SpanColor = styled.span`
color: #4646e2
`;
export const QuestionCircle = styled(AiOutlineQuestionCircle)`
  display: inline-block;
  verticalAlign: middle;
  color: #
`;

export const ButtonJB = styled(Button)`
  font-size: 20px;
  width: 100%;
  height: 50px;
  background-color: ${(props)=>props.bg_color};
  position: relative;
  left: px;
  top: 20px;
  margin-bottom: 15px; 
  border: none;
  &:hover {
    background-color: #B0B8E6;
    transform: scale(1.04);
  }
  &:active {
    transform: scale(0.98);
  }
`;


export const ImageBT = styled(Image)`
  
  width: 100%;
  height: auto;
  margin-bottom: 20px; 
  position: relative;
  left: px;
  top: 10px;
  &:hover {
    transform: scale(1.04);
  }
`;

export const Button1 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: none;
`;
export const Div1 = styled.div` 
  display: flex;
  align-items:center ;
  gap: 0px;
  margin-bottom: 20px
`;

export const Div2 = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center ;
  
`;
export const Div3 = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center ;
  &:hover {
    transform: scale(0.98);
  }
  
`;

export const Input1 = styled.input`
  width: 60px;
  height: 40px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #ccc;
`;
