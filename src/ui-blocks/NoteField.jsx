import { useSelector } from "react-redux";
import styled from "styled-components";

import NoteItem from "../base-blocks/NoteItem";
import NoteEmpty from "../base-blocks/NoteEmpty";

import { selectFilteredNotes } from "../base-blocks/noteSlice";

const StyledNoteField = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: var(--color-ebony-800);
  border-radius: 1rem 1rem 0 0;
  padding: 1rem;
`;

function NoteField() {
  const filteredNotes = useSelector(selectFilteredNotes);
  const toFiltered = useSelector((state) => state.note.filter);

  return (
    <StyledNoteField>
      {filteredNotes.length === 0 ? (
        toFiltered === "active" ? (
          <NoteEmpty>Active notes list is empty</NoteEmpty>
        ) : toFiltered === "completed" ? (
          <NoteEmpty>Completed notes list is empty</NoteEmpty>
        ) : (
          <NoteEmpty>Note list is empty now</NoteEmpty>
        )
      ) : (
        filteredNotes.map((note) => <NoteItem note={note} key={note.id} />)
      )}
    </StyledNoteField>
  );
}

export default NoteField;
