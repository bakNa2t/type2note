import { useState } from "react";
import { useDispatch } from "react-redux";
import { EnterOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "../ui-blocks/Button";
import Input from "../ui-blocks/Input";
import IconWrapper from "../ui-blocks/IconWrapper";
import InputWrapper from "../ui-blocks/InputWrapper";

import { editNote as editCurrentNote } from "./noteSlice";

const StyledInputEditField = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 1rem;
  background-color: var(--color-ebony-800);
  margin: 2rem 0;
  overflow: hidden;

  &:focus-within {
    outline: 0.4rem solid var(--color-ebony-400);
    outline-offset: 2px;
  }
`;

const Title = styled.h4`
  text-align: center;
  font-size: clamp(2rem, 5vw, 2.6rem);
  color: var(--color-spring-green-200);
  text-shadow: 0 0 1rem var(--color-spring-green-400);
  -webkit-text-stroke: 0.1rem var(--color-spring-green-800);
`;

function InputEditField({ note, onCloseModal }) {
  InputEditField.propTypes = {
    note: PropTypes.object,
    onCloseModal: PropTypes.func,
  };

  const [editNote, setEditNote] = useState(note.content);
  const dispatch = useDispatch();

  function handleEditInput(e) {
    e.preventDefault();

    if (!editNote || editNote.trim() === "") {
      toast.error("Please enter a note");
      return;
    }

    dispatch(editCurrentNote({ ...note, content: editNote }));
    setEditNote("");

    onCloseModal();
  }

  return (
    <>
      <Title>Edit note</Title>
      <StyledInputEditField onSubmit={handleEditInput}>
        <InputWrapper>
          <Input
            value={editNote}
            onChange={(e) => setEditNote(e.target.value)}
          />
          <IconWrapper>
            <Button size="lg">
              <EnterOutlined />
            </Button>
          </IconWrapper>
        </InputWrapper>
      </StyledInputEditField>
    </>
  );
}

export default InputEditField;
