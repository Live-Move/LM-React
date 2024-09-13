import React from "react";
import { useMediaQuery } from "react-responsive";

function ViewArea({ children }) {
  const isDeskTop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return <>{isDeskTop && children}</>;
}

export default ViewArea;
