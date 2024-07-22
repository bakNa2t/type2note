import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;
  padding: 1rem;
  border: none;
  background-color: transparent;
  color: var(--color-blue-light-200);

  &:hover {
    color: var(--color-blue-light-300);
  }
`;

function Button({ children }) {
  Button.propTypes = {
    children: PropTypes.node,
  };
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
