import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 4.4rem 1rem 2rem;
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--color-spring-green-200);

  &::placeholder {
    font-size: 1.4rem;
    font-style: italic;
    color: var(--color-ebony-200);
    filter: opacity(0.8);
  }

  &::selection {
    color: var(--color-spring-green-800);
    background-color: var(--color-spring-green-200);
  }
`;

function Input({ value, onChange }) {
  Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
  };

  return (
    <StyledInput
      type="text"
      placeholder="Add new note..."
      name="create-note"
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
