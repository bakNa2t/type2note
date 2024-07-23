import styled from "styled-components";

import NoteFilter from "./NoteFilter";
import Button from "./Button";

const StyledNoteFooterMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  background-color: var(--color-blue-zola-600);
  border-radius: 0 0 1rem 1rem;
`;

const NoteAmount = styled.p`
  font-weight: 700;

  & span {
    font-weight: 400;
    font-size: 1.2rem;
    font-style: italic;
  }
`;

function NoteFooterMenu() {
  const amountNote = 0;

  return (
    <StyledNoteFooterMenu>
      <NoteAmount>
        {amountNote} <span>notes left</span>
      </NoteAmount>
      <NoteFilter />
      <Button>Clear completed</Button>
    </StyledNoteFooterMenu>
  );
}

export default NoteFooterMenu;
