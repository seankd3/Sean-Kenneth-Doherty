# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Photography portfolio website for Sean Kenneth Doherty (Austin, TX). Built with Next.js 15 App Router, statically exported to HTML/CSS/JS. Hosted on Netlify.

**All source code lives in the `/app` subdirectory.** Run all commands from there.

> Note: `AGENTS.md` and `app/README.md` are outdated — they reference a prior Vite/react-router-dom setup. The project now uses **Next.js 15 with App Router**.

## Commands

```bash
cd app

npm run dev            # Dev server at localhost:3000
npm run build          # Static export to app/dist/
npm run start          # Preview production build
npm run lint           # ESLint (Next.js + TypeScript rules)
npm run build-gallery  # Process Photos/ → public/images/galleries/ + generate gallery-config-auto.ts
```

No test framework is configured. Verification is manual/visual.

## Architecture

### Tech Stack
- **Next.js 15.3** (App Router, `output: 'export'` for static HTML)
- **React 19.2** with TypeScript 5.9
- **Tailwind CSS 3.4** with CSS variables (HSL) for theming
- **Framer Motion** for page transitions and scroll animations
- **shadcn/ui** (Radix UI primitives) — add components with `npx shadcn add <name>` from `app/`
- **Netlify Forms** for contact form submission (hidden form in `layout.tsx`)

### Dual Theme System
The site has two visual themes, switched based on the current route (`usePathname()`):
- **Wedding theme** (default): Dark background `#0a0a0a`, gold accent `#c9a962`, Cormorant Garamond serif
- **Aerospace theme** (`/aerospace`): Light background `#e8e6e1`, red accent `#c41e3a`, Space Mono monospace

Theme colors are CSS variables defined in `src/app/globals.css`. Font classes: `font-wedding-display`, `font-aerospace-display`.

### Content System
All text/copy is centralized in `src/lib/content/`:
- `site.ts` — Contact info, social links, SEO defaults
- `pages.ts` — Per-page hero text, CTAs, descriptions
- `albums.ts` — Album metadata (titles, descriptions, locations, dates)

### Gallery Pipeline
1. Source photos go in `/Photos/<Category>/<Album>/`
2. `npm run build-gallery` (runs `scripts/build-gallery.js`) processes them:
   - Resizes to 1920px max width, converts to WebP (quality 85) via Sharp
   - Copies to `app/public/images/galleries/`
   - **Auto-generates** `src/lib/gallery-config-auto.ts` with all image metadata
3. `src/lib/gallery-config.ts` wraps the auto-generated config with helper functions and legacy ID mappings

**`gallery-config-auto.ts` is generated — do not edit it directly.**

### Page Structure
Pages live in `src/app/<route>/page.tsx` with optional `layout.tsx` for metadata. Categories: weddings, aerospace, events, landscapes, portraits, abstract, contact, openreviews.

### Key Conventions
- Path alias: `@/*` → `src/*`
- Use `cn()` from `@/lib/utils` for conditional Tailwind classes
- `'use client'` directive on components with interactivity (lightboxes, forms, animations)
- Framer Motion `whileInView` with `viewport={{ once: true }}` for scroll animations
- `AnimatePresence` for page transitions (configured in `src/app/template.tsx`)
- JSON-LD structured data for SEO in layout files
- Images are unoptimized in Next.js config (Sharp handles optimization in the gallery build step)

### Deployment — CLOUDFLARE PAGES (not Netlify, not GitHub Pages)
The live site (seankennethdoherty.com) is hosted on **Cloudflare Pages**, project `seankennethdoherty`,
deployed by **direct wrangler upload from this machine** (no git integration — pushing does NOT deploy).

```bash
cd app
npm run build                                  # static export to app/out/ (dist/ is a stale Jan-2026 artifact)
npx wrangler pages deploy out --project-name seankennethdoherty --branch master
```

- Netlify: dead (account suspended 2026-05). `DEPLOY.md` Netlify instructions are legacy.
- Git branch: `main` is the site's branch (it replaced `legacy/master` on 2026-09-27).
- `--branch master` is Cloudflare's production-branch label, not the git branch: without it wrangler labels the upload with the current git branch (`main`) and Cloudflare publishes it as a preview, not the live site.
- The old GitHub Pages workflow was removed; it never served the domain.
- Deploying publishes everything in `out` — get explicit approval from Sean before deploying.

<!-- REVIEW_CHARTER_START 2026-10-21 -->
## When you review (Sean, 2026-10-21)
Sean: "when sol is reviewing code, instead of just looking for bugs it also steps back from the problem and tries to find a more elegant first principles solution, and stands guard against code and test bloat, band aid hacks, and always tries to push the main agent towards a more elegant, solution." Then: "it should be able to take a step back look at the bigger picture, and call out if theres a more elegant long term solution, rather than just give a bunch of super rare and unlikely bug cases that need lots of bandaids to cover up. I want the robust, elegant long term shape, and the review agents job is to always look for that sort of thing." And: "the goal is robustness through elegance and simplicity."

