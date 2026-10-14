# AGENTS.md

## Project Scope
- This repository is a private personal website (Hugo + Congo v2 theme). See `CLAUDE.md` for build commands and architecture.
- Keep broad site structure/content intact unless explicitly asked to change it.

## Agent Notes Sync and Working Log
- Mirror additions between `CLAUDE.md` and `AGENTS.md` when instructions are added here.
- Keep a small ongoing private work log in `.log/<YYYY-MM-DD>_<context-title>.md`.
- Files in `.log/` are local working notes and must not be committed.

## Art Images
- Originals live in `assets/art/`; the `artwork` shortcode resizes them with Hugo image processing. Do not put art images in `static/`.

## Change Hygiene
- Do not include `docs/` changes in commits unless explicitly requested.
- Never create commits unless the user explicitly asks for a commit.
- Interpret "atomära commits" from the current working tree state: split the final state into logical commits, not the intermediate experimentation history.
