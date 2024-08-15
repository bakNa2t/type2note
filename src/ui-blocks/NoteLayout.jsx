import styled from "styled-components";
import PropTypes from "prop-types";

const StyledNoteLayout = styled.div`
  max-width: 60rem;
  margin: auto;
  padding: 1rem;

  @media screen and (max-width: 500px) {
    padding: 3rem;
  }
`;

function NoteLayout({ children }) {
  NoteLayout.propTypes = {
    children: PropTypes.node,
  };

  return <StyledNoteLayout>{children}</StyledNoteLayout>;
}

export default NoteLayout;
