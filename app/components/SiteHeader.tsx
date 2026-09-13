"use client";

import type { Language, SectionId } from "../content";
import { sections, text } from "../content";

type Props = {
  language: Language;
  setLanguage: (language: Language) => void;
  active?: SectionId;
  onSection?: (section: SectionId) => void;
};

export function SiteHeader({ language, setLanguage, active, onSection }: Props) {
  const homeHref = `/?lang=${language}`;
  return (
    <header className="site-header">
      <a className="wordmark" href={homeHref} aria-label="Iris Feng home">IF<span>.</span></a>
      <nav aria-label={language === "zh" ? "作品集分类" : "Portfolio sections"}>
        {sections.map((section) => onSection ? (
          <button className={active === section.id ? "nav-item active" : "nav-item"} key={section.id} onClick={() => onSection(section.id)}>
            {text(section.label, language)}
          </button>
        ) : (
          <a className="nav-item" key={section.id} href={`/?lang=${language}&section=${section.id}#work`}>
            {text(section.label, language)}
          </a>
        ))}
      </nav>
      <div className="language-switch" aria-label="Language selector">
        <button aria-pressed={language === "en"} className={language === "en" ? "selected" : ""} onClick={() => setLanguage("en")}>EN</button>
        <span>/</span>
        <button aria-pressed={language === "zh"} className={language === "zh" ? "selected" : ""} onClick={() => setLanguage("zh")}>中文</button>
      </div>
    </header>
  );
}
