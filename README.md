# Iris Feng — bilingual portfolio

A low-maintenance bilingual academic and professional portfolio. The homepage presents seven horizontal categories; selecting one reveals its entries. Every entry has its own shareable detail page.

## Editing content

All public-facing portfolio records live in `app/content.ts`. To update the site, edit the English and Chinese text in one record. To add a new item, copy an existing record, give it a unique `slug`, and choose one of the seven section IDs.

Layout and interaction live in `app/components`; visual styling lives in `app/globals.css`. Images are stored in `public/images` and are referenced by filename from the matching content record.

You do not need to edit HTML for routine updates. On GitHub, open `app/content.ts`, choose the pencil icon, change the English and Chinese text, and commit the edit. The included workflow rebuilds and republishes the website automatically. New images can be uploaded to `public/images` through GitHub's web interface and then added to the relevant record's `media` list.

## Navigation model

- English / Chinese switch: remembered on the reader's device and included in shareable URLs.
- Top navigation: Education, Research, Experience, Publications, Coding, Awards, Extracurricular.
- Homepage index: clicking a category reveals its specific items.
- Detail pages: reusable editorial layout with overview sections and next-item navigation.

See `SITEMAP.md` for the full route and component plan.

## Public hosting

GitHub Pages is the official public host. `npm run build:github` creates the static version, including a standalone URL for every portfolio entry. Pushes to the GitHub repository trigger `.github/workflows/pages.yml`, so the public site updates automatically without a custom domain. The former Sites deployment is retained only as an unmaintained backup.
