"use client";

import { useEffect, useRef, useState } from "react";
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
  const navRef = useRef<HTMLElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    function updateScrollCue() {
      if (!nav) return;
      setCanScrollRight(nav.scrollLeft + nav.clientWidth < nav.scrollWidth - 6);
    }

    const activeItem = active ? nav.querySelector<HTMLElement>(`[data-section="${active}"]`) : null;
    activeItem?.scrollIntoView({ block: "nearest", inline: "center" });
    updateScrollCue();
    nav.addEventListener("scroll", updateScrollCue, { passive: true });
    window.addEventListener("resize", updateScrollCue);
    return () => {
      nav.removeEventListener("scroll", updateScrollCue);
      window.removeEventListener("resize", updateScrollCue);
    };
  }, [active, language]);

  return (
    <header className="site-header">
      <a className="wordmark" href={homeHref} aria-label="Iris Feng home">IF<span>.</span></a>
      <div className="nav-shell">
        <nav ref={navRef} aria-label={language === "zh" ? "作品集分类" : "Portfolio sections"}>
          {sections.map((section) => onSection ? (
            <button data-section={section.id} className={active === section.id ? "nav-item active" : "nav-item"} key={section.id} onClick={() => onSection(section.id)}>
              {text(section.label, language)}
            </button>
          ) : (
            <a data-section={section.id} className="nav-item" key={section.id} href={`/?lang=${language}&section=${section.id}#work`}>
              {text(section.label, language)}
            </a>
          ))}
        </nav>
        {canScrollRight && (
          <button
            className="nav-scroll-cue"
            type="button"
            aria-label={language === "zh" ? "显示更多栏目" : "Show more sections"}
            onClick={() => navRef.current?.scrollBy({ left: navRef.current.clientWidth * 0.62, behavior: "smooth" })}
          >
            {language === "zh" ? "更多" : "More"}<span aria-hidden="true">→</span>
          </button>
        )}
      </div>
      <div className="language-switch" aria-label="Language selector">
        <button aria-pressed={language === "en"} className={language === "en" ? "selected" : ""} onClick={() => setLanguage("en")}>EN</button>
        <span>/</span>
        <button aria-pressed={language === "zh"} className={language === "zh" ? "selected" : ""} onClick={() => setLanguage("zh")}>中文</button>
      </div>
    </header>
  );
}
