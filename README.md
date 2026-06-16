# Grant Dewell Phillips — Double Bassist site

Static marketing site for Grant Phillips, double bassist at MSU College of Music. Goal: generate gig leads (weddings, churches, jazz, orchestral subbing) within ~100 miles of East Lansing, MI.

## Stack

- Plain static HTML — no build step
- Single CSS file (`css/style.css`)
- Google Fonts (Cormorant Garamond + Inter)
- JSON-LD schema on every page (Person, Service, FAQPage, AboutPage)
- AEO-ready: `llms.txt` for AI engines, explicit bot allowlist in `robots.txt`

## Deploy

Drop the whole folder onto **Cloudflare Pages** as a static site:

1. Push to GitHub
2. Cloudflare Pages → connect repo → no build command → output dir `/`
3. Point custom domain (see recommendations below) at the project

Free tier covers this site indefinitely.

## Pages built

| Path | Purpose |
|---|---|
| `/` | Home — hero, four services teaser, coverage, CTA |
| `/about.html` | Bio (with TODO for Aaron to fill in specifics) |
| `/performances.html` | Performance timeline (with TODO for the real gig list) |
| `/services/weddings.html` | Weddings landing page + Service schema |
| `/services/churches.html` | Sacred music landing |
| `/services/jazz.html` | Jazz dates landing |
| `/services/orchestral.html` | Orchestral subbing landing |
| `/areas/east-lansing.html` | Local SEO page |
| `/areas/lansing.html` | Local SEO page |
| `/areas/grand-rapids.html` | Local SEO page |
| `/areas/ann-arbor.html` | Local SEO page |
| `/areas/detroit.html` | Local SEO page |
| `/contact.html` | Booking form (Formspree placeholder) + FAQ sidebar |
| `/faq.html` | FAQ page + FAQPage schema for rich results |
| `/llms.txt` | AI engine summary (ChatGPT, Claude, Perplexity, Gemini) |
| `/robots.txt` | Bot policy |
| `/sitemap.xml` | Sitemap |

## Domain recommendations

Order of preference:

1. **`grantphillipsbass.com`** — exact-match keyword + name. Best SEO. **Recommended.**
2. **`grantdewellphillips.com`** — full name. Professional. Less keyword punch.
3. **`grantphillipsmusic.com`** — broader, lets him pivot beyond bass later.
4. **`gpbassist.com`** — short, brandable, but no name recognition.

Buy whichever Grant likes at Cloudflare Registrar (~$10/yr, no markup, includes WHOIS privacy).

## What I need from Aaron / Grant to finish

Search for `class="todo"` in the HTML — every yellow block on the rendered site shows me what's blocking real content. Top priorities:

1. **Bio specifics** (`about.html`): Years he started bass, undergrad institution, principal teacher (undergrad + MSU), notable festivals/competitions, instrument details.
2. **Full performance history** (`performances.html`): Year/ensemble/venue/role for every gig from middle school through MSU.
3. **Photos:** Professional headshot, performance shots, instrument detail shot. Drop in `/images/` and reference from `index.html` hero + `about.html`.
4. **Real testimonials:** Two or three lines from past clients (couples, music directors, club bookers).
5. **Booking form backend:** Replace `https://formspree.io/f/REPLACE_WITH_FORM_ID` in `contact.html` with a Formspree form ID (free tier, 50 submissions/month) OR swap for Cloudflare Pages Function.
6. **Email:** Set up `booking@grantphillipsbass.com` once the domain is live (Cloudflare Email Routing → forward to Grant's real inbox).

## Once content is in — next-phase SEO moves

- **Google Business Profile** for Grant (service-area business, no physical address needed). Lists him in Maps for "double bass" + city searches.
- **The Bash / GigSalad / WeddingWire** profiles linking back to the site — wedding-vendor citations are big for that vertical.
- **Two or three pillar blog posts**: "How to choose between a string quartet and a bass-led duo for your ceremony"; "Hiring a bassist for Holy Week — a music director's checklist"; "What Detroit jazz bookers look for in a sub." Each can rank for long-tail queries the service pages can't.
- **MSU College of Music directory** — make sure Grant is listed and the listing links to grantphillipsbass.com.

## File structure

```
grantphillipsbass/
├── index.html
├── about.html
├── performances.html
├── contact.html
├── faq.html
├── services/
│   ├── weddings.html
│   ├── churches.html
│   ├── jazz.html
│   └── orchestral.html
├── areas/
│   ├── east-lansing.html
│   ├── lansing.html
│   ├── grand-rapids.html
│   ├── ann-arbor.html
│   └── detroit.html
├── css/style.css
├── images/                 (empty — drop photos here)
├── llms.txt
├── robots.txt
├── sitemap.xml
└── README.md
```
