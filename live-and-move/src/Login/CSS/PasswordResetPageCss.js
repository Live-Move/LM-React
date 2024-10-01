import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #f8f9fa;
`;

export const Container = styled.div`
  display: flex;
  font-family: "apple";
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.bg_color};
  border-radius: 5px;
  opacity: 0.6;
  max-width: 400px;
  min-width: 500px;
  min-height: 450px;
  color: white;
  padding: 40px 45px 20px 45px;
  gap: 4px;
`;

export const ButtonRestPW = styled.button`
  margin-top: 10px;
  margin-bottom: 4px;
  border-radius: 0;
  border: none;
  font-size: 20px;
  width: 100%;
  height: 50px;
  border-radius: 20px;
  background-color: #b37840;
  color: ${(props) => props.font_color};
  transition-duration: 0.25s;

  /* 마우스 호버 이벤트 */
  &:hover {
    background-color: #c1ab86;
    transition-duration: 0.25s;
  }
`;
