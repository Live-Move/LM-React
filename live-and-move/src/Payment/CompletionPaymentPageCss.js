import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const UpperSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  display: inline-flex;
  color: white;
  font-weight: bold;
  outline: none;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  height: 2.25rem;
  width: 10rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;

  background: #228be6;

  &:hover {
    background: lighten($blue, 10%); // 색상 10% 밝게
  }

  &:active {
    background: darken($blue, 10%); // 색상 10% 어둡게
  }
`;
