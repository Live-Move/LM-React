import styled from "styled-components";
import { Button, Image } from "react-bootstrap";
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
    transition-duration: 0.35s;
    transform: scale(1.04);
  }
  &:active {
    transition-duration: 0.35s;
    transform: scale(0.98);
  }
`;

export const PinIcon = styled(GiPositionMarker)`
  vertical-align: middle;
  font-size: 30px;
`;
export const CheckCircle = styled(FiCheckCircle)`
  display: inline-block;
  verticalalign: middle;
  color: #4646e2;
`;
export const SpanColor = styled.span`
  color: #4646e2;
`;
export const QuestionCircle = styled(AiOutlineQuestionCircle)`
  display: inline-block;
  verticalalign: middle;
`;

export const ButtonJB = styled(Button)`
  font-size: 20px;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.bg_color};
  position: relative;
  left: px;
  top: 20px;
  margin-bottom: 15px;
  border: none;
  &:hover {
    background-color: #b37840;
    transition-duration: 0.4s;
    transform: scale(1.04);
  }
  &:active {
    transition-duration: 0.4s;
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
    transition-duration: 0.2s;
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
  align-items: center;
  gap: 0px;
  margin-bottom: 20px;
`;

export const Div2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Div3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    transition-duration: 0.2s;
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
