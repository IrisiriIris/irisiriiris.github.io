"use client";

import { useEffect, useState } from "react";
import { entriesFor, sections, text, type SectionId } from "../content";
import { useLanguage } from "../useLanguage";
import { SiteHeader } from "./SiteHeader";

export function HomeClient() {
  const { language, setLanguage } = useLanguage();
  const [active, setActive] = useState<SectionId>("research");

  useEffect(() => {
    const section = new URLSearchParams(window.location.search).get("section");
    if (sections.some((item) => item.id === section)) setActive(section as SectionId);
  }, []);

  const zh = language === "zh";
  const current = sections.find((section) => section.id === active)!;
  const currentEntries = entriesFor(active);

  function chooseSection(section: SectionId, scroll = true) {
    setActive(section);
    const url = new URL(window.location.href);
    url.searchParams.set("section", section);
    window.history.replaceState({}, "", url);
    if (scroll) document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main>
      <SiteHeader language={language} setLanguage={setLanguage} active={active} onSection={chooseSection} />
      <section className="hero" id="top">
        <div className="hero-main">
          <p className="eyebrow">{zh ? "冯舒扬 · IRIS FENG" : "IRIS SHUYANG FENG"}</p>
          <h1>Portfolio</h1>
        </div>
        <div className="hero-bottom">
          <div className="hero-intro">
            <p>{zh ? "记录我在医学科学、临床研究与技术转化中的学习、科研与专业实践。" : "Selected work across medical science, clinical research, and healthcare translation."}</p>
            <span>{zh ? "教育 · 科研 · 实践 · 论文 · 获奖 · 课外活动" : "Education · Research · Experience · Publications · Awards · Extracurricular"}</span>
          </div>
          <a href="#work">{zh ? "浏览作品" : "Explore portfolio"} <span>↓</span></a>
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-heading"><p>{zh ? "作品集目录" : "Portfolio index"}</p><span>01 — 06</span></div>
        <div className="section-tabs" role="tablist" aria-label={zh ? "作品集分类" : "Portfolio categories"}>
          {sections.map((section, index) => (
            <button role="tab" aria-selected={active === section.id} className={active === section.id ? "section-tab active" : "section-tab"} key={section.id} onClick={() => chooseSection(section.id, false)}>
              <span>0{index + 1}</span>{text(section.label, language)}
            </button>
          ))}
        </div>

        <div className="portfolio-section" role="tabpanel">
          <aside className="section-intro">
            <p className="panel-label">{zh ? "当前分类" : "Current section"}</p>
            <h2>{text(current.label, language)}</h2>
            <p>{text(current.intro, language)}</p>
            <span>{String(currentEntries.length).padStart(2, "0")} {zh ? "个条目" : "entries"}</span>
          </aside>
          <div className="entry-list">
            {currentEntries.map((entry, index) => (
              <a className="entry-card" href={`/portfolio/${entry.slug}?lang=${language}`} key={entry.slug}>
                <div className="card-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="entry-copy">
                  <p className="card-meta">{entry.year} · {text(entry.subtitle, language)}</p>
                  <h3>{text(entry.title, language)}</h3>
                  <p>{text(entry.summary, language)}</p>
                  <div className="tag-row">{entry.tags.map((tag) => <span key={tag.en}>{text(tag, language)}</span>)}</div>
                </div>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div><span className="wordmark">IF<span>.</span></span><p>{zh ? "学术与专业作品集" : "Academic & professional portfolio"}</p></div>
        <p>{zh ? "作品集 · 2026" : "Portfolio · 2026"}</p>
      </footer>
    </main>
  );
}
