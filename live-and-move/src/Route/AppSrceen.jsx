import React from "react";
import styled from "styled-components";
import AppPages from "./AppPages";

const ViewArea = styled.div`
  width: ${({ width }) => (width ? `calc(${width}px - 60px)` : `100%`)};
  height: ${({ height }) => (height ? `${height}px` : `100%`)};
  padding: 0 30px;
  background: #f9f9f9;
  min-width: 1200px;
`;

function AppSrceen(props) {
  return (
    <ViewArea>
      <AppPages />
    </ViewArea>
  );
}

export default AppSrceen;
