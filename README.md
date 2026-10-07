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

When pointing the site to GitHub Pages, update **web** records only; keep mail records.

### Exact apex records required

GitHub Pages needs **all four** apex `A` records (not just one). Missing IPs commonly leave TLS stuck on “certificate is being provisioned” / `dns_changed`.

| Type | Host | Value |
|------|------|--------|
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `AAAA` | `@` | `2606:50c0:8000::153` |
| `AAAA` | `@` | `2606:50c0:8001::153` |
| `AAAA` | `@` | `2606:50c0:8002::153` |
| `AAAA` | `@` | `2606:50c0:8003::153` |
| `CNAME` | `www` | `enricozanardo.github.io` |
| `MX` | `@` | `mfw.marcaria.com` (keep) |
| `TXT` SPF | `@` | keep existing SPF |

Verify with:

```bash
dig stellab.ee A +short
# must list all four 185.199.108–111.153 addresses
```

### If HTTPS stays pending

1. Confirm all four `A` records (and preferably all four `AAAA`) are present.
2. In **Settings → Pages**, remove custom domain `stellab.ee`, wait ~1 minute, add it again, Save.
3. Wait for DNS check, then enable **Enforce HTTPS** once the certificate state is ready (often a few minutes after DNS is complete).
4. Do not put CAA records that block Let’s Encrypt (`0 issue "letsencrypt.org"` is fine if you add CAA).

## Email (`hello@stellab.ee`)

The zone already has Marcaria MX (`mfw.marcaria.com`) and an SPF TXT record.

1. In the Marcaria control panel, create **mail forwarding** from `hello@stellab.ee` to a mailbox you control, or enable a Marcaria mailbox if available.
2. Do not remove MX records when updating A/CNAME for the website.
3. If you later move to Google Workspace, Zoho, or similar, update MX and SPF accordingly.

## Brand notes

Visual system: **Baltic Signal** (cool ice ground, Baltic navy, teal accent).  
Logo source: `raw_data/logo.png` (gitignored). Published: `static/logo.png`, `static/favicon*.png`, `static/apple-touch-icon.png`.

## Licence

Apache License 2.0 — see [LICENSE](LICENSE).
