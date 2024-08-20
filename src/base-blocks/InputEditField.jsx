import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckSquareOutlined, CloseSquareOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "../ui-blocks/Button";
import Input from "../ui-blocks/Input";
import InputWrapper from "../ui-blocks/InputWrapper";
import ModalHeading from "../ui-blocks/ModalHeading";

import { editNote as editCurrentNote, selectFilteredNotes } from "./noteSlice";
import { useNoteLang } from "../context/NoteLangContext";
import { contentData } from "../data/content";

const ModalField = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media screen and (max-width: 500px) {
    width: 30rem;
  }
  @media screen and (max-width: 320px) {
    width: 25rem;
  }
`;

const StyledInputEditFieldForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  overflow: hidden;

  & div {
    display: flex;
    justify-content: flex-end;
    padding: 1rem 1rem;
    gap: 1.2rem;
  }
`;

function InputEditField({ note, onCloseModal }) {
  InputEditField.propTypes = {
    note: PropTypes.object,
    onCloseModal: PropTypes.func,
  };

  const [editNote, setEditNote] = useState(note.content);
  const dispatch = useDispatch();

  const notes = useSelector(selectFilteredNotes);
  const { lang } = useNoteLang();
  const {
    toast: { success, error },
    editModal,
  } = lang === "en" ? contentData.en : contentData.ru;

  function handleEditInput(e) {
    e.preventDefault();

    if (!editNote || editNote.trim() === "") {
      toast.error(error.emptyMsg);
      return;
    }

    if (
      editNote === note.content ||
      notes.some((note) => note.content === editNote)
    ) {
      toast.error(error.duplicateMsg);
      return;
    }

    dispatch(editCurrentNote({ ...note, content: editNote }));
    toast.success(success.editMsg);
    setEditNote("");

    onCloseModal();
  }

  return (
    <ModalField>
      <ModalHeading as={"h4"}>{editModal}</ModalHeading>
      <StyledInputEditFieldForm onSubmit={handleEditInput}>
        <InputWrapper>
          <Input
            value={editNote}
            onChange={(e) => setEditNote(e.target.value)}
          />
        </InputWrapper>

        <div>
          <Button
            size="xxl"
            color="theme"
            filter="shadowSm"
            onClick={onCloseModal}
          >
            <CloseSquareOutlined />
          </Button>
          <Button size="xxl" color="theme" filter="shadowSm">
            <CheckSquareOutlined />
          </Button>
        </div>
      </StyledInputEditFieldForm>
    </ModalField>
  );
}

export default InputEditField;
