import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { DetailClient } from "../app/components/DetailClient";
import { HomeClient } from "../app/components/HomeClient";
import { entries, text, type Language } from "../app/content";
import "../app/globals.css";

function PortfolioApp() {
  const match = window.location.pathname.match(/^\/portfolio\/([^/]+)\/?$/);
  const entry = match ? entries.find((item) => item.slug === decodeURIComponent(match[1])) : undefined;

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("lang");
    const language: Language = query === "zh" ? "zh" : "en";
    document.title = entry
      ? `${text(entry.title, language)} — Iris Feng`
      : language === "zh"
        ? "Iris Feng — 学术与专业作品集"
        : "Iris Feng — Academic Portfolio";
  }, [entry]);

  return entry ? <DetailClient entry={entry} /> : <HomeClient />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PortfolioApp />
  </StrictMode>,
);
