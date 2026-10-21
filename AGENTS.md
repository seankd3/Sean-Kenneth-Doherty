# Sean Kenneth Doherty Photography Website

## Project Overview

This is a **React + TypeScript + Vite** photography portfolio website for Sean Kenneth Doherty, a photographer and cinematographer based in Austin, TX. The site showcases four photography categories: Weddings, Aerospace, Events, and Landscapes.

**Project Location**: All source code is located in the `/app` subdirectory (not the repository root).

### Key Characteristics
- **Static single-page application (SPA)** with client-side routing
- **Dual-theme design**: Wedding theme (dark/gold elegance) and Aerospace theme (light/military technical)
- **Animation-heavy** with Framer Motion for page transitions and scroll animations
- **shadcn/ui** component system built on Radix UI primitives

---

## Technology Stack

| Category | Technology |
|----------|------------|
| Framework | React 19.2 |
| Language | TypeScript 5.9 |
| Build Tool | Vite 7.2 |
| Styling | Tailwind CSS 3.4 |
| UI Components | shadcn/ui + Radix UI |
| Routing | react-router-dom 7 |
| Animation | framer-motion |
| Icons | lucide-react |
| Form Handling | react-hook-form + zod |
| Charts | recharts |

---

## Project Structure

```
app/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components (buttons, dialogs, etc.)
│   │   ├── Navigation.tsx   # Site navigation with mobile menu
│   │   └── Footer.tsx       # Site footer
│   ├── pages/               # Route-level page components
│   │   ├── Home.tsx         # Landing page with hero section
│   │   ├── Weddings.tsx     # Wedding portfolio gallery
│   │   ├── Aerospace.tsx    # Aerospace portfolio gallery
│   │   ├── Events.tsx       # Events portfolio gallery
│   │   ├── Landscapes.tsx   # Landscapes portfolio gallery
│   │   └── Contact.tsx      # Contact form page
│   ├── hooks/
│   │   └── use-mobile.ts    # Mobile breakpoint detection hook
│   ├── lib/
│   │   └── utils.ts         # Utility functions (cn helper for Tailwind)
│   ├── App.tsx              # Root component with route definitions
│   ├── App.css              # Global styles and theme variables
│   ├── index.css            # Tailwind directives + CSS variables
│   └── main.tsx             # React app entry point
├── public/
│   └── images/              # Static image assets
├── dist/                    # Build output (generated)
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── components.json          # shadcn/ui configuration
├── tsconfig.json            # TypeScript project references
├── tsconfig.app.json        # TypeScript app configuration
├── tsconfig.node.json       # TypeScript node configuration
└── eslint.config.js         # ESLint configuration
```

---

## Available Scripts

All commands should be run from the `app/` directory:

```bash
# Development server (runs on http://localhost:5173 by default)
npm run dev

# Production build (outputs to dist/)
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

---

## Build and Deployment

### Build Process
1. `tsc -b` - TypeScript compilation with project references
2. `vite build` - Vite bundling and optimization
3. Output is generated in `app/dist/` as static HTML/CSS/JS files

### Deployment Notes
- The site is configured for **relative paths** (`base: './'` in vite.config.ts)
- All routes are client-side; server should be configured for SPA fallback to index.html
- Static images in `public/images/` are copied as-is to `dist/images/`

---

## Code Style Guidelines

### TypeScript
- Strict mode enabled with additional checks (`noUnusedLocals`, `noUnusedParameters`)
- Path alias `@/*` maps to `./src/*`
- Components use `.tsx` extension
- Type imports should use `type` keyword (enforced by `verbatimModuleSyntax`)

### Component Patterns
- Functional components with explicit return types preferred
- Props interfaces defined inline or at component top
- Use `cn()` utility from `@/lib/utils` for conditional Tailwind classes

```tsx
import { cn } from '@/lib/utils';

interface ButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Button = ({ className, variant = 'primary' }: ButtonProps) => {
  return (
    <button className={cn(
      'base-classes',
      variant === 'primary' && 'primary-classes',
      className
    )}>
      {/* ... */}
    </button>
  );
};
```

### Styling Conventions
- Tailwind classes for all styling
- Custom theme colors defined in CSS variables in `index.css`
- Two distinct visual themes:
  - **Wedding Theme**: Dark backgrounds (`#0a0a0a`), gold accent (`#c9a962`)
  - **Aerospace Theme**: Light backgrounds (`#e8e6e1`), red accent (`#c41e3a`)
