import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import styled from "styled-components";

import Button from "./Button";

import { useDarkMode } from "../context/DarkModeContext";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  padding: 2rem 5rem;

  @media screen and (max-width: 768px) {
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
  /* justify-content: space-between; */
  gap: 3rem;
`;

function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <StyledHeader>
      <LogoWrapper>
        <Logo src="images/logo.png" alt="logo" />
        <LogoTitle>Type 2 Note</LogoTitle>
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
        <Button size="lg" color="theme" filter="shadowMd">
          RU
        </Button>
      </ButtonWrapper>
    </StyledHeader>
  );
}

export default Header;
