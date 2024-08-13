import { useSelector } from "react-redux";
import styled from "styled-components";

import NoteItem from "./NoteItem";
import NoteEmpty from "../ui-blocks/NoteEmpty";

import { selectFilteredNotes } from "./noteSlice";
import { useNoteLang } from "../context/NoteLangContext";
import { contentData } from "../data/content";

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

  const { lang } = useNoteLang();
  const { empty } = lang === "en" ? contentData.en : contentData.ru;
  const { allNotes, activeNotes, completedNotes } = empty;

  return (
    <StyledNoteField>
      {filteredNotes.length === 0 ? (
        toFiltered === "active" ? (
          <NoteEmpty>{activeNotes}</NoteEmpty>
        ) : toFiltered === "completed" ? (
          <NoteEmpty>{completedNotes}</NoteEmpty>
        ) : (
          <NoteEmpty>{allNotes}</NoteEmpty>
        )
      ) : (
        filteredNotes.map((note) => <NoteItem note={note} key={note.id} />)
      )}
    </StyledNoteField>
  );
}

export default NoteField;
