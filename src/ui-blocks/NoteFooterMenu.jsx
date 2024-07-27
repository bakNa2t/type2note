import { useDispatch, useSelector } from "react-redux";
import { ClearOutlined, DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components";

import NoteFilter from "./NoteFilter";
import Button from "./Button";
import NoteClearBtns from "./NoteClearBtns";

import { clearAllNotes } from "../base-blocks/noteSlice";

const StyledNoteFooterMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  background-color: var(--color-blue-zola-600);
  border-radius: 0 0 1rem 1rem;
`;

const NoteAmount = styled.p`
  font-weight: 700;
  padding: 0.5rem;

  & span {
    font-weight: 400;
    font-size: 1.2rem;
    font-style: italic;
  }
`;

function NoteFooterMenu() {
  const amountNote = useSelector(
    (state) => state.note.notes.filter((note) => note.completed !== true).length
  );
  const dispatch = useDispatch();

  function handleClearAllNotes() {
    if (amountNote === 0) return;

    dispatch(clearAllNotes());
  }

  return (
    <StyledNoteFooterMenu>
      <NoteAmount>
        {amountNote} <span>notes left</span>
      </NoteAmount>
      <NoteFilter />
      <NoteClearBtns>
        <Button size="md">
          <ClearOutlined />
        </Button>

        <Button size="md" onClick={handleClearAllNotes}>
          <DeleteOutlined />
        </Button>
      </NoteClearBtns>
    </StyledNoteFooterMenu>
  );
}

export default NoteFooterMenu;