- Custom font classes:
  - `font-wedding-display` - Cormorant Garamond serif
  - `font-aerospace-display` - Space Mono monospace

### Animation Patterns
- Use `framer-motion` for all animations
- Page transitions use `AnimatePresence` with `mode="wait"`
- Standard animation variants defined at component level
- Scroll-triggered animations use `whileInView` with `viewport={{ once: true }}`

---

## Testing

**Note**: This project currently has **no automated tests** configured. The testing strategy is manual visual verification.

To add tests in the future, consider:
- Vitest (aligns with Vite)
- React Testing Library for component tests
- Playwright for E2E tests

---

## Adding New Components

This project uses **shadcn/ui**. To add new components:

```bash
# From the app/ directory
npx shadcn add <component-name>

# Example
npx shadcn add dialog
```

Components are installed to `src/components/ui/` and can be imported via `@/components/ui/<component>`.

---

## Adding New Pages

1. Create a new `.tsx` file in `src/pages/`
2. Add the route in `src/App.tsx`:
```tsx
import NewPage from './pages/NewPage';

// In the Routes component:
<Route path="/new-path" element={<NewPage />} />
```
3. Add navigation link in `src/components/Navigation.tsx`
4. Add footer link in `src/components/Footer.tsx`

---

## Security Considerations

- No sensitive data is stored in the frontend
- Contact form should be connected to a backend service or form provider (Netlify Forms, Formspree, etc.) before deployment
- External links use `target="_blank"` with `rel="noopener noreferrer"`
- No authentication or authorization implemented

---

## Dependencies of Note

| Package | Purpose |
|---------|---------|
| `framer-motion` | Page transitions and scroll animations |
| `react-router-dom` | Client-side routing |
| `lucide-react` | Icon library |
| `class-variance-authority` | Component variant management |
| `tailwind-merge` + `clsx` | Conditional class merging |
| `embla-carousel-react` | Image carousels |
| `react-day-picker` | Date selection |
| `sonner` | Toast notifications |
| `recharts` | Data visualization |
| `zod` | Schema validation |

---

## Development Tips

1. **Always work from the `app/` directory** - The project root has no package.json
2. **Images go in `public/images/`** - They are served at `/images/` path
3. **Theme switching** - The Aerospace page has a unique theme; check `Navigation.tsx` and `Footer.tsx` for theme-aware styling patterns
4. **Mobile-first** - The design is responsive; test at all breakpoints
5. **Font loading** - Google Fonts are loaded in `index.html`; add new fonts there if needed

<!-- REVIEW_CHARTER_START 2026-10-21 -->
## When you review (Sean, 2026-10-21)
Sean: "when sol is reviewing code, instead of just looking for bugs it also steps back from the problem and tries to find a more elegant first principles solution, and stands guard against code and test bloat, band aid hacks, and always tries to push the main agent towards a more elegant, solution." Then: "it should be able to take a step back look at the bigger picture, and call out if theres a more elegant long term solution, rather than just give a bunch of super rare and unlikely bug cases that need lots of bandaids to cover up. I want the robust, elegant long term shape, and the review agents job is to always look for that sort of thing." And: "the goal is robustness through elegance and simplicity."

**The goal is robustness through elegance and simplicity.** A review's main job is to find the robust long-term shape: the one where the code's structure matches the problem's, so whole classes of bugs cannot happen. Bug hunting serves that job; it does not replace it. This binds every review, audit, bug hunt and second opinion, whatever model runs it (GPT-6.1 Sol by default) and even when the prompt asks only for bugs. The one exception is a pass the prompt names blockers-only (a hotfix): report correctness only, and list any shape you noticed as the follow-up.

