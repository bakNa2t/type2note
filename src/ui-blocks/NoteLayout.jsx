import styled from "styled-components";

import Wrapper from "./Wrapper";
import InputField from "../base-blocks/InputField";
import NoteField from "../base-blocks/NoteField";
import NoteFooterMenu from "./NoteFooterMenu";
import NoteFilterWrapper from "./NoteFilterWrapper";
import ModalHeading from "./ModalHeading";

import { useResizeScreen } from "../hooks/useResizeScreen";
import { useNoteLang } from "../context/NoteLangContext";
import { contentData } from "../data/content";

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

  const lang = useNoteLang();
  const { appTitle } = lang.lang === "en" ? contentData.en : contentData.ru;

  return (
    <StyledNoteLayout>
      <Wrapper>
        <ModalHeading as={"h1"}>{appTitle}</ModalHeading>
        <InputField />
        <NoteField />
        <NoteFooterMenu isMobileSize={isMobileSize} />
        {!isMobileSize && <NoteFilterWrapper />}
      </Wrapper>
    </StyledNoteLayout>
  );
}

export default NoteLayout;
