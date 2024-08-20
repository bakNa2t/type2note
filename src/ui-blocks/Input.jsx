import styled from "styled-components";
import PropTypes from "prop-types";

import { useNoteLang } from "../context/NoteLangContext";
import { contentData } from "../data/content";

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 4.4rem 1rem 2rem;
  border: none;
  outline: none;
  border-radius: 1rem;
  background-color: var(--color-ebony-800);
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

  &:focus-within {
    outline: 0.4rem solid var(--color-ebony-400);
    outline-offset: 2px;
  }
`;

function Input({ value, onChange }) {
  Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
  };

  const { lang } = useNoteLang();
  const { placeholder } = lang === "en" ? contentData.en : contentData.ru;

  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      name="create-note"
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
