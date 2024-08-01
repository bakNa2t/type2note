import { useEffect, useState } from "react";

export function useResizeScreen() {
  const screenSize = window.innerWidth > 500;
  const [isMobileSize, setIsMobileSize] = useState(screenSize);

  //compare screen size with mobile size (464) and set state
  function isLessThanMobile() {
    setIsMobileSize(window.innerWidth > 500);
  }

  //chkecking screen size
  useEffect(function () {
    // isLessThanMobile();
    window.addEventListener("resize", isLessThanMobile);

    return () => {
      window.removeEventListener("resize", isLessThanMobile);
    };
  }, []);

  return isMobileSize;
}
