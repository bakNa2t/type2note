import styled from "styled-components";
import Button from "./Button";

const StyledNoteFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

function NoteFilter() {
  return (
    <StyledNoteFilter>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </StyledNoteFilter>
  );
}

export default NoteFilter;
