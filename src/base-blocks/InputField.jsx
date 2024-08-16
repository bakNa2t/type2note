import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EnterOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import styled from "styled-components";

import Button from "../ui-blocks/Button";
import Input from "../ui-blocks/Input";
import IconWrapper from "../ui-blocks/IconWrapper";
import InputWrapper from "../ui-blocks/InputWrapper";

import { addNote, selectFilteredNotes } from "./noteSlice";
import { useNoteLang } from "../context/NoteLangContext";
import { contentData } from "../data/content";

const StyledInputField = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 1rem;
  background-color: var(--color-ebony-800);
  margin: 2rem 0;
  overflow: hidden;
  box-shadow: 0 0 0.8rem 0.6rem var(--color-spring-green-200);

  &:focus-within {
    outline: 0.6rem solid var(--color-ebony-500);
    outline-offset: 2px;
    box-shadow: 0 0 1.4rem 0.8rem var(--color-spring-green-200);
  }
`;

function InputField() {
  const [createNote, setCreateNote] = useState("");
  const dispatch = useDispatch();
  const notes = useSelector(selectFilteredNotes);

  const { lang } = useNoteLang();
  const { success, error } =
    lang === "en" ? contentData.en.toast : contentData.ru.toast;

  function handleInput(e) {
    e.preventDefault();

    if (!createNote || createNote.trim() === "") {
      toast.error(error.emptyMsg);
      return;
    }

    if (notes.some((note) => note.content === createNote)) {
      toast.error(error.duplicateMsg);
      return;
    }

    dispatch(addNote(createNote));
    toast.success(success.addMsg);
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
