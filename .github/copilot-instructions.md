# AI Coding Agent Instructions for Beacon Digital Frontend

## Project Overview
This project is a static marketing website for Beacon Digital, built with [Eleventy (11ty)](https://www.11ty.dev/). It uses Nunjucks templates, Markdown for content, and is deployed via Netlify with Netlify CMS for content management.

## Architecture & Structure
- **Static Site Generator:** Eleventy (11ty) v3.1.1
- **Templates:** Nunjucks (`.njk` in root and `_includes/`)
- **Content:** Markdown blog posts in `blog/` (with YAML frontmatter)
- **Assets:** CSS/JS/images in `assets/` (passthrough to `_site/`)
- **Output:** Built site in `_site/` (mirrors source structure)
- **CMS:** Netlify CMS (`admin/config.yml`)
- **Serverless:** Netlify Functions in `netlify/functions/`

## Key Patterns & Conventions
- **Blog Posts:**
	- Location: `blog/YYYY-MM-DD-title.md`
	- Required frontmatter: `title`, `date`, `author`, `image`
	- Example: See `blog/2025-06-24-best-side-hustles-to-start-in-2025-low-investment-high-profit.md`
- **Templates:**
	- All pages extend `_includes/layout.njk` via `{% extends "layout.njk" %}`
	- Use `{% for post in collections.blog %}` to loop blog posts
- **Collections:**
	- `collections.blog` is the main blog post collection
- **Date Formatting:**
	- Use Luxon filter: `{{ date | date("MMMM D, YYYY") }}`
- **Assets:**
	- Images: `assets/img/` (reference as `/assets/img/...`)
	- CSS: `assets/css/` (Bootstrap + custom)
	- JS: `assets/js/` (inline or referenced)
- **File Naming:**
	- Kebab-case for URLs and files (e.g., `about-us.html`)
- **Frontmatter:**
	- Required for blog posts, optional for pages

## Developer Workflows
- **Build:** `npm run build` (runs Eleventy, outputs to `_site/`)
- **Local Development:** `npm start` (serves at `localhost:8080`)
- **Deploy:** Push to `main` branch auto-deploys to Netlify
- **Content Editing:** Use Netlify CMS at `/admin/` (see `admin/config.yml` for config)
- **Serverless Functions:** Place in `netlify/functions/` (auto-deployed by Netlify)

## Integration Points & External Dependencies
- **Netlify:** Handles hosting, serverless functions, and CMS
- **Luxon:** Used for date formatting in templates
- **Bootstrap:** Main CSS framework, extended by custom styles

## Examples
- **New Blog Post:** Create `blog/YYYY-MM-DD-title.md` with frontmatter
- **Recent Posts Loop:** See `home.njk` for `{% for post in collections.blog | reverse | slice(0,4) %}`
- **Layout Usage:** All templates `{% extends "layout.njk" %}`

## References
- **Key Files:**
	- `_includes/layout.njk`: Main HTML layout
	- `admin/config.yml`: Netlify CMS config
	- `package.json`: Scripts and dependencies
	- `blog/`: Blog post Markdown files
	- `assets/`: Static assets (CSS, JS, images)
	- `netlify/functions/`: Serverless functions

---
**For AI agents:**
- Follow file naming, frontmatter, and asset conventions strictly
- Use Eleventy/Nunjucks idioms for templates and collections
- Reference actual examples in `blog/`, `home.njk`, and `_includes/layout.njk` for patterns
- Do not modify files in `_site/` (output only)