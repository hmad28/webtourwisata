# Lombok Journey

Lombok Journey is a responsive tour and travel website for a local Lombok operator. It presents tour packages, destinations, local experiences, and WhatsApp-first trip enquiries through an image-led tropical design.

## Overview

The project is a statically generated Next.js website intended as a production-ready foundation for a local travel company. Content is stored in typed TypeScript files, making the initial version easy to maintain without a CMS or database.

Business details, prices, testimonials, and operator information currently contain clearly marked demo or placeholder content. Replace them with verified client data before launch.

## Features

- Responsive homepage based on a modern tropical adventure direction
- Tour package catalog with client-side category filtering
- Statically generated tour detail pages
- Destination catalog and destination detail pages
- About and contact pages
- Contextual WhatsApp enquiry links with encoded messages
- Mobile navigation and sticky WhatsApp call to action
- Reusable, data-driven tour and destination components
- Per-page metadata, Open Graph defaults, sitemap, and robots configuration
- Keyboard-friendly controls, semantic headings, and reduced-motion support

## Tech Stack

- [Next.js 16](https://nextjs.org/) with the App Router
- React 19
- TypeScript
- CSS with centralized design tokens and responsive breakpoints
- [Lucide React](https://lucide.dev/) icons
- `next/image` and `next/font`
- ESLint with the Next.js Core Web Vitals configuration

## Routes

| Route | Description |
| --- | --- |
| `/` | Homepage and trip enquiry |
| `/tour-packages` | Filterable package catalog |
| `/tour-packages/[slug]` | Statically generated package details |
| `/destinations` | Lombok destination catalog |
| `/destinations/[slug]` | Statically generated destination details |
| `/about` | Operator story and values |
| `/contact` | Contact information and WhatsApp enquiry form |
| `/sitemap.xml` | Generated sitemap |
| `/robots.txt` | Search crawler rules |

## Getting Started

### Prerequisites

- Node.js compatible with Next.js 16
- npm

### Installation

```bash
git clone https://github.com/hmad28/webtourwisata.git
cd webtourwisata
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create and validate the production build
npm run start    # Serve the production build
npm run lint     # Run ESLint
```

## Content Configuration

The primary editable content is kept outside the page components:

- `data/site.ts` — brand name, phone number, email, address, and shared imagery
- `data/tours.ts` — tour packages, prices, descriptions, highlights, and itineraries
- `data/destinations.ts` — destination names, descriptions, images, and slugs
- `lib/whatsapp.ts` — shared encoded WhatsApp URL helper

Update the placeholder WhatsApp number in `data/site.ts` before publishing. All WhatsApp buttons and enquiry forms use that centralized value.

## Project Structure

```text
app/                     App Router pages, metadata, sitemap, and global styles
components/              Shared layout, catalog, card, form, and enquiry components
data/                    Typed site, tour, and destination content
design-reference/        Visual implementation reference
lib/                     Shared utilities
public/images/            Project-owned hero imagery
```

## Production Checklist

Before deployment:

1. Replace every demo contact field and placeholder testimonial with verified content.
2. Confirm tour prices, inclusions, itineraries, and availability rules.
3. Replace remaining stock photography with licensed client assets where available.
4. Update `metadataBase`, sitemap URLs, and canonical domain values.
5. Run `npm run lint` and `npm run build`.

## Deployment

The application can be deployed to any platform that supports Next.js. Build the project with:

```bash
npm run build
```

No database or required environment variables are used in the current version.

## License

This repository currently uses the ISC license declared in `package.json`.
