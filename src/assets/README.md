# src/assets

Images and media that should go through Astro's build pipeline
(optimization, hashing, responsive `<Image>`). Import them from `.astro`
files, e.g.:

```astro
---
import { Image } from "astro:assets";
import logo from "@/assets/logo.svg";
---

<Image src={logo} alt="City2City" />
```

For files that must be served as-is at a stable URL (e.g. `robots.txt`,
`favicon.svg`, verification files, PDFs), use the top-level `public/`
directory instead — those are copied verbatim to the site root.
