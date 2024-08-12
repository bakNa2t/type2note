import { useState } from "react";

export function useToggleLang() {
  const [lang, setLang] = useState("en");

  function toggleLang() {
    setLang(lang === "en" ? "ru" : "en");
  }

  return { lang, toggleLang };
}
