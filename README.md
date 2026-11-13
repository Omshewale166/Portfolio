# Om Shewale portfolio

Next.js App Router portfolio built with JavaScript, global CSS, and Three.js.

## Run

```bash
npm install
npm run dev
npm run build && npm start
```

## Structure

- `app/layout.js`: metadata, viewport settings, and document shell
- `app/page.js`: portfolio sections and structured data
- `app/globals.css`: black theme, glass surfaces, responsive layout, and motion
- `components/ui/hero-1.js`: reusable portfolio hero content
- `components/ui/perspective-tunnel-hero.js`: monochrome project gallery with animated 3D depth
- `components/Hero3D.js`: Three.js shader scene
- `components/Gate.js`: neXus loading screen
- `components/Nav.js`: responsive site navigation
- `components/Interactions.js`: scroll reveals, counters, tilt, and navigation motion
- `components/Skills.js`: language cards from public GitHub repositories
- `components/ContactForm.js`: email-app contact form
- `lib/config.js`: live demo URLs and LinkedIn profile

The UI components use the project's existing JavaScript and CSS setup. They do not require Tailwind, TypeScript, shadcn, or additional packages.
