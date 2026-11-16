# Cap Hernandez WordPress Migration — Implementation Plan

## Scope

Rebuild the public-facing `caphernandez.com` homepage as a managed Vite + React application, preserving the source site's copy hierarchy, dark navy/lime visual identity, display typography, responsive navigation, anchored sections, speaking reel, service paths, testimonials, about story, credentials, blog/newsletter, and contact CTA. Add reusable route-aware views for the source's Speaking, Workshops, Books, About, Blog, and Contact destinations so top-navigation interactions never dead-end.

## Source audit decisions

- Source background: `rgb(10, 21, 48)` / `#0A1530`.
- Accent: highlighter lime sampled from the live CTA and headline emphasis, implemented as `#D9FF3F`.
- Display font: Fraunces, normal weight; live hero measured at 110px with 110px line-height on a 1280px viewport.
- UI/body font: Inter Tight; compact metadata uses Courier Prime.
- Layout target: full-width editorial sections with a 1200px inner rail, large negative space, thin navy/white rules, and asymmetrical two-column compositions.
- Motion target: short fade/translate reveals, low-amplitude hover scale, and a native modal/carousel rather than third-party page-builder behavior.

## Design direction

Three candidate directions were considered:

1. Editorial quiet-confidence — 0.06 probability; high-contrast Fraunces headlines, navy field, lime signal color, and generous page rhythm.
2. Swiss corporate minimal — 0.05 probability; strict modular grid, monochrome type, and reduced imagery.
3. Warm editorial coaching — 0.04 probability; softer cream surfaces, rounded cards, and conversational color blocks.

Chosen direction: **Editorial quiet-confidence**.

### Design movement
Contemporary editorial personal-brand design with a restrained neo-grotesk system and expressive serif display type.

### Core principles
1. Quiet authority: visual confidence without visual noise.
2. Contrast as navigation: lime signals action and key phrases.
3. Honest spaciousness: large margins let the message breathe.
4. Practical warmth: imagery and copy stay human, specific, and grounded.

### Color philosophy
Navy is the calm, focused foundation; off-white is used as the reading surface and high-contrast statement color; lime is a single ownable signal for confidence, action, and momentum.

### Layout paradigm
A full-bleed, editorial scroll with a centered content rail, horizontal rules, and intentional offset columns rather than a uniform card grid. Hero copy sits right-weighted against open navy space; the image and quote sections create the counterweight.

### Signature elements
- Lime capsule buttons with a slightly inset outlined hover state.
- Courier Prime all-caps metadata with short lime rules.
- Oversized Fraunces headlines that alternate white and lime emphasis.

### Interaction philosophy
Interactions should feel deliberate and reassuring: navigation reveals slide from the edge, CTA hover changes only color and outline weight, the reel modal opens with a calm scale/fade, and the testimonial slider advances without abrupt motion.

### Animation
Use Framer Motion for one-time viewport reveals (`opacity 0 → 1`, `y 24 → 0`), subtle image scale on hover, and modal/carousel transitions under 500ms. Disable transforms and reduce duration under `prefers-reduced-motion`.

### Typography system
Fraunces for hero, section titles, and quote emphasis. Inter Tight for navigation, body, buttons, and cards. Courier Prime for eyebrow labels, numbers, and utility metadata. Hero uses responsive clamp sizing from 56px mobile to 110px desktop.

### Brand essence
Cap helps introverted founders, executives, and experts sell, lead, and become known without pretending to be extroverts. Personality: grounded, articulate, quietly magnetic.

### Brand voice
Headlines are direct, reassuring, and specific. CTAs are low-pressure and action-led. Example lines: “Quiet leadership. Real connection. Better results.” and “Start selling and leading with quiet confidence.”

### Wordmark & logo
Use the source's white `CH` wordmark/emblem asset when available, with a text fallback that preserves the two-line compact lockup on small screens.

### Signature brand color
Highlighter lime `#D9FF3F`.

## Component architecture

- `src/App.jsx`: route map and global layout.
- `src/data/content.js`: source copy, cards, testimonials, achievements, blog snippets, image references.
- `src/components/Navbar.jsx`: sticky desktop nav and mobile drawer.
- `src/components/HeroSection.jsx`: hero headline, supporting copy, CTA.
- `src/components/FeaturedIn.jsx`: media logos strip.
- `src/components/IntrovertValueProp.jsx`: introvert value proposition and CTA.
- `src/components/SpeakingReelModal.jsx`: modal wrapper with YouTube embed and accessible close behavior.
- `src/components/ThreePathsCards.jsx`: three path cards with source links.
- `src/components/TestimonialsSlider.jsx`: keyboard-friendly carousel controls and dots.
- `src/components/AboutCapStory.jsx`: founder story and conversion CTA.
- `src/components/CredentialsBar.jsx`: client/achievement logos and ranked credentials.
- `src/components/BlogPreviewGrid.jsx`: source news/podcast/blog preview.
- `src/components/NewsletterSignup.jsx`: email validation, submitted state, and privacy copy.
- `src/components/Footer.jsx`: anchor routes, social links, legal links.
- `src/pages/DetailPage.jsx`: reusable placeholder-safe page shell for speaking/workshops/books/about/blog/contact.
- `src/styles.css`: CSS variables, responsive layout, and reduced-motion rules.
- `public/assets/`: downloaded source logo, editorial images, book art, and logo strips.
- `public/manus-routes.json`: route manifest kept synchronized with the route table.

## Build workflow

1. Create the Vite/React/Tailwind-compatible toolchain and install `framer-motion` and `react-router-dom`.
2. Download only source-approved high-resolution assets from the live WordPress media URLs into `public/assets/`, using local filenames referenced by the content model.
3. Implement the page shell, route manifest, responsive layout, and interactions.
4. Start the Vite server on the managed port 3000 and verify the route manifest over HTTP.
5. Capture desktop and mobile preview screenshots, compare against the live audit screenshot and measured typography, and adjust spacing/wrapping/crops.
6. Run the production build and diagnostics, then commit and push the finished project to the canonical remote for the WebDev checkpoint.

## Material constraints

This is a frontend-only migration. Newsletter and contact forms are intentionally implemented as local interactive states because no submission backend was requested. External source assets are referenced only after being downloaded into the app's public asset directory. No client logos, awards, or performance claims beyond the source copy are invented.
