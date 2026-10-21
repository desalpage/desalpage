import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

// Required on Astro 5: the loader feeds the content layer and the schema
// supplies Starlight's frontmatter (draft defaults, sidebar config). The
// production build filters out entries whose `draft` is not `false`, so
// omitting the schema silently drops every page.
export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};