1. **Step back first.** Before you judge the diff, say in one sentence what the change is for (for an internal change, what it must keep working). Read the code it touches and search the repo for what already does the job. Sketch the simplest robust shape for the problem, then compare the diff with it. Lead the report with that shape: the long-term solution, what it deletes, and whether this change moves toward it or away from it. If the change already matches it, say so in one line.
2. **Then hunt bugs, and find their cause.** Report a bug that real use can reach: how it happens, severity, confidence, file:line. When several bugs share a cause, report the cause once, with the shape that makes them all impossible, not one guard per case. A rare or contrived case (two independent failures at once, an input no caller sends) gets one non-blocking line, unless it loses data or can hurt someone. Never ask for a band-aid; ask for the change that removes the cause.

Look for these. Each is a finding when you can show needless complexity, a duplicated responsibility, a mechanism that covers an avoidable cause, or a hidden failure:
- **Band-aids:** a guard, retry, sleep, raised timeout, flag, threshold or special case (empty, first run, one customer); a swallowed error or a fallback that hides a failure; a wrapper, shim or `*_compat`/`*_helper`. Name the cause it covers and the change that removes it. A retry, adapter or cache is not a finding merely because it exists; ask whether its job is needed and not already done elsewhere.
- **Code bloat:** new code that does the same job under the same contract as existing code (name it, file:line); a new parameter or branch that bends a near-fit abstraction to a case it was not shaped for; a stored value that could be computed; a third variant of one rule with no shared home; a translation between two forms of one idea; a module that needs "and" to describe. Similar-looking code with different rules is not a copy: duplication is cheaper than the wrong abstraction.
- **Test bloat:** apply the repo's test rule (by default, a new test earns its place by holding a property that already broke). Flag a test that repeats another, asserts how the code works instead of what it does, or mocks the thing it tests, and a test that guards a state the types or schema could make impossible (say how).

Rules:
- **Show it.** A shape finding names the needless part, the better shape in one sentence, what it deletes, and how it delivers the agreed behavior and keeps the contracts that must stay (callers, stored data, restarts, error paths). Use words and names, never a patch. Cite existing code it reuses (file:line), if any. "Could be cleaner" is not a finding; taste with nothing to delete is at most one non-blocking line.
- **Blocking.** A finding blocks when the better shape removes the need for specific code this diff adds (name it): a band-aid, a same-job copy, a parameter that bends a near-fit abstraction. Moving, renaming or rewriting equivalent code is not removing it. The change is then rebuilt on the shape, as stacked PRs if the shape needs more than one. A better shape that deletes nothing this diff adds is the next PR (open the issue now), not a blocker. A shape you could not show delivers the agreed behavior is non-blocking. A correctness or safety failure that real use can reach blocks, whatever its fix looks like; a rare or contrived case stays one non-blocking line unless it can lose data or hurt someone. Rank by impact.
- **Settle, do not re-litigate.** Pass 1 reports everything at once. Delta passes review the fix commits, new band-aids included (a guard around the symptom is a new finding), and close open findings. Rule once on an author's rebuttal: accept it, or state the disagreement in one line; the orchestrator decides and names it in its report. A settled finding stays settled unless the fix commits bring new evidence.
- **Plans and specs.** The shape job is most of the review: the sentence, what the design deletes, what already exists, the non-goals. Apply the blocking test to the code or mechanisms the plan proposes: a better shape that removes the need for them blocks the plan.
- **Verdict.** PASS needs both jobs done and no blocking finding left; do not invent an improvement to go with it. When a job could not be done (no repo access, no stated goal), the verdict is INCOMPLETE, with what was missing. A blockers-only pass may PASS on correctness alone. Whether a failed pass holds a merge is the repo's rule.

**The author's side.** Answer every finding: rebuild on the shape, fix the cause, rebut it with evidence, or open the issue for a next-PR shape. A fix that removes the cause is valid wherever it lands; one that guards the symptom is the band-aid. Give the reviewer the PR's sentence and repo access.
<!-- REVIEW_CHARTER_END -->
