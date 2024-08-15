import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 10dvh;
  flex-shrink: 0;
`;

function Footer() {
  return (
    <StyledFooter>
      Type 2 Note. &copy; Copyright {new Date().getFullYear()}. Design by{" "}
      <a href="https://bakna2t.github.io/" target="_blank" rel="noreferrer">
        _ &#216;k
      </a>
      .
    </StyledFooter>
  );
}

export default Footer;
