import type { MetadataRoute } from "next";

export const dynamic = "force-static";

/**
 * The wildcard rule below deliberately permits AI crawlers as well as search
 * ones — GPTBot, ClaudeBot, PerplexityBot, CCBot and Google-Extended are all
 * covered by `User-Agent: *`, so no named entries are needed and adding them
 * would change nothing.
 *
 * Google-Extended is the one worth knowing about: it governs whether this
 * content can ground answers in Gemini and AI Overviews. It is allowed on
 * purpose. If Crystal Arc ever wants to withhold the site from AI training
 * while staying in search, that is the agent to disallow — and it is a
 * commercial decision, not a technical one.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: "https://www.crystalarc.net/sitemap.xml",
  };
}
