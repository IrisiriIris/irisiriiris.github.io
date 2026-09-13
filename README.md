# Iris Feng — bilingual portfolio

A low-maintenance bilingual academic and professional portfolio. The homepage presents five horizontal categories; selecting one reveals its entries. Every entry has its own shareable detail page.

## Editing content

All public-facing portfolio records live in `app/content.ts`. To update the site, edit the English and Chinese text in one record. To add a new item, copy an existing record, give it a unique `slug`, and choose one of the five section IDs.

The site intentionally uses drafting copy and `20XX` dates until final content is supplied. Layout and interaction live in `app/components`; visual styling lives in `app/globals.css`.

## Navigation model

- English / Chinese switch: remembered on the reader's device and included in shareable URLs.
- Top navigation: Education, Research, Experience, Publications, Awards.
- Homepage index: clicking a category reveals its specific items.
- Detail pages: reusable editorial layout with overview sections and next-item navigation.

See `SITEMAP.md` for the full route and component plan.

## Public hosting

This scaffold is compatible with the included free Sites host. It can also be adapted for GitHub Pages or another static host later; no custom domain is required.
