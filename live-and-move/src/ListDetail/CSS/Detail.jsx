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
  color: #43ada0
`;
export const SpanColor = styled.span`
color:  #43ada0
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
  background-color: #3b635c;
  position: relative;
  left: px;
  top: 20px;
  margin-bottom: 15px; 
  border: none;
  &:hover {
    background-color: #acd2cd;
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const ButtonBG = styled(Button)`
  font-size: 20px;
  width: 100%;
  height: 50px;
  background-color: #6b9e96;
  position: relative;
  left: px;
  top: 20px;
  margin-bottom: 15px; 
  border: none;
  &:hover {
    background-color: #acd2cd;
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