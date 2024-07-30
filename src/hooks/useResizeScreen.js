import { useEffect, useState } from "react";

export function useResizeScreen() {
  const [isMobileSize, setIsMobileSize] = useState(false);

  //compare screen size with mobile size (464) and set state
  const lessThanMobile =
    setIsMobileSize(window.matchMedia("(max-width: 464px)")).matches === true;

  //chkecking screen size
  useEffect(
    function () {
      window.addEventListener("resize", function () {
        lessThanMobile ? setIsMobileSize(true) : setIsMobileSize(false);
      });
    },
    [lessThanMobile, setIsMobileSize]
  );

  return [isMobileSize];
}
