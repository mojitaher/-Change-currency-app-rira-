"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import i18n from "../app/utility/i18n";

type LangType = {
  lang: string;
  toggleLang: () => void;
};
const LangContext = createContext<LangType | undefined>(undefined);
export default function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState(i18n.language);
  const toggleLang = () => {
    const newLang = lang === "fa" ? "en" : "fa";
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };
  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}
export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) return;
  return context;
};
