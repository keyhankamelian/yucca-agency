# Yucca Agency

Marketing site for Yucca Agency, built with **Next.js 14 (App Router)** and **TypeScript**.

## Stack

- Next.js 14 App Router
- TypeScript
- Global CSS (`app/globals.css`) — the original hand-written stylesheet, CSS variables preserved
- [`@formspree/react`](https://formspree.io/) for the consultation form (form ID `xkolqpnb`)

## Structure

```
app/
  globals.css   # original stylesheet, unchanged design/tokens
  layout.tsx    # root layout, <html>/<body>, Google Fonts links
  page.tsx      # full page markup (server component)
  LeadForm.tsx  # consultation form ('use client', @formspree/react)
```

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

The repo is a zero-config Vercel project — Vercel auto-detects Next.js.

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import it at https://vercel.com/new.
3. Deploy — no build settings or environment variables required.

Or from the CLI:

```bash
npm i -g vercel
vercel
```
