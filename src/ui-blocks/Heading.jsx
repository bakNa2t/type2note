import styled from "styled-components";

import { useNoteLang } from "../context/NoteLangContext";
import { contentData } from "../data/content";

const StyledHeading = styled.div`
  text-align: center;
  font-size: clamp(2rem, 5vw, 2.6rem);
  color: var(--color-spring-green-200);
  text-shadow: 0 0 1rem var(--color-spring-green-400);
  -webkit-text-stroke: 0.1rem var(--color-spring-green-800);
`;

function Heading() {
  const { lang } = useNoteLang();
  const { appTitle } = lang === "en" ? contentData.en : contentData.ru;

  return <StyledHeading as={"h2"}>{appTitle}</StyledHeading>;
}

export default Heading;
