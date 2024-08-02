import styled from "styled-components";
import PorpTypes from "prop-types";

import { useNoteCounter } from "../context/NoteCounterContext";

const StyledNoteFilterWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem 0;
  border-radius: 1rem;
  background-color: var(--color-ebony-800);
`;

function NoteFilterWrapper({ children }) {
  NoteFilterWrapper.propTypes = {
    children: PorpTypes.node,
  };

  const { activeNotes, completedNotes } = useNoteCounter();

  return (
    <StyledNoteFilterWrapper
      activeNotes={activeNotes}
      completedNotes={completedNotes}
    >
      {children}
    </StyledNoteFilterWrapper>
  );
}

export default NoteFilterWrapper;
