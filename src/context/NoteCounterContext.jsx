import { createContext, useContext } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const NoteCounterContext = createContext();

function NoteCounterProvider({ children }) {
  NoteCounterProvider.propTypes = {
    children: PropTypes.node,
  };

  const activeNotes = useSelector(
    (state) => state.note.notes.filter((note) => note.completed !== true).length
  );

  const completedNotes = useSelector(
    (state) => state.note.notes.filter((note) => note.completed === true).length
  );

  return (
    <NoteCounterContext.Provider value={{ activeNotes, completedNotes }}>
      {children}
    </NoteCounterContext.Provider>
  );
}

function useNoteCounter() {
  const context = useContext(NoteCounterContext);

  if (context === undefined)
    throw new Error("NoteCounterContext was used outside NoteCounterProvider");

  return context;
}

export { NoteCounterProvider, useNoteCounter };
