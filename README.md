# nketabaptistchurch

## Nketa 8 Baptist Church Community Hub

![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwindcss&logoColor=white)

A modern, responsive church website for **Nketa 8 Baptist Church (Bulawayo, Zimbabwe)**.

Built to be visually consistent, easy to navigate, and simple to maintain.

## Quick Links

- **Run locally:** `npm install` → `npm run dev`
- **Build:** `npm run build`
- **Preview build:** `npm run preview`

## Live / Screenshots

- **Live site:** _Add your production URL here_
- **Screenshots:**
  - `docs/screenshots/home.png`
  - `docs/screenshots/about.png`
  - `docs/screenshots/plan-a-visit.png`

### Adding screenshots (recommended for GitHub)

1. Create a folder: `docs/screenshots/`
2. Add images (PNG/JPG)
3. (Optional) Embed them in this README:

```md
![Home](docs/screenshots/home.png)
```

## Key Features

- **Modern UI** with a consistent brand system (Tailwind + shadcn/ui)
- **Sticky header** that hides on scroll down and shows on scroll up
- **Mobile menu** closes on outside click and on scroll
- **Clickable contact details** (`tel:`, `mailto:`, and Google Maps links)
- **Plan a Visit** page with a detailed visitor form
- **Church Life** page that consolidates Ministries, Leadership, and Sermons into one
- Smooth page transitions/animations (Framer Motion)

## Pages / Routes

- **Home:** `/`
- **About:** `/about`
- **Church Life (Ministries + Leadership + Sermons):** `/church-life`
- **Events:** `/events`
- **Gallery:** `/gallery`
- **Donate:** `/donate`
- **Contact:** `/contact`
- **Plan a Visit:** `/plan-a-visit`
- **Privacy Policy:** `/privacy`
- **Terms of Use:** `/terms`

Legacy routes redirected/handled:

- `/ministries` → Church Life
- `/leadership` → Church Life
- `/sermons` → Church Life

## Tech Stack

- **Vite** (React + SWC)
- **React 18** + **TypeScript**
- **React Router**
- **Tailwind CSS** + **tailwindcss-animate**
- **shadcn/ui** (Radix UI primitives)
- **Framer Motion** (animations)
- **TanStack React Query** (available for data fetching)
- **Vitest** (tests)

## Getting Started (Local Development)

### Prerequisites

- **Node.js** (recommended: Node 18+)
- **npm**

### Install & Run

```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install
npm run dev
```

Vite dev server runs on:

- `http://localhost:8080`

## Scripts

```bash
npm run dev         # Start dev server
npm run build       # Build for production
npm run preview     # Preview production build locally
npm run lint        # ESLint
npm run test        # Run test suite once
npm run test:watch  # Watch mode
```

## Configuration Notes

- **Dev server port:** `8080` (see `vite.config.ts`)
- **Path alias:** `@/` → `src/` (see `vite.config.ts` and `tsconfig.json`)

## Project Structure

```text
.
├─ public/                # Static assets (images, favicon, etc.)
├─ src/
│  ├─ components/         # Shared UI + layout components
│  │  ├─ ui/              # shadcn/ui components
│  ├─ pages/              # Route pages
│  ├─ hooks/              # Custom hooks (toast, etc.)
│  ├─ lib/                # Utilities (cn, helpers)
│  ├─ App.tsx             # Router + providers
│  └─ index.css           # Tailwind + theme variables
├─ tailwind.config.ts
├─ vite.config.ts
└─ package.json
```

## Deployment

This is a static SPA build.

### Build

```bash
npm run build
```

Output is generated in:

- `dist/`

### SPA Routing

If deploying to Netlify/Vercel/Cloudflare Pages/GitHub Pages, ensure **SPA fallback** is configured so routes like
`/about` or `/plan-a-visit` don’t 404 on refresh.

Netlify example: add a `_redirects` file in `public/` with:

```text
/* /index.html 200
```

## Content Updates

Most content is currently managed directly in the page components inside:

- `src/pages/`

Images used across the site live in:

- `public/images/`

## Contributing

Contributions are welcome.

- Use feature branches
- Keep UI changes consistent with the existing design system
- Run `npm run lint` before opening a PR

## Troubleshooting

### Port already in use

The dev server is configured to run on port `8080`. If it’s busy, stop the other process or change the port in `vite.config.ts`.

### Routes 404 after refresh in production

This is a single-page application. Configure your host for **SPA fallback** (see the Deployment section).

## Maintainers / Support

- **Nketa 8 Baptist Church:** Update with official contact details
- **Developer:** Kawerify Tech (add website/contact details)

## License

Add your preferred license here (e.g. MIT) and include a `LICENSE` file.

## Credits

- Church website built for **Nketa 8 Baptist Church**
- UI foundation: **shadcn/ui** + **Radix UI**
