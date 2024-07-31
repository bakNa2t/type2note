import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--color-spring-green-200);

  &::placeholder {
    font-style: italic;
    color: var(--color-ebony-400);
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
