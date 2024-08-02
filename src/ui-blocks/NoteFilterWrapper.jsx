import styled from "styled-components";

import NoteFilter from "./NoteFilter";

import { useNoteCounter } from "../context/NoteCounterContext";

const StyledNoteFilterWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem 0;
  border-radius: 1rem;
  background-color: var(--color-ebony-800);
`;

function NoteFilterWrapper() {
  const { activeNotes, completedNotes } = useNoteCounter();

  return (
    <StyledNoteFilterWrapper>
      <NoteFilter activeNotes={activeNotes} completedNotes={completedNotes} />
    </StyledNoteFilterWrapper>
  );
}

export default NoteFilterWrapper;
