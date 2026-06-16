# Ananda Adam — Portfolio

A modern backend engineer portfolio built with SvelteKit 2, TypeScript, and Tailwind CSS v4. Deployed to Vercel.

---

## Quick Start

```bash
# Requires Node.js >=22 (use nvm: `nvm use`)
npm install
npm run dev        # http://localhost:5173
npm run build      # production build
npm run preview    # preview production build locally
```

---

## Project Structure

```
portfolio/
├── src/
│   ├── app.css                    # Global styles, CSS variables, Tailwind imports
│   ├── app.html                   # HTML shell (font preconnects, favicon)
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Background.svelte  # Grid background + cursor glow
│   │   │   ├── Nav.svelte         # Sticky navigation
│   │   │   ├── Hero.svelte        # Hero: typewriter, code windows, CTA
│   │   │   ├── About.svelte       # About: bio + stat cards
│   │   │   ├── Experience.svelte  # Timeline with glassmorphism cards
│   │   │   ├── Skills.svelte      # Infinite marquee + skill category chips
│   │   │   ├── Projects.svelte    # Featured project + project grid
│   │   │   ├── Contact.svelte     # Social icon links with tooltips
│   │   │   └── Footer.svelte      # Minimal footer
│   │   ├── data/
│   │   │   ├── experience.ts      # Experience entries (edit these)
│   │   │   └── skills.ts          # Skill categories + marquee rows
│   │   ├── graphql/
│   │   │   └── projects.ts        # Mock GraphQL query functions (swap with real API)
│   │   ├── utils/
│   │   │   └── animations.ts      # fadeInOnScroll Svelte action
│   │   └── types.ts               # Shared TypeScript interfaces
│   └── routes/
│       ├── +layout.svelte         # Root layout (imports app.css)
│       └── +page.svelte           # Main page — composes all sections
├── static/
│   ├── favicon.svg                # SVG favicon (>_ terminal icon)
│   ├── robots.txt                 # SEO crawl rules
│   └── resume.pdf                 # ADD YOUR RESUME HERE
├── .nvmrc                         # Node 22
├── package.json
├── tsconfig.json
└── vite.config.ts                 # Tailwind v4 + Vercel adapter
```

---

## Personalisation Checklist

Before deploying, update these:

- `src/lib/data/experience.ts` — replace with your actual work history
- `src/lib/data/skills.ts` — adjust skill categories and marquee items
- `src/lib/graphql/projects.ts` — replace MOCK_PROJECTS with your real projects
- `src/lib/components/Hero.svelte` — update name, headline, typewriter phrases
- `src/lib/components/About.svelte` — rewrite the bio paragraphs
- `src/lib/components/Contact.svelte` — update hrefs with your real socials
- `src/routes/+page.svelte` — update og:url and meta tags with your domain
- `static/resume.pdf` — drop your actual PDF here

---

## Replacing GraphQL Mock with a Real API

`src/lib/graphql/projects.ts` exports three async functions. To connect a real endpoint, replace the function bodies:

```typescript
export async function queryProjects(): Promise<Project[]> {
  const res = await fetch('https://your-api.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `{ projects { id title description ... } }` })
  });
  const { data } = await res.json();
  return data.projects;
}
```

The components consume these functions — no component changes needed.

---

## Deployment to Vercel

### Option A: Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

### Option B: Git Integration
1. Push repo to GitHub/GitLab
2. Import at vercel.com/new
3. Vercel auto-detects SvelteKit — zero config needed

---

## Architecture Notes

- **Svelte 5 Runes** (`$state`, `$effect`, `$props`) throughout — modern explicit reactivity
- **Tailwind v4** via Vite plugin — no postcss.config needed, import via CSS
- **Vercel adapter** in vite.config.ts — handles SSR edge functions
- **IntersectionObserver** for scroll animations via a reusable Svelte action
- **Pure CSS marquee** — no JS animation library
- **Inline SVG icons** — zero icon font requests
- **GraphQL interface** preserved for easy API swap-in
