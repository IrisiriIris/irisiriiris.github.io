# Iris Feng portfolio — sitemap and layout plan

## Sitemap

- `/` — bilingual landing page and expandable portfolio index
  - Education / 教育背景
    - `/portfolio/current-degree`
    - `/portfolio/earlier-education`
  - Research / 科研
    - `/portfolio/cardiac-acoustics`
    - `/portfolio/network-physiology`
  - Experience / 实习经历
    - `/portfolio/genomics-communication`
    - `/portfolio/research-governance`
  - Publications / 论文发表
    - `/portfolio/selected-publication`
    - `/portfolio/works-in-progress`
  - Awards / 获奖经历
    - `/portfolio/academic-awards`
    - `/portfolio/leadership-service-awards`

## Component and layout plan

- `SiteHeader`: wordmark, horizontal section navigation, EN/中文 switch.
- `HomeClient`: introduction, five-part portfolio index, and the active section's item list.
- `DetailClient`: reusable WordPress-style entry template with breadcrumbs, summary, tags, content sections, and next-entry navigation.
- `content.ts`: single source of truth for bilingual labels and entries. New items are added here; the homepage and routes use them automatically.
- `useLanguage`: remembers the reader's choice locally and keeps shareable `?lang=` URLs.

## Content model for every item

Each item contains a stable URL slug, category, date, bilingual title, affiliation, short summary, tags, and one or more bilingual detail sections. Images and external links can be added to the same record later without changing the page structure.
