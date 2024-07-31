import { useEffect, useState } from "react";

export function useResizeScreen() {
  const [isMobileSize, setIsMobileSize] = useState(false);

  //compare screen size with mobile size (464) and set state
  function isLessThanMobile() {
    setIsMobileSize(window.innerWidth > 464);
    // return setIsMobileSize(screen.width > 464);
  }

  console.log("innerWidth = " + window.innerWidth);
  console.log("screen.width = " + screen.width);

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
