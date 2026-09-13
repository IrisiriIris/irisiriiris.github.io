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
        <p className="eyebrow">{zh ? "神经科学 · 生理学 · 精准医学" : "NEUROSCIENCE · PHYSIOLOGY · PRECISION MEDICINE"}</p>
        <h1>{zh ? <>冯舒扬<br /><em>探索复杂生命系统。</em></> : <>Iris Feng<br /><em>Exploring complex living systems.</em></>}</h1>
        <div className="hero-bottom">
          <p>{zh ? "这是一个记录研究、学习与实践的双语学术作品集。当前版本专注于信息结构，内容将逐步完善。" : "A bilingual academic portfolio spanning research, learning, and practice. This first version establishes the structure for content to come."}</p>
          <a href="#work">{zh ? "浏览作品" : "Explore portfolio"} <span>↓</span></a>
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-heading"><p>{zh ? "作品集目录" : "Portfolio index"}</p><span>01 — 05</span></div>
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
        <p>{zh ? "内容结构版本 · 2026" : "Structure edition · 2026"}</p>
      </footer>
    </main>
  );
}
