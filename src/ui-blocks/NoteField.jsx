import styled from "styled-components";

import NoteItem from "../base-blocks/NoteItem";

const StyledNoteField = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: var(--color-blue-zola-600);
  border-radius: 1rem 1rem 0 0;
  padding: 1rem;
`;

function NoteField() {
  return (
    <StyledNoteField>
      <NoteItem />
    </StyledNoteField>
  );
}

export default NoteField;
