import styled, { css } from "styled-components";

const sizes = {
  xs: css`
    font-size: 1.2rem;
    padding: 0.5rem;
  `,
  sm: css`
    font-size: 1.4rem;
    padding: 0.7rem;

    @media screen and (max-width: 500px) {
      padding: 0.4rem;
    }
  `,
  md: css`
    font-size: 1.6rem;
    padding: 0.9rem;
  `,
  lg: css`
    font-size: 1.8rem;
    padding: 1.1rem;
  `,
  xl: css`
    font-size: 2.4rem;
    padding: 1rem;
    /* filter: drop-shadow(0 0 1rem var(--color-spring-green-700)); */
  `,
  xxl: css`
    font-size: 3.2rem;
    padding: 0.8rem;
  `,
};

const colors = {
  theme: css`
    color: var(--color-spring-green-800);
  `,
};

const filters = {
  shadowSm: css`
    filter: drop-shadow(0 0 0.8rem var(--color-spring-green-700));
  `,
  shadowMd: css`
    filter: drop-shadow(0 0 1.2rem var(--color-spring-green-700));
  `,
};

const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 0.4rem;
  background-color: transparent;
  color: var(--color-spring-green-200);

  ${(props) => sizes[props.size]}

  ${(props) => colors[props.color]}

  ${(props) => filters[props.filter]}

  ${(props) =>
    props.border &&
    css`
      border: 0.1rem solid var(--color-spring-green-200);

      &:hover {
        border: 0.1rem solid var(--color-spring-green-700);
        filter: drop-shadow(0 0 0.3rem var(--color-spring-green-700));
      }
    `}

  ${(props) =>
    props.nothovered
      ? css`
          &:hover:not(:disabled) {
            color: var(--color-spring-green-900);
            text-shadow: 0 0 0.4rem var(--color-spring-green-700);
            background-color: var(--color-spring-green-200);
          }
        `
      : css`
          &:hover:not(:disabled) {
            color: var(--color-spring-green-900);
            text-shadow: 0 0 0.4rem var(--color-spring-green-700);
            background-color: var(--color-spring-green-200);
          }
        `}

    &:hover {
    ${(props) =>
      props.cleardesc &&
      css`
        &::before {
          content: "${props.cleardesc.content}";
          position: absolute;
          width: max-content;
          font-size: 1rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          top: -1.6rem;
          color: var(--color-spring-green-300);
          text-shadow: 0 0 0.5rem var(--color-spring-green-400);
        }
      `}
  }
`;

export default Button;
