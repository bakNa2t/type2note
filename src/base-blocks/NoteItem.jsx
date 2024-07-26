import { useDispatch } from "react-redux";
import { CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "../ui-blocks/Button";
import CheckboxCustom from "../ui-blocks/CheckboxCustom";

import { crossNote, deleteNote } from "./noteSlice";

const StyledNoteItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  min-height: 3rem;
  border-bottom: 1px solid var(--color-blue-light-300);
`;

const NoteText = styled.p`
  width: 100%;
  font-size: clamp(1.4rem, 3vw, 1.2rem);
`;

const NoteTextCrossed = styled.p`
  width: 100%;
  font-size: clamp(1.4rem, 3vw, 1.2rem);
  text-decoration: line-through;
  color: var(--color-blue-light-700);
`;

function NoteItem({ note }) {
  NoteItem.propTypes = {
    note: PropTypes.object,
  };

  const { content, id, completed } = note;
  const dispatch = useDispatch();

  function handleDeleteNote() {
    dispatch(deleteNote(id));
  }

  function handleCrossNote() {
    dispatch(crossNote(id));
  }

  return (
    <StyledNoteItem>
      <CheckboxCustom onClick={handleCrossNote} completed={completed} />
      {completed ? (
        <NoteTextCrossed>{content}</NoteTextCrossed>
      ) : (
        <NoteText>{content}</NoteText>
      )}
      <Button size="sm" onClick={handleDeleteNote}>
        <CloseOutlined />
      </Button>
    </StyledNoteItem>
  );
}

export default NoteItem;
