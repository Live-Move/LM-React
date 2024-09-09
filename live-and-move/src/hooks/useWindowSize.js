import { useCallback, useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(0);

  const handleReSizer = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleReSizer);
    handleReSizer();
    return () => window.removeEventListener("resize", handleReSizer);
  }, []);

  return windowSize;
};

export default useWindowSize;
