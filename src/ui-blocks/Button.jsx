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
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => sizes[props.size]}

  border: none;
  border-radius: 0.4rem;
  background-color: transparent;
  color: var(--color-blue-light-200);

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
`;

export default Button;
