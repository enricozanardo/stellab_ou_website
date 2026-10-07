# Stellab OÜ website

Corporate landing site for **Stellab OÜ** (`stellab.ee`), built with SvelteKit and deployed to GitHub Pages from this repository.

- Languages: English / Estonian
- Stack: SvelteKit + TypeScript + `@sveltejs/adapter-static`
- Public contact: `hello@stellab.ee`

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build    # output in build/
npm run preview  # preview production build
npm run check    # svelte-check
```

## Deploy (GitHub Pages)

Push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

In the GitHub repository settings:

1. **Pages** → Source: **GitHub Actions**
2. After the first successful deploy, confirm the custom domain `stellab.ee` (the `static/CNAME` file ships with the build)

## DNS cutover (Marcaria)

Domain registrar: [Marcaria](https://www.marcaria.com). Current zone snapshot (private) lives under `raw_data/` locally and is gitignored.

When pointing the site to GitHub Pages, update **web** records only; keep mail records:

| Record | Action |
|--------|--------|
| Apex `A` / `AAAA` | Replace Incapsula IPs with [GitHub Pages IPs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) for apex domains |
| `www` `CNAME` | Point to `enricozanardo.github.io` (or the hostname shown in the Pages settings) |
| `MX` `mfw.marcaria.com` | **Keep** for email |
| `TXT` SPF | **Keep**; change only if you move mail providers |

Also enable HTTPS / certificate provisioning in GitHub Pages after DNS propagates.

## Email (`hello@stellab.ee`)

The zone already has Marcaria MX (`mfw.marcaria.com`) and an SPF TXT record.

1. In the Marcaria control panel, create **mail forwarding** from `hello@stellab.ee` to a mailbox you control, or enable a Marcaria mailbox if available.
2. Do not remove MX records when updating A/CNAME for the website.
3. If you later move to Google Workspace, Zoho, or similar, update MX and SPF accordingly.

## Brand notes

Visual system: **Baltic Signal** (cool ice ground, Baltic navy, teal accent). Logo mark is a geometric constellation / lab graph in `static/logo.svg`.

## Licence

Apache License 2.0 — see [LICENSE](LICENSE).
