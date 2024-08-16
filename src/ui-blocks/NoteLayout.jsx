import styled from "styled-components";
import PropTypes from "prop-types";

const StyledNoteLayout = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  padding: 1rem;

  @media screen and (max-width: 500px) {
    padding: 3rem;
  }
`;

const Wrapper = styled.div`
  margin: auto;
  max-width: 60rem;
`;

function NoteLayout({ children }) {
  NoteLayout.propTypes = {
    children: PropTypes.node,
  };

  return (
    <StyledNoteLayout>
      <Wrapper>{children}</Wrapper>
    </StyledNoteLayout>
  );
}

export default NoteLayout;
