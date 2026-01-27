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
