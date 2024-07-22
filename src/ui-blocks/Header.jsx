import { SunOutlined } from "@ant-design/icons";
import styled from "styled-components";

import Button from "./Button";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  padding: 2rem 5rem;
`;

const Logo = styled.div`
  font-size: clamp(2rem, 5vw, 3rem);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 3px;
  color: var(--color-blue-light-200);
`;

function Header() {
  return (
    <StyledHeader>
      <Logo>Type 2 Note</Logo>
      <Button>
        <SunOutlined />
      </Button>
    </StyledHeader>
  );
}

export default Header;
