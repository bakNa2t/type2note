import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";

import Button from "./Button";

import { useDarkMode } from "../context/DarkModeContext";
import { useNoteLang } from "../context/NoteLangContext";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5rem;

  @media screen and (max-width: 500px) {
    padding: 2rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const LogoTitle = styled.div`
  font-size: clamp(2rem, 5vw, 3rem);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 3px;
  color: var(--color-spring-green-500);
  text-shadow: 0 0 1rem var(--color-spring-green-600);
  -webkit-text-stroke: 0.1rem var(--color-spring-green-600);

  @media screen and (max-width: 500px) {
    letter-spacing: 2px;
  }
`;

const Logo = styled.img`
  display: block;
  width: 5rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  filter: drop-shadow(0 0 0.4rem var(--color-spring-green-700));
  outline: 4px solid var(--color-spring-green-700);

  @media screen and (max-width: 468px) {
    width: 4rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 3rem;

  @media screen and (max-width: 500px) {
    gap: 0.4rem;
  }
`;

function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { lang, toggleLang } = useNoteLang();

  return (
    <StyledHeader>
      <LogoWrapper>
        <Logo src="images/logo.png" alt="logo" />
        <LogoTitle>
          Type 2{" "}
          <Typewriter
            words={["Note", "Store", "Use"]}
            loop={{}}
            cursor
            cursorStyle=">"
            typeSpeed={120}
            deleteSpeed={90}
            delaySpeed={3000}
          />
        </LogoTitle>
      </LogoWrapper>
      <ButtonWrapper>
        <Button
          size="xl"
          color="theme"
          filter="shadowMd"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
        </Button>
        <Button
          size="lg"
          color="theme"
          filter="shadowMd"
          onClick={() => toggleLang()}
        >
          {lang === "en" ? "RU" : "EN"}
        </Button>
      </ButtonWrapper>
    </StyledHeader>
  );
}

export default Header;
