# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/website at peyron.io built with **Hugo** (extended version) using the **Congo v2** theme via Hugo modules. Features an art gallery with PhotoSwipe lightbox. ThreeJS layout/shortcode exist here; the 3D exhibit itself is paused on the `exhibit` branch.

## Build Commands

- `make serve` — Dev server with drafts enabled (`hugo server -D`)
- `make generate` — Build static site to `public/` (`hugo`)
- `make update` — Update Hugo modules (`hugo mod get -u`)

## Agent Notes Sync and Working Log

- Mirror additions between `CLAUDE.md` and `AGENTS.md` when instructions are added here.
- Keep a small ongoing private work log in `.log/<YYYY-MM-DD>_<context-title>.md`.
- Files in `.log/` are local working notes and must not be committed.
- Never create commits unless the user explicitly asks for a commit.
- Interpret "atomära commits" from the current working tree state: split the final state into logical commits, not the intermediate experimentation history.

## Architecture

**Configuration** lives in `config/_default/`:
- `config.yml` — Site settings, outputs, pagination
- `params.yml` — Congo theme params (color scheme: ocean, dark mode default, Fathom analytics)
- `languages.en.yml` — Author info and social links
- `menus.en.yml` — Navigation structure
- `markup.yml` — Goldmark with unsafe HTML enabled
- `module.yml` — Congo theme import

**Content sections:**
- `content/_index.md` — Homepage (uses Congo "profile" layout)
- `content/art/` — Gallery using `{{< gallery >}}` and `{{< artwork >}}` shortcodes
- `content/notes/` — Blog posts organized by year

**Custom layouts:**
- `layouts/_default/three.html` — Layout for ThreeJS/WebGL pages
- `layouts/shortcodes/` — `gallery.html`, `artwork.html`, `load-photoswipe.html` (PhotoSwipe 5, ESM from CDN), `load-three.html`

**Art images** live in `assets/art/` (originals). `artwork.html` generates WebP thumbnails and lightbox-sized images with Hugo image processing; nothing is served at the original size. Add a painting by dropping the file into `assets/art/` and adding `{{< artwork src="name.jpg" caption="name" >}}` to `content/art/index.md`.

**Static assets** in `static/`:
- `js/exhibit.js` — ThreeJS 3D cube demo
- `css/` — Styles for gallery and ThreeJS

**Theme** is managed as a Hugo module (Go modules via `go.mod`), not as a git submodule. Run `make update` to update it.
