# Grant Dewell Phillips — Double Bassist

Marketing site for Grant Phillips, double bassist at MSU College of Music. Generates gig leads (weddings, churches, jazz, orchestral subbing) within ~100 miles of East Lansing, MI.

**Theme:** Cinematic dark — pure black background, gold accents, Fraunces display + Inter body.

## Stack

- **[Astro 4](https://astro.build)** — static site generator, component-based
- **[Tailwind CSS](https://tailwindcss.com)** — utility-first styling
- Builds to static HTML, deploys to Cloudflare Pages

## Cloudflare Pages settings

> **IMPORTANT:** Existing Cloudflare Pages projects connected to this repo need to be reconfigured. The site no longer serves raw HTML from the root — it builds via Astro.

Go to **Cloudflare Dashboard → Workers & Pages → grantphillips → Settings → Build & deployments → Build configuration → Edit**:

| Field | Value |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | (leave blank / `/`) |
| Production branch | `main` |

**Environment variable** (Settings → Environment variables → Production):

| Variable | Value |
|---|---|
| `NODE_VERSION` | `20` |

Then trigger a redeploy from the **Deployments** tab.

## Local development

Requires Node 20+. Run:

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → ./dist
```

## Structure

```
grantphillipsbass/
├── src/
│   ├── layouts/BaseLayout.astro        # HTML shell, head, fonts, schema
│   ├── components/
│   │   ├── Header.astro                # Sticky nav + hamburger
│   │   ├── Footer.astro
│   │   └── Hero.astro                  # Reusable hero block
│   ├── pages/
│   │   ├── index.astro                 # Home
│   │   ├── about.astro
│   │   ├── performances.astro
│   │   ├── contact.astro
│   │   ├── faq.astro
│   │   ├── services/
│   │   │   ├── weddings.astro
│   │   │   ├── churches.astro
│   │   │   ├── jazz.astro
│   │   │   └── orchestral.astro
│   │   └── areas/
│   │       ├── east-lansing.astro
│   │       ├── lansing.astro
│   │       ├── grand-rapids.astro
│   │       ├── ann-arbor.astro
│   │       └── detroit.astro
│   └── styles/global.css               # Tailwind + custom components
├── public/                             # Copied to /dist as-is
│   ├── llms.txt                        # AI engine summary
│   ├── robots.txt
│   └── sitemap.xml
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── .nvmrc                              # Node 20
```

## Outstanding content TODOs

Search source for `class="todo"`:

1. **Performance entries** (`performances.astro`, `about.astro`) — populate `[bracketed]` placeholder slots
2. **Photos** — drop in `public/images/` and reference from hero / about
3. **Formspree form ID** in `contact.astro` (replace `REPLACE_WITH_FORM_ID`)
4. **Testimonials** — replace sample testimonial slot on weddings page
5. **Domain** — recommended `grantphillipsbass.com`

## Auto-publish

Aaron requested auto-push on every change. Any source edit triggers a commit + push to `origin/main`, which Cloudflare Pages auto-builds.
