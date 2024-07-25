import { useState } from "react";
import { useDispatch } from "react-redux";
import { EnterOutlined } from "@ant-design/icons";
import styled from "styled-components";

import Button from "../ui-blocks/Button";
import Input from "../ui-blocks/Input";
import IconWrapper from "../ui-blocks/IconWrapper";

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

function InputField() {
  const [createNote, setCreateNote] = useState("");
  const dispatch = useDispatch();

  function handleInput(e) {
    e.preventDefault();

    if (!createNote) return;

    dispatch(addNote(createNote));
    setCreateNote("");
  }

  return (
    <StyledInputField onSubmit={handleInput}>
      <InputWrapper>
        <Input
          value={createNote}
          onChange={(e) => setCreateNote(e.target.value)}
        />
        <IconWrapper>
          <Button size="lg">
            <EnterOutlined />
          </Button>
        </IconWrapper>
      </InputWrapper>
    </StyledInputField>
  );
}

export default InputField;
