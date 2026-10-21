import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

// Blog entries use the filename convention YYYY-MM-DD-slug.mdx — the
// date is the feed's pubDate, and the date prefix keeps the sidebar and
// the feed in chronological order without extra frontmatter.
export async function GET(context) {
  const docs = await getCollection("docs");
  const blog = docs.filter((page) =>
    /^blog\/\d{4}-\d{2}-\d{2}-/.test(page.id),
  );
  return rss({
    title: "desalpage",
    description:
      "A governance substrate for recursive multi-agent work — budgets before delegation, deferrals instead of silence.",
    site: context.site,
    items: blog.map((page) => {
      const date = page.id.match(/^blog\/(\d{4}-\d{2}-\d{2})-/)[1];
      return {
        title: page.data.title,
        description: page.data.description,
        pubDate: new Date(`${date}T00:00:00Z`),
        link: `/${page.id}/`,
      };
    }),
  });
}