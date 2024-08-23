import { useDispatch } from "react-redux";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "../ui-blocks/Button";
import Modal from "../ui-blocks/Modal";
import ConfirmDelete from "../ui-blocks/ConfirmDelete";
import CheckboxCustom from "../ui-blocks/CheckboxCustom";
import InputEditField from "./InputEditField";

import { crossNote, deleteNote } from "./noteSlice";
import { useNoteLang } from "../context/NoteLangContext";
import { contentData } from "../data/content";

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

const BlockBtns = styled.div`
  display: flex;
  gap: 0.4rem;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 0.2rem;
  }
`;

function NoteItem({ note }) {
  NoteItem.propTypes = {
    note: PropTypes.object,
  };

  const { content, id, completed, time } = note;
  const dispatch = useDispatch();

  const { lang } = useNoteLang();
  const {
    confirmModal: { desc },
    toast: { success },
  } = lang === "en" ? contentData.en : contentData.ru;

  function handleDeleteNote() {
    dispatch(deleteNote(id));
    toast.success(success.deleteMsg);
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

      <BlockBtns>
        <Modal>
          <Modal.Open opens="edit">
            <Button size="sm" border="true">
              <EditOutlined />
            </Button>
          </Modal.Open>

          <Modal.Window name="edit">
            <InputEditField note={note} />
          </Modal.Window>

          <Modal.Open opens="delete">
            <Button size="sm" border="true">
              <CloseOutlined />
            </Button>
          </Modal.Open>

          <Modal.Window name="delete">
            <ConfirmDelete onConfirm={() => handleDeleteNote()} desc={desc} />
          </Modal.Window>
        </Modal>
      </BlockBtns>
    </StyledNoteItem>
  );
}

export default NoteItem;
