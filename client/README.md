
Premium marketing site for 
(Linux · Cloud · Automation · Security), built with React, Tailwind CSS,
and Framer Motion.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Project structure

```
src/
  components/       Navbar, Footer, and shared UI (Button, Eyebrow, Reveal, InfraGraph)
  sections/         One file per homepage section (Hero, Services, NOC, Assessment, ...)
  data/             Centralized content: services, technologies, industries, academy
  index.css         Tailwind layers + design tokens (grid bg, gradients, noise)
```

`App.jsx` composes all sections for the homepage in order. Each section is a
self-contained component, so new routes (e.g. `/services/linux`) can reuse
the same data files and section components later with React Router.

## Design tokens

Colors, fonts, and animation keyframes are defined in `tailwind.config.js`:
ink `#05070A`, panel `#0B0F14`, sky `#8FDAFA`, sky2 `#5CBCE8`, mist `#CFEFFF`.
Display font is Manrope, body is Inter, technical/terminal UI uses JetBrains Mono.

## Notes

- All NOC dashboard and metric values are clearly demo/illustrative data.
- No client names, testimonials, certifications, or statistics have been
  invented — placeholders are marked where real details should be added
  (footer contact info, case studies).
- Respects `prefers-reduced-motion`.
