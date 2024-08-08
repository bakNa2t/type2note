import { useDispatch } from "react-redux";
import { CloseOutlined /*, EditOutlined*/ } from "@ant-design/icons";
import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "../ui-blocks/Button";
import Modal from "../ui-blocks/Modal";
import ConfirmDelete from "../ui-blocks/ConfirmDelete";
import CheckboxCustom from "../ui-blocks/CheckboxCustom";

import { crossNote, deleteNote } from "./noteSlice";

const StyledNoteItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  min-height: 3rem;
  border-bottom: 1px solid var(--color-spring-green-100);
`;

const NoteTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--color-spring-green-200);
`;

const NoteText = styled.p`
  width: 100%;
  font-weight: 500;
  font-size: clamp(1.6rem, 3vw, 1.2rem);
`;

const NoteTextCrossed = styled.p`
  width: 100%;
  font-size: clamp(1.6rem, 3vw, 1.2rem);
  text-decoration: line-through;
  filter: opacity(0.5);
`;

const NoteTime = styled.span`
  display: inline-block;
  margin-right: 1rem;
  font-size: clamp(1rem, 3vw, 0.8rem);
`;

function NoteItem({ note }) {
  NoteItem.propTypes = {
    note: PropTypes.object,
  };

  const { content, id, completed, time } = note;
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
        <NoteTextWrapper>
          <NoteTime>{time}</NoteTime>
          <NoteTextCrossed>{content}</NoteTextCrossed>
        </NoteTextWrapper>
      ) : (
        <NoteTextWrapper>
          <NoteTime>{time}</NoteTime>
          <NoteText>{content}</NoteText>
        </NoteTextWrapper>
      )}
      {/*<Button size="sm">
        <EditOutlined />
        </Button> */}

      <Modal>
        <Modal.Open opens="delete">
          <Button size="sm">
            <CloseOutlined />
          </Button>
        </Modal.Open>

        <Modal.Window name="delete">
          <ConfirmDelete onConfirm={handleDeleteNote} desc="note" />
        </Modal.Window>
      </Modal>
    </StyledNoteItem>
  );
}

export default NoteItem;