**The goal is robustness through elegance and simplicity.** A review's main job is to find the robust long-term shape: the one where the code's structure matches the problem's, so whole classes of bugs cannot happen. Bug hunting serves that job; it does not replace it. This binds every review, audit, bug hunt and second opinion, whatever model runs it (GPT-6.1 Sol by default) and even when the prompt asks only for bugs. The one exception is a pass the prompt names blockers-only (a hotfix): report correctness only, and list any shape you noticed as the follow-up.

1. **Step back first.** Before you judge the diff, say in one sentence what the change is for (for an internal change, what it must keep working). Read the code it touches and search the repo for what already does the job. Sketch the simplest robust shape for the problem, then compare the diff with it. Lead the report with that shape: the long-term solution, what it deletes, and whether this change moves toward it or away from it. If the change already matches it, say so in one line.
2. **Then hunt bugs, and find their cause.** Report a bug that real use can reach: how it happens, severity, confidence, file:line. When several bugs share a cause, report the cause once, with the shape that makes them all impossible, not one guard per case. Edge cases are part of the work in high mix (Sean, 2026-10-21: "we are in the business of high mix, so edgecases are everything"; "an edgecase we dont handle means we need a better system overall that can handle not only that edgecase but all others"). Do not dismiss a failure that real use can reach because it is rare. Treat an unhandled case as evidence of a problem in the system's design. Report the shared cause once, with examples that show it, the simplest system that handles the whole class of failures with that cause, and what that system deletes or makes unnecessary. Show how it keeps the agreed behavior and existing contracts. Never ask for a band-aid; ask for the change that removes the cause. Handling only the reported example does not close the finding. In pass 1, report all identified classes together. Later passes follow "Settle, do not re-litigate": review the fixes and new evidence from those fixes; do not restart the review of the original change. Further examples of the same cause belong to the existing finding.

Look for these. Each is a finding when you can show needless complexity, a duplicated responsibility, a mechanism that covers an avoidable cause, or a hidden failure:
- **Band-aids:** a mechanism that handles a symptom while leaving its shared cause in place, or hides a failure. Inspect guards, retries, sleeps, raised timeouts, locks, flags, IDs, thresholds, special cases, fallbacks, wrappers, shims and helpers for this. None is a finding merely because it exists. Show the cause it leaves in place, the simpler system that removes that cause, and the specific code that system makes unnecessary. A rule that removes the cause for the whole affected class while preserving supported behavior is a fix.
- **Code bloat:** new code that does the same job under the same contract as existing code (name it, file:line); a new parameter or branch that bends a near-fit abstraction to a case it was not shaped for; a stored value that could be computed; a third variant of one rule with no shared home; a translation between two forms of one idea; a module that needs "and" to describe. Similar-looking code with different rules is not a copy: duplication is cheaper than the wrong abstraction.
- **Test bloat:** apply the repo's test rule (by default, a new test earns its place by holding a property that already broke). Flag a test that repeats another, asserts how the code works instead of what it does, or mocks the thing it tests, and a test that guards a state the types or schema could make impossible (say how).

Rules:
- **Show it.** A shape finding names the needless part, the better shape in one sentence, what it deletes, and how it delivers the agreed behavior and keeps the contracts that must stay (callers, stored data, restarts, error paths). Use words and names, never a patch. Cite existing code it reuses (file:line), if any. "Could be cleaner" is not a finding; taste with nothing to delete is at most one non-blocking line.
- **Blocking.** A finding blocks when the better shape removes the need for specific code this diff adds (name it): a band-aid, a same-job copy, a parameter that bends a near-fit abstraction. Moving, renaming or rewriting equivalent code is not removing it. The change is then rebuilt on the shape, as stacked PRs if the shape needs more than one. A better shape that deletes nothing this diff adds is the next PR (open the issue now), not a blocker. A shape you could not show delivers the agreed behavior is non-blocking. A correctness or safety failure that real use can reach in the agreed behavior this change must deliver or preserve blocks, even when its cause is in unchanged code. This includes edge cases, regardless of how often they occur. This correctness rule applies even when the fix deletes no code added by this diff. The fix must remove the shared cause for the whole affected class; handling only the reported example does not close the finding. An existing failure unrelated to that agreed behavior is the next PR (open the issue now), not a blocker for this change. Rank by impact.
- **Settle, do not re-litigate.** Pass 1 reports everything at once. Delta passes review the fix commits, new band-aids included (a guard around the symptom is a new finding), and close open findings. Rule once on an author's rebuttal: accept it, or state the disagreement in one line; the orchestrator decides and names it in its report. A settled finding stays settled unless the fix commits bring new evidence.
- **Plans and specs.** The shape job is most of the review: the sentence, what the design deletes, what already exists, the non-goals. Apply the blocking test to the code or mechanisms the plan proposes: a better shape that removes the need for them blocks the plan.
- **Verdict.** PASS needs both jobs done and no blocking finding left; do not invent an improvement to go with it. When a job could not be done (no repo access, no stated goal), the verdict is INCOMPLETE, with what was missing. A blockers-only pass may PASS on correctness alone. Whether a failed pass holds a merge is the repo's rule.

**The author's side.** Answer every finding: rebuild on the shape, fix the cause, rebut it with evidence, or open the issue for a next-PR shape. A fix that removes the cause is valid wherever it lands; one that guards the symptom is the band-aid. Give the reviewer the PR's sentence and repo access.
<!-- REVIEW_CHARTER_END -->
