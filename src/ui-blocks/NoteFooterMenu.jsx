import styled from "styled-components";

const StyledNoteFooterMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding: 1.5rem;
  background-color: var(--color-blue-zola-600);
  border-radius: 0 0 1rem 1rem;
`;

function NoteFooterMenu() {
  const amountNote = 0;

  return (
    <StyledNoteFooterMenu>
      <p>{amountNote} notes left</p>
    </StyledNoteFooterMenu>
  );
}

export default NoteFooterMenu;
