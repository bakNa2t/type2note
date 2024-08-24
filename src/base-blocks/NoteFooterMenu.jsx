import { useSelector } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import NoteFilter from "../ui-blocks/NoteFilter";
import NoteClearBtns from "../ui-blocks/NoteClearBtns";

import { selectFilteredNotes } from "./noteSlice";
import { useNoteCounter } from "../context/NoteCounterContext";
import { useNoteLang } from "../context/NoteLangContext";
import { contentData } from "../data/content";

const StyledNoteFooterMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--color-ebony-800);
  border-radius: 0 0 1rem 1rem;
`;

const NoteAmount = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  font-style: italic;
  color: var(--color-spring-green-200);

  & span {
    margin-right: 0.5rem;
    font-size: 2rem;
    font-style: normal;
    padding: 0.1rem 0.5rem;
    border-radius: 0.5rem;
    font-weight: 700;
    color: var(--color-spring-green-200);
    background-color: var(--color-ebony-600);
  }
`;

function NoteFooterMenu({ isMobileSize }) {
  NoteFooterMenu.propTypes = {
    isMobileSize: PropTypes.bool,
  };

  const { activeNotes, completedNotes } = useNoteCounter();
  const notes = useSelector(selectFilteredNotes);

  const { lang } = useNoteLang();
  const { amount } = lang === "en" ? contentData.en : contentData.ru;

  return (
    <StyledNoteFooterMenu>
      <NoteAmount>
        <span>{activeNotes}</span>
        {amount}
      </NoteAmount>

      {isMobileSize && (
        <NoteFilter activeNotes={activeNotes} completedNotes={completedNotes} />
      )}

      <NoteClearBtns notes={notes} completedNotes={completedNotes} />
    </StyledNoteFooterMenu>
  );
}

export default NoteFooterMenu;
