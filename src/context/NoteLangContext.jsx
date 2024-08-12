import { createContext, useContext } from "react";
import PropTypes from "prop-types";

import { useLocalStorage } from "../hooks/useLocalStorage";

const NoteLangContext = createContext();

function NoteLangProvider({ children }) {
  NoteLangProvider.propTypes = {
    children: PropTypes.node,
  };

  const [lang, setLang] = useLocalStorage("lang", "en");

  function toggleLang() {
    setLang(lang === "en" ? "ru" : "en");
  }

  return (
    <NoteLangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </NoteLangContext.Provider>
  );
}

function useNoteLang() {
  const context = useContext(NoteLangContext);

  if (context === undefined)
    throw new Error("NoteCounterContext was used outside NoteCounterProvider");

  return context;
}

export { NoteLangProvider, useNoteLang };
