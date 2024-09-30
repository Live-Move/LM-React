import styled from "styled-components";
import { Button } from "react-bootstrap";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  flex-direction: column;
`;

export const UpperSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px; // 이미지 아래 간격 추가
`;

export const TextContainer = styled.div`
  text-align: center;
  margin-bottom: 20px; // 텍스트와 이미지 간격
`;

export const OrderInfo = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 5px 0;
`;

export const ButtonComp = styled(Button)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  outline: none;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  height: 2.25rem;
  width: 12rem;
  margin: 10px;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;

  background-color: ${(props) => props.bgcolor};

  &:hover {
    background: #b37840;
  }

  &:active {
    background: #95775a;
  }
`;
