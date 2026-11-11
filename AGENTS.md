# AGENTS.md

Next.js 16 App Router prototype: an Indonesian wedding-invitation generator. Everything runs client-side; payments are simulated. There is no backend, database, auth, or API route.

## Commands

```bash
npm ci            # install exactly from package-lock.json
npm run dev       # dev server at localhost:3000
npx tsc --noEmit  # fast typecheck
npm run build     # full verification; includes the TypeScript check
npm start         # serve the production build
```

- Every dependency in `package.json` is `"latest"`; the lockfile is the only version pin (Next 16.4.5, React 19.3.1, three 0.187.0). Don't run `npm update` or upgrade deps unless asked.
- There are no test or lint scripts and no ESLint/Prettier config. Don't invent them; `npm run build` is the check that matters.
- This directory is not a git repository and has no CI. Don't rely on `git` commands.
- README rule: don't deploy without user approval.

## Where things live

- `app/` holds the route pages; README lists the product flow. `app/u/[slug]/page.tsx` is the only dynamic route and renders the actual guest invitation.
- `lib/data.ts` is the single source of truth for templates, packages, tracks, the sample couple, FAQ, `formatRp`, and `templateById`.
- `lib/store.ts` persists to localStorage only: keys `wedding-nextjs-invitations` and `wedding-nextjs-draft`.
- `lib/music.ts` synthesizes music with Web Audio; there are no audio files. Track names must exist in both `TRACKS` (data.ts) and `SCALES`.
- `components/TemplateScene.tsx` uses the Three.js Canvas for particle/ring atmosphere; the opening objects are DOM + GSAP.
- `components/Preloader.tsx` shows the per-template 3D opening overlay; its objects live in `PreloaderScene.tsx`.
- `components/LandingPreloader.tsx` is the once-per-session landing intro.
- `components/InvitationView.tsx` is the full guest view: it owns the `h-[100svh]` scroll container, eight fullscreen sections, reveal wrappers, RSVP content, and the music control. It loads `TemplateScene` via `next/dynamic` with `ssr: false`.

## Prototype behaviors to preserve

- `/u/[slug]` ignores the slug and reads query params `to`, `tpl`, `pkg`, and `track`. Preview links from `/templates` and `/buat` depend on this.
- Invitation content is hardcoded to `COUPLE` (Aisyah & Rizky). Editor form data only feeds the link flow and is not rendered in the guest view. Don't silently "fix" this without being asked.
- Checkout, QR, VA, and payment success are simulations. Don't wire real payments or personal data.
- Music starts only after the guest opens the invitation; the control is hidden on the cover. The `basic` package has no music.
- The landing intro is gated by `sessionStorage` key `wedding-nextjs-landing-intro` and must remain skippable. The per-template preloader must also be skippable.
- The digital-envelope section was removed on purpose. The navy cover keeps its envelope identity, but there is no rekening/QRIS section.
- RSVP is plain content with a phone number; do not add a WhatsApp link or form.
- Site nav and footer are hidden on `/u/*`; the guest invitation is a self-contained fullscreen scroller.

## Template changes

Adding a template requires coordinated edits:

1. `TemplateId` union and `TEMPLATES` entry in `lib/data.ts` (palette, frame, reveal, track).
2. `PARTICLE_CONF` plus the scene markup and GSAP branch in `TemplateScene.tsx`.
3. A 3D object branch in `PreloaderScene.tsx` and the shape branch in `GuestBox.tsx`.
4. A `SCALES` entry in `lib/music.ts` if the track is new.
5. `RevealPortrait.tsx` frame/reveal mapping and a `frame-*` class in `globals.css` if a new frame type is added.
6. A `LocationPanel.tsx` ornament branch so the location map matches the theme.

## Framework quirks

- Next 16: `params` and `searchParams` are Promises; `await` them (see `app/u/[slug]/page.tsx`).
- Client pages using `useSearchParams` must be wrapped in `<Suspense>`; existing pages split out an inner component to do this.
- Tailwind v4 is CSS-first: config lives in `app/globals.css` (`@import "tailwindcss"`), and there is no `tailwind.config.*`. Custom utilities there include `.serif`, `.script`, `.frame-*`, and `.falling`.
- UI copy is Indonesian, informal "kamu", with prices formatted by `formatRp` (`Rp39.000`). Keep it consistent; don't switch to English.
- `@/*` maps to the repo root.
- Repo-local design skills live in `.opencode/skills/` (antislop). Load the relevant ones for UI, copy, accessibility, or mobile-layout work.
