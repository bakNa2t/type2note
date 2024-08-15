import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 10dvh;
  flex-shrink: 0;
  font-size: 1.2rem;

  @media screen and (max-width: 500px) {
    font-size: 1rem;
    min-height: 8dvh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const StyledLink = styled.a`
  color: var(--color-spring-green-300);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-0.3rem);
    filter: drop-shadow(0 0 0.5rem var(--color-spring-green-800));
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Wrapper>
        &copy; Copyright {new Date().getFullYear()}. Design by{" "}
        <StyledLink
          href="https://github.com/bakna2t/"
          target="_blank"
          rel="noreferrer"
        >
          _&#216;k
        </StyledLink>
      </Wrapper>
    </StyledFooter>
  );
}

export default Footer;
