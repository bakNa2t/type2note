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

const Logo = styled.div`
  font-size: clamp(2rem, 5vw, 3rem);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 3px;
  color: var(--color-spring-green-500);
  text-shadow: 0 0 1rem var(--color-spring-green-400);
`;

function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <StyledHeader>
      <Logo>Type 2 Note</Logo>
      <Button size="xl" onClick={toggleDarkMode}>
        {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
      </Button>
    </StyledHeader>
  );
}

export default Header;
