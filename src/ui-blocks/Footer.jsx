import { useEffect, useState } from "react";
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

  & > span {
    font-size: 1.6rem;
    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
  }
`;

const StyledLink = styled.a`
  color: var(--color-spring-green-400);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-0.3rem);
    filter: drop-shadow(0 0 0.5rem var(--color-spring-green-800));
  }
`;

function Footer() {
  const [emoji, setEmoji] = useState();

  useEffect(function () {
    const emojiStack = ["💻", "💚", "🐱‍👤", "💡", "⏳"];
    let counter = 0;

    setEmoji(emojiStack.at(counter));
    counter++;

    const interval = setInterval(function () {
      if (counter >= emojiStack.length) {
        counter = 0;
      }
      setEmoji(emojiStack.at(counter));
      counter++;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledFooter>
      <Wrapper>
        <span>&copy;</span> Copyright {new Date().getFullYear()}. Design with{" "}
        {emoji} by{" "}
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
