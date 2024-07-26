import { useSelector } from "react-redux";
import styled from "styled-components";

import NoteItem from "../base-blocks/NoteItem";
import NoteEmpty from "../base-blocks/NoteEmpty";

import { selectFilteredNotes } from "../base-blocks/noteSlice";

const StyledNoteField = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: var(--color-blue-zola-600);
  border-radius: 1rem 1rem 0 0;
  padding: 1rem;
`;

function NoteField() {
  const filteredNotes = useSelector(selectFilteredNotes);
  console.log(filteredNotes);

  return (
    <StyledNoteField>
      {filteredNotes.length === 0 ? (
        <NoteEmpty>Here will be your notes</NoteEmpty>
      ) : (
        <NoteItem />
      )}
    </StyledNoteField>
  );
}

export default NoteField;
