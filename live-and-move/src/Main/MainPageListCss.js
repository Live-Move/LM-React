import styled from "styled-components";
/////////////////////////////////////////////////////////////////////
export const Container = styled.div`
  margin: 0 250px;
  width: 1370px;
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Li = styled.li`
  list-style: none;
  position: relative;
`;
export const Img = styled.img`
  filter: brightness(0.7);
  border-radius: 5%;
`;
export const Span = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15px;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;
