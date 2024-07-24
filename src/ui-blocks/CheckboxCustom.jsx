import styled from "styled-components";

const StyledCheckboxCustom = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;

  border: none;
  background-color: transparent;
  color: var(--color-blue-light-200);

  &:hover {
    color: var(--color-blue-light-700);
  }
`;

const Circle = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  display: inline-block;
  border: 2px solid var(--color-blue-light-700);
  border-radius: 50%;
  z-index: 100;

  &:hover {
    background: linear-gradient(
          var(--color-blue-zola-600),
          var(--color-blue-zola-600)
        )
        padding-box,
      var(--background-gradient) border-box;
    border: 2px solid transparent;
  }
`;

function CheckboxCustom() {
  return (
    <StyledCheckboxCustom>
      <Circle />
    </StyledCheckboxCustom>
  );
}

export default CheckboxCustom;
