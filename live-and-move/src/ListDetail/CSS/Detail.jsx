import styled from "styled-components";
import { Button } from "react-bootstrap";
import { GiPositionMarker } from "react-icons/gi";
// Detail page
export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonBS = styled(Button)`
  font-size: 20px;
  width: 480px;
  height: 50px;
  background-color: #808080;
  position: relative;
  left: 10px;
  top: 20px;
  border: none;
  &:focus {
    box-shadow: none;
    outline: none;
  }
  &:hover {
    background-color: #696969;
  }
  &:active {
    background-color: #808080;
    transform: scale(0.98);
  }
`;

export const PinIcon = styled(GiPositionMarker)`
  vertical-align: middle;
  font-size: 30px;
`;


