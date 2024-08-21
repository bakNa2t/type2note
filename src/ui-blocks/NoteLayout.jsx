import styled from "styled-components";

import Wrapper from "./Wrapper";
import Heading from "./Heading";
import InputField from "../base-blocks/InputField";
import NoteField from "../base-blocks/NoteField";
import NoteFooterMenu from "./NoteFooterMenu";
import NoteFilterWrapper from "./NoteFilterWrapper";

import { useResizeScreen } from "../hooks/useResizeScreen";

const StyledNoteLayout = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  padding: 1rem;

  @media screen and (max-width: 500px) {
    padding: 3rem;
  }
`;

function NoteLayout() {
  const isMobileSize = useResizeScreen();

  return (
    <StyledNoteLayout>
      <Wrapper>
        <Heading />
        <InputField />
        <NoteField />
        <NoteFooterMenu isMobileSize={isMobileSize} />
        {!isMobileSize && <NoteFilterWrapper />}
      </Wrapper>
    </StyledNoteLayout>
  );
}

export default NoteLayout;
