import styled, { css } from "styled-components";

const sizes = {
  xs: css`
    font-size: 1.2rem;
    padding: 0.5rem;
  `,
  sm: css`
    font-size: 1.4rem;
    padding: 0.7rem;
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
    padding: 1.3rem;
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
  color: var(--color-blue-light-200);

  ${(props) => sizes[props.size]}

  ${(props) =>
    props.nothovered
      ? css`
          &:hover:not(:disabled) {
            color: var(--color-blue-light-700);
            background-color: var(--color-blue-light-200);
          }
        `
      : css`
          &:hover:not(:disabled) {
            color: var(--color-blue-light-700);
            background-color: var(--color-blue-light-200);
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
          color: var(--color-blue-light-200);
          text-shadow: 0 0 0.5rem var(--color-blue-light-200);
        }
      `}
  }
`;

export default Button;
