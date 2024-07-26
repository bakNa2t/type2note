import styled from "styled-components";
import PropTypes from "prop-types";

import CheckboxChecked from "./CheckboxChecked";

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

const CheckboxCircle = styled.span`
  position: relative;
  display: inline-block;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  border: 2px solid var(--color-blue-light-700);
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

function CheckboxCustom({ onClick, completed }) {
  CheckboxCustom.propTypes = {
    onClick: PropTypes.func,
    completed: PropTypes.bool,
  };

  return (
    <StyledCheckboxCustom onClick={onClick}>
      {completed ? <CheckboxChecked /> : <CheckboxCircle />}
    </StyledCheckboxCustom>
  );
}

export default CheckboxCustom;
