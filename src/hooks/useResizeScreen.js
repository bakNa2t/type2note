import { useEffect, useState } from "react";

export function useResizeScreen() {
  const [isMobileSize, setIsMobileSize] = useState(true);

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
