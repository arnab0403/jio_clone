# Jio - Clone

A Next.js + Tailwind CSS clone of a streaming UI (Jio-like).  
This repo contains a frontend (Next 13 app router) and a Node backend utility (email/OTP helper). Built with modern React features, Tailwind, Redux store provider, and server/client split.

---

## Features
- Next.js (app router) frontend
- Tailwind CSS with CSS variable theme support
- Dark / black-themed UI
- Redux-based state management (StoreProvider)
- OTP email helper (backend/utility)
- Image optimization with next/image
- Top-loading indicator and toast notifications
- Reusable CategorySection component for carousels

---

## Tech Stack
- Frontend: Next.js 13 (app router), React, Tailwind CSS, Lucide icons
- Backend: Node.js (utility folder with email OTP code)
- State: Redux
- Styling: Tailwind CSS + CSS variables
- Optional client fetch libraries: SWR / React Query

---

## Repo structure (important files)
- /frontend/src/app - Next.js app routes and layout
  - layout.js — global layout, fonts, toaster, top loader
  - globals.css — Tailwind imports, CSS variables, theme utilities
  - /watchlist/page.jsx — watchlist page (client)
- /frontend/src/components - UI components (CategorySection, Headers, Footer, etc.)
- /backend/Utility/DynamicMail.js — OTP email HTML template and send logic
- /README.md — this file

---

## Prerequisites
- Node.js 18+
- npm or pnpm
- (Optional) SMTP credentials for sending email

---

## Environment variables
Create a `.env.local` in the frontend and `.env` in backend (as needed). Example variables:

Frontend (.env.local)
```
NEXT_PUBLIC_API_BASE=https://api.example.com
NEXT_PUBLIC_API_KEY=your_api_key
NEXTAUTH_URL=http://localhost:3000
```

Backend (.env)
```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=you@example.com
SMTP_PASS=yourpassword
EMAIL_FROM=your@example.com
```

Adjust names to match actual code references in the repo.

---

## Run locally

Frontend
```bash
# from repo root
cd frontend
npm install
npm run dev
# default: http://localhost:3000
```

Backend (if present / separate)
```bash
cd backend
npm install
npm run dev
```

Build & production
```bash
cd frontend
npm run build
npm run start
```

---

## Tailwind & CSS variables notes
- globals.css contains CSS variables under `:root` and an `@theme inline` block.
- To use a CSS variable as a Tailwind-like utility, add utilities in globals.css:

```css
@layer utilities {
  .bg-color-background {
    background-color: hsl(var(--color-background));
  }
  .text-color-foreground {
    color: hsl(var(--color-foreground));
  }
}
```

- If you want to use `bg-background` with Tailwind, map `--background` to `--color-background` in `:root`:
```css
:root {
  --background: hsl(var(--color-background));
}
```

---

## Common issues & fixes

1. "CategorySectionData is an async Client Component" error  
   Cause: async React components are only allowed as Server Components in Next.js. Fixes:
   - Move async fetch to a Server Component and pass data down as props.
   - Or convert CategorySectionData into a client component that uses a client-side data hook (SWR / React Query).
   - Memoize fetcher to avoid re-creation on each render: `const fetcher = useCallback(async () => { ... }, [])`.

2. Re-fetching repeatedly when passing fetcher prop  
   Cause: an inline fetcher is recreated each render.  
   Fix: wrap fetcher with `useCallback` before passing to child components.

3. Tailwind utilities for CSS vars not applied  
   - Add utilities inside `@layer utilities` in globals.css or extend tailwind.config.js to reference CSS variables.

---

## Email (OTP) template
The backend uses a black-themed email template. OTP accent color: `#e11d48`. Example is in `backend/Utility/DynamicMail.js`.

---

## Testing
- Frontend: use React Testing Library / Jest if added
- Backend: test email sending locally with a test SMTP (Mailtrap) before production

---

## Contributing
- Fork -> feature branch -> PR with description
- Keep UI components isolated and reuse CSS variables
- Follow existing coding conventions

---

## License
MIT

---

## Troubleshooting / Tips
- If Next fails rendering due to mixed client/server code, check for accidental `"use client"` in server-only modules.
- Use `useCallback` for functions passed as props to prevent unnecessary re-renders/fetches.
- Keep CSS variable names consistent: either use `--background` everywhere or map `--color-background` to `--background`.

---

## Contact
Repository owner ARNAB — arnabdutta8584@gmail.com handle here.
