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

  return (
    <StyledNoteField>
      {filteredNotes.length === 0 ? (
        <NoteEmpty>Now note list is empty</NoteEmpty>
      ) : (
        filteredNotes.map((note) => <NoteItem note={note} key={note.id} />)
      )}
    </StyledNoteField>
  );
}

export default NoteField;
