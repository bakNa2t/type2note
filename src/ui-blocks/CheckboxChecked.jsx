import styled from "styled-components";

const CheckboxChecked = styled.span`
  position: relative;
  border: 2px solid transparent;
  background: var(--background-gradient) border-box;

  &::after {
    content: "✓";
    position: absolute;
    color: var(--color-blue-light-200);
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
