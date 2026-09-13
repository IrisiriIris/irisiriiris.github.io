"use client";

import { useEffect, useState } from "react";
import type { Language } from "./content";

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("lang");
    const saved = window.localStorage.getItem("iris-language");
    const initial = query === "zh" || query === "en" ? query : saved === "zh" ? "zh" : "en";
    setLanguageState(initial);
    document.documentElement.lang = initial === "zh" ? "zh-CN" : "en";
  }, []);

  function setLanguage(next: Language) {
    setLanguageState(next);
    window.localStorage.setItem("iris-language", next);
    document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState({}, "", url);
  }

  return { language, setLanguage };
}
