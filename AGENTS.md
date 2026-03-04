# [AGENTS.md](http://AGENTS.md) — [MichaelKai.us](http://MichaelKai.us) site rules


## ABSOLUTE RULE — NO WORKTREES
NEVER use `git worktree` commands. NEVER create, add, or use worktrees under any circumstances. Always work directly in the main project directory. This rule overrides all other preferences and cannot be bypassed for any reason.

Goal:

- A warm, professional, high-trust static site for AI tutoring (older adults).

Non-goals:

- Do NOT introduce heavy frameworks (no React/Next). Keep it static HTML/CSS/JS.

Structure:

- Keep index.html at repo root.

- Prefer one global stylesheet (styles.css) and minimal JS (script.js) unless justified.

Quality bar:

- Mobile-first responsive behavior.

- Accessibility: semantic headings, proper labels, keyboard navigable.

- Performance: avoid large libraries; optimize images.

Change policy:

- Make small, reviewable commits.

- When uncertain, ask a question rather than guessing.

- Provide a short checklist: what changed + how to verify.

Always work directly in the main working directory. Never use git worktrees.