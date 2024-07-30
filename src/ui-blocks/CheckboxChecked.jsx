import styled from "styled-components";

const CheckboxChecked = styled.span`
  position: relative;
  display: inline-block;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  border: 2px solid transparent;
  background: var(--background-gradient) border-box;
  box-shadow: 0 0 0.4rem var(--color-spring-green-300);

  &::after {
    content: "✓";
    position: absolute;
    color: var(--color-spring-green-900);
    display: flex;
    top: -2px;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover {
    border: 2px solid transparent;
    background: var(--background-gradient) border-box;
  }
`;

export default CheckboxChecked;
