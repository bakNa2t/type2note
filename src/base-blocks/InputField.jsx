import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { EnterOutlined } from "@ant-design/icons";
import styled from "styled-components";

import Button from "../ui-blocks/Button";
import Input from "../ui-blocks/Input";

import { addNote } from "./noteSlice";

const StyledInputField = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 1rem;
  background-color: var(--color-blue-zola-600);
  margin: 2rem 0;
  overflow: hidden;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  font-size: 2rem;

  & > button {
    padding: 0.5rem;
    border-radius: 0.4rem;
  }
`;

// const Input = styled.input`
//   width: 100%;
//   padding: 1rem;
//   border: none;
//   background-color: transparent;
//   color: var(--color-blue-light-200);
// `;

function InputField() {
  const [createNote, setCreateNote] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null); //questinanble

  function handleInput(e) {
    e.preventDefault();

    if (!createNote) return;

    dispatch(addNote(createNote));
    // inputRef.current.blur();
    setCreateNote("");
  }

  return (
    <StyledInputField onSubmit={handleInput}>
      <InputWrapper>
        <Input
          ref={inputRef}
          value={createNote}
          onChange={(e) => setCreateNote(e.target.value)}
        />
        <IconWrapper>
          <Button>
            <EnterOutlined />
          </Button>
        </IconWrapper>
      </InputWrapper>
    </StyledInputField>
  );
}

export default InputField;
