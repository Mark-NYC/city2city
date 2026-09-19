// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Canonical production URL. Drives sitemap generation and canonical/OG tags.
// Override per environment (e.g. preview deploys) with the SITE_URL env var;
// otherwise this default is used.
const SITE_URL = process.env.SITE_URL ?? "https://www.city2citychurch.com";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Static output: the whole site prerenders to plain HTML in dist/ and can be
  // hosted on any static host/CDN. Revisit only if we need server rendering
  // (forms, auth, personalization) — see README "Deferred decisions".
  output: "static",
  integrations: [sitemap()],
});
