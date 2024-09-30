import styled from "styled-components";
/////////////////////////////////////////////////////////////////////
export const Container = styled.div`
  margin: 0px;
  /* min-width: 1800px; */
  width: 100%;
`;
export const Ul = styled.ul`
  margin-bottom: 6vh;
  height: 13vh;
  padding: 0px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5vw;
`;
export const Li = styled.li`
  list-style: none;
  position: relative;
  &:hover {
    transition-duration: 0.4s;
    transform: scale(1.04);
  }
`;
export const Img = styled.img`
  filter: brightness(0.7);
  border-radius: 5%;
`;
export const Span = styled.span`
  position: absolute;
  top: ${(props) => props.sizevalue};
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 25px;
  color: white;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  font-family: "apple";
`;
