# Design direction: Antony Ayansi portfolio

Identity: personal portfolio of an indie full-stack engineer / technical lead in Peru.
Personality: direct, practical, no marketing fluff. Shows real products, papers, and notes.
Audience: hiring managers, collaborators, clients who want clear technical work.

## Visual language

- Palette: flat black (`#000`) / white (`#fff`) bases. One accent: Matrix green (`#00ff41` dark / `#009e36` light).
- No page-wide gradients. Atmosphere comes from type, spacing, and the CursorStudio stage, not orbs or mesh.
- Type: Syne (display) + Outfit (body). Chosen for a sharp, non-default portfolio voice.
- Surfaces: solid or soft card fills. Glass only if needed for one floating chrome piece, never site-wide.
- Radius scale: `sm` / `md` / `lg` for content. Avoid pill-everything. Circular only for icon toggles.

## Content rules

- Real projects, real screenshots, real papers (author name only when relevant).
- Blog posts are Markdown in `src/content/posts/`. Mermaid for diagrams.
- Spanish, plain language.
- CTAs name the action: Ver proyectos, Descargar CV, Enviar mensaje, WhatsApp.

## Dial

`ENERGY 2 / RHYTHM 2 / MOTION 2`

- Energy: brand name as hero signal, green accent on key moments, not everywhere.
- Rhythm: section compositions vary (hero split, project grid, article list, skills columns, contact panel).
- Motion: scroll reveal + hero char stagger + CursorStudio; no template bounce on every card.
