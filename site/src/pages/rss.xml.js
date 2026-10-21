import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

// Blog entries use the filename convention YYYY-MM-DD-slug.mdx — the
// date is the feed's pubDate, and the date prefix keeps the sidebar and
// the feed in chronological order without extra frontmatter.
//
// The site serves under the configured `base` (astro.config.mjs), but
// `context.site` does not include it, and @astrojs/rss resolves a
// `/`-rooted link against the `site` origin — which drops the base
// path. Links must therefore be absolute URLs with the base included;
// the channel link gets the same treatment. The atom:link rel="self"
// records the feed's own URL (the W3C feed validator's one
// recommendation for this feed; some readers require it).
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "");

export async function GET(context) {
  const docs = await getCollection("docs");
  // Draft pages are excluded from production builds by Starlight; the feed
  // must not list a page that will not be built. In dev a draft is visible,
  // so the feed lists it there — the same rule Starlight itself applies.
  const isProd = import.meta.env.PROD;
  const blog = docs.filter(
    (page) =>
      /^blog\/\d{4}-\d{2}-\d{2}-/.test(page.id) &&
      !(isProd && page.data.draft),
  );
  const site = new URL(`${BASE}/`, context.site).href;
  const feedUrl = new URL(`${BASE}/rss.xml`, context.site).href;
  return rss({
    title: "desalpage",
    description:
      "A governance substrate for recursive multi-agent work — budgets before delegation, deferrals instead of silence.",
    site,
    xmlns: { atom: "http://www.w3.org/2005/Atom" },
    customData: `<atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>`,
    items: blog.map((page) => {
      const date = page.id.match(/^blog\/(\d{4}-\d{2}-\d{2})-/)[1];
      return {
        title: page.data.title,
        description: page.data.description,
        pubDate: new Date(`${date}T00:00:00Z`),
        link: new URL(`${BASE}/${page.id}/`, context.site).href,
      };
    }),
  });
}