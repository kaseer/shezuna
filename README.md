# Shezuna

Marketing site for Shezuna, a Yorkshire fleet and multi-drop logistics partner. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Prerequisites

- Node.js 20 or newer
- npm

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The contact form posts to `/api/contact` and sends mail through [Resend](https://resend.com). Without `RESEND_API_KEY`, the API returns a configuration error and the rest of the site still runs.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Environment

Copy `.env.example` to `.env.local`.

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | For live email | Resend API key |
| `CONTACT_TO_EMAIL` | No | Inbox that receives enquiries. Defaults to `ops@shezuna.co.uk` |
| `CONTACT_FROM_EMAIL` | No | From address. Must use a domain verified in Resend |
| `RESEND_TEST_RECIPIENT` | No | Owner inbox used when the Resend account is still in testing mode |

## Structure

- `app/` — routes, metadata, sitemap, and the contact API
- `src/components/ui/` — shared buttons, layout, and motion primitives
- `src/components/sections/` — header, footer, and page sections
- `src/lib/` — site content, validation, and JSON-LD helpers

## Pages

- `/` home
- `/services`
- `/coverage`
- `/subcontractors`
- `/about`
- `/contact`
- `/privacy` and `/terms`

Older service URLs (`/last-mile-delivery-leeds` and the other Leeds landing pages) stay in place for search.
