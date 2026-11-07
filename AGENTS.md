# AGENTS.md — senseiadvisors.com

This repo is the Sensei Advisors marketing website. Read this whole file before changing anything. The owner, JoMar Hester, is the final QA on every change — nothing about his positioning, credentials, or claims gets improvised.

## What this is

- Static HTML/CSS/JS site. No build step: `netlify.toml` has an empty build command and publishes the repo root (`.`).
- Repo: `JoMaraMoJ/senseiadvisors-site`, branch `main`. **Push to `main` = deploy.** Netlify auto-deploys every push. There is no staging environment; verify live after each push.
- Live: https://www.senseiadvisors.com is the primary domain; the apex redirects to it.
- Structure: `index.html` (English home), `es/ pt/ de/ fr/ ja/` localized homes, `verticals/` (saas, biotech, cannabis, manufacturing, sports-entertainment), `for-firms/` (seat-cost calculator page), `signature.html`, `thank-you.html`, `styles.css`, `script.js`, `sitemap.xml`, `robots.txt`, `assets/`.

## Who drives what (JoMar's decision, 2026-10-25)

- **Codex is the developer for this website.** It writes and ships changes here.
- Muse (Donatello) verifies deploys live after pushes and holds the wider business context. One driver per property: do not expect concurrent edits from two agents on the same files.
- The companion property — the ŌSensei client app at app.senseiadvisors.com (Next.js on Vercel) — is a **separate codebase, not in this repo**. It hands over separately; do not touch its DNS or subdomain from work in this repo.

## Hard boundaries

- **DNS is managed outside this repo (Squarespace/Google) — never change DNS records as part of site work.** In particular: the `www` record points to Netlify, the Google Workspace MX records carry the owner's email, and the `app` subdomain points to Vercel. Breaking any of these takes down the site, his email, or the client app.
- **No public prices anywhere on the site.** This is deliberate. Pricing is shared in documents and conversation only.
- **No invented claims.** No client names, testimonials, metrics, or credentials that are not already on the site or supplied by JoMar in the task.
- The **International section** exists as a separate, undeployed package. Do not deploy or link it without JoMar's explicit go.
- `signature.html` still serves an older signature version; a replacement is pending JoMar's decision. Leave it alone unless the task is exactly that.
- `for-firms/` is intentionally quiet: it is linked only from the footer of the English homepage and the five vertical pages. No nav entry, and no Sensei price on the page. Keep it that way.

## Locked copy — do not rewrite without JoMar's explicit word

- Homepage lede: "I rebuild finance on a Finance Operating System: a gated monthly close, plus cash, runway, investor reporting, and FP&A — delivered monthly"
- Homepage eyebrow: "ŌSensei (formerly Sensei FinanceOS) · Financial Systems Architecture for growing companies" (bridge form during the 90–180-day bridge period from 2026-10-28; ŌSensei alone after it)
- The product name is always **ŌSensei** (display form; functional form OSensei) — flipped site-wide 2026-10-30. "Sensei FinanceOS" survives only inside the bridge phrase "(formerly Sensei FinanceOS)" (localized on the locale pages). Never bare "FinanceOS" on its own. Category: "Finance Operating System". Discipline: "Financial Systems Architecture".
- Five verticals, always all five: SaaS, Biotech, Cannabis, Manufacturing, and **Sports & Entertainment** (sports and live events together — never "sports" alone).
- Claim discipline, exact bounds: ŌSensei is "built to US GAAP, with SEC-reporting discipline, SOX-ready controls, and a PCAOB layer — audit evidence and workpaper discipline built to PCAOB standards." Never write "PCAOB compliant", "certified", or "passed", and never "CPA trained" — JoMar holds no CPA license.
- Classification: Sensei Advisors is a **productized service** (fixed scope, fixed price, defined outcome — never hourly). It is **not a SaaS company** and ŌSensei is not sold as software or a licence; it installs on a client's existing accounting system.
- Founder outreach sentence, where used, verbatim: "The close runs on a Finance Operating System I designed and built — an agent-led close, with the major workflows run by an agent I direct and review."
- Owner facts for copy: JoMar Hester, Founder, Sensei Advisors — Fractional CFO / Controller. Education prose: "MAcct from University of Cincinnati and MSDS from Stanford" (no year on the MSDS). Business email is always **jomar@senseiadvisors.com** — never publish his personal Gmail. Business phone: 415-712-3400.
- American English throughout. Localized pages mirror the English copy; when English locked copy changes, the same change goes into all five locales (the i18n strings live in the page files — strings 174 and 319 are the lede and eyebrow).

## Technical notes

- `script.js` runs immediately (no DOMContentLoaded wrapper) and pages load it with `defer`. If you ever inline it into a single-file preview, place the script just before `</body>` or the scroll-reveal sections render blank.
- The contact form is a Netlify form named `sensei-inquiry`; submissions notify JoMar by email. Do not rename the form or change its field names without checking the notification flow still works.
- After any wording sweep across pages, re-check every page you touched at full size — footer overlaps and page-specific layout breaks have slipped through thumbnail-level checks before.

## Verify after every deploy

1. Fetch the live page(s) you changed and confirm the change is actually present (Netlify deploy can lag the push).
2. Check the homepage and one vertical page on a mobile-width render: menu opens, no blank sections below the header.
3. Report to JoMar what changed and what you verified. He approves positioning and copy; routine fixes within these rules can ship and be reported after.
