import { useDispatch, useSelector } from "react-redux";
import { ClearOutlined, DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components";

import NoteFilter from "./NoteFilter";
import Button from "./Button";
import NoteClearBtns from "./NoteClearBtns";

import {
  clearAllNotes,
  clearCompletedNotes,
  selectFilteredNotes,
} from "../base-blocks/noteSlice";

const StyledNoteFooterMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: var(--color-ebony-800);
  border-radius: 0 0 1rem 1rem;
`;

const NoteAmount = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  font-style: italic;
  color: var(--color-spring-green-200);

  & span {
    margin-right: 0.5rem;
    font-size: 2rem;
    font-style: normal;
    padding: 0.3rem 0.4rem;
    border-radius: 0.5rem;
    font-weight: 700;
    color: var(--color-spring-green-800);
    background-color: var(--color-spring-green-400);
  }
`;

function NoteFooterMenu() {
  const amountNote = useSelector(
    (state) => state.note.notes.filter((note) => note.completed !== true).length
  );
  const notes = useSelector(selectFilteredNotes);
  const dispatch = useDispatch();

  const completed = notes.filter((note) => note.completed === true).length;

  function handleClearAllNotes() {
    if (notes.length === 0) return;

    if (confirm("Are you sure you want to delete all notes?"))
      dispatch(clearAllNotes());
  }

  function handleClearCompletedNotes() {
    if (notes.length === 0) return;

    if (confirm("Are you sure you want to delete all completed notes?"))
      dispatch(clearCompletedNotes());
  }

  return (
    <StyledNoteFooterMenu>
      <NoteAmount>
        <span>{amountNote}</span>notes left
      </NoteAmount>
      <NoteFilter />
      <NoteClearBtns>
        <Button
          size="md"
          onClick={handleClearCompletedNotes}
          cleardesc={{ content: "Clear completed" }}
          disabled={notes.length === 0 || completed === 0}
        >
          <ClearOutlined />
        </Button>

        <Button
          size="md"
          onClick={handleClearAllNotes}
          cleardesc={{ content: "Clear all" }}
          disabled={notes.length === 0}
        >
          <DeleteOutlined />
        </Button>
      </NoteClearBtns>
    </StyledNoteFooterMenu>
  );
}

export default NoteFooterMenu;
