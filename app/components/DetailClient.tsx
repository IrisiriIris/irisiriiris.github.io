"use client";

import { entries, sections, text, type PortfolioEntry } from "../content";
import { useLanguage } from "../useLanguage";
import { SiteHeader } from "./SiteHeader";

export function DetailClient({ entry }: { entry: PortfolioEntry }) {
  const { language, setLanguage } = useLanguage();
  const zh = language === "zh";
  const section = sections.find((item) => item.id === entry.section)!;
  const index = entries.findIndex((item) => item.slug === entry.slug);
  const next = entries[(index + 1) % entries.length];

  return (
    <main>
      <SiteHeader language={language} setLanguage={setLanguage} />
      <article className="detail-page">
        <div className="breadcrumbs">
          <a href={`/?lang=${language}&section=${entry.section}#work`}>{zh ? "作品集" : "Portfolio"}</a>
          <span>/</span><span>{text(section.label, language)}</span>
        </div>
        <header className="detail-hero">
          <div>
            <p className="eyebrow">{entry.year} · {text(entry.subtitle, language)}</p>
            <h1 className={zh ? "zh-title" : undefined}>{text(entry.title, language)}</h1>
          </div>
          <p className="detail-summary">{text(entry.summary, language)}</p>
        </header>
        <div className="detail-tags">{entry.tags.map((tag) => <span key={tag.en}>{text(tag, language)}</span>)}</div>

        {entry.metrics && (
          <div className="metric-grid">
            {entry.metrics.map((metric) => (
              <div className="metric" key={`${metric.value}-${metric.label.en}`}>
                <strong>{metric.value}</strong>
                <span>{text(metric.label, language)}</span>
              </div>
            ))}
          </div>
        )}

        {entry.media && (
          <div className={`media-grid ${entry.media.length === 1 ? "single" : ""}`}>
            {entry.media.map((item) => (
              <figure key={item.src} className={item.contain ? "contain" : undefined}>
                <a href={item.src} target="_blank" rel="noreferrer" aria-label={zh ? "打开大图" : "Open full-size image"}>
                  <img src={item.src} alt={text(item.alt, language)} />
                </a>
                <figcaption>{text(item.caption, language)}</figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="detail-body">
          <aside>
            <p className="panel-label">{zh ? "项目定位" : "Project note"}</p>
            <p>{entry.aside ? text(entry.aside, language) : (zh ? "本页概括项目背景、承担工作、方法与成果。" : "This page summarises the context, contribution, methods, and outcome.")}</p>
            {entry.links && (
              <div className="detail-links">
                {entry.links.map((link) => (
                  <a href={link.href} key={link.href} target="_blank" rel="noreferrer">{text(link.label, language)} <span aria-hidden="true">↗</span></a>
                ))}
              </div>
            )}
          </aside>
          <div className="detail-sections">
            {entry.detail.map((section, i) => (
              <section key={section.heading.en}>
                <span>0{i + 1}</span>
                <div><h2>{text(section.heading, language)}</h2><p>{text(section.body, language)}</p></div>
              </section>
            ))}
          </div>
        </div>
      </article>

      <a className="next-entry" href={`/portfolio/${next.slug}?lang=${language}`}>
        <span>{zh ? "下一个条目" : "Next entry"}</span>
        <strong>{text(next.title, language)}</strong>
        <i aria-hidden="true">→</i>
      </a>
    </main>
  );
}
