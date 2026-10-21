# AGENTS.md — desalpage/desalpage (public release monorepo)

This is the **public release surface** of desalpage. The org-wide context
(`../AGENTS.md` — name, license, honesty discipline, repo topology) also
applies; read it if it did not already load.

## What lives here

- `site/` — Starlight site (landing, about, blog, RSS), deployed by
  GitHub Actions on push to `main`. Content sources live in
  `site/src/content/docs/`; blog entries follow the filename convention
  `YYYY-MM-DD-slug.mdx` — the date prefix orders the sidebar and the RSS
  feed and is the single source of truth for a post's date (the `Head`
  override derives each page's JSON-LD `datePublished` from it).
  Posts are documentation first: written to be read by humans and by AI
  agents, each post opens with a status line (`date · type · evidence
  status`), sets a dated sidebar label, and ends with a "How to cite"
  line and the AI-agent authorship note linking About. Site prose is
  drafted by AI agents under human direction — state this plainly;
  About carries the canonical disclosure. Underscore-prefixed files are
  excluded from the build, and Starlight's `draft: true` excludes a page
  from production builds (visible in dev) — but never commit drafts:
  everything committed here is public. Stage drafts locally or in the
  prototype; commit a post only when it is ready to publish.
- `papers/` — preprints and artifact bundles; papers appear here when
  released, never pre-announced.
- `packages/` — released code artifacts: one-way snapshots from the
  private prototype. **Never hand-edit anything under `packages/`;** each
  extraction is recorded in `packages/PROVENANCE.json`.

## Rules

- Publications (site copy, blog posts, papers) are authored here; this
  repo is their source of truth. Strategy, decisions, and mechanism
  development live in the private prototype (`../fluffy-waffle`) — link
  there, never copy strategy docs into this repo.
- Honesty discipline: public prose describes mechanisms; **no
  quantitative claims until the evaluation lands**.
- License: Apache-2.0 (`LICENSE`); any new `package.json` declares
  `"license": "Apache-2.0"`.
- Site work: `pnpm install && pnpm --filter @desalpage/site dev` (or
  `build`). Commit the lockfile (CI uses `--frozen-lockfile`); never
  commit `dist/`, `node_modules/`, `.pi/`, or `.env`.
- Never commit secrets or prototype-internal material into this public
  repo. Everything here is visible to anyone, forever.