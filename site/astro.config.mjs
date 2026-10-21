import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mermaid from "astro-mermaid";

// The site serves at https://desalpage.github.io/desalpage/ (project
// Pages). If a custom domain replaces that path later, remove `base` and
// set `site` accordingly.
export default defineConfig({
  site: "https://desalpage.github.io",
  base: "/desalpage/",
  integrations: [
    // Renders ```mermaid code blocks client-side; must run before Starlight.
    mermaid(),
    starlight({
      title: "desalpage",
      description:
        "A governance substrate for recursive multi-agent work — budgets before delegation, deferrals instead of silence.",
      sidebar: [
        { label: "Home", link: "/" },
        { label: "About", link: "/about/" },
        { label: "Blog", autogenerate: { directory: "blog" } },
      ],
    }),
  ],
});