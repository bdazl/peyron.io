# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/website at peyron.io built with **Hugo** (extended version) using the **Congo v2** theme via Hugo modules. Features an art gallery with PhotoSwipe lightbox and an experimental ThreeJS 3D exhibit page.

## Build Commands

- `make serve` — Dev server with drafts enabled (`hugo server -D`)
- `make generate` — Build static site to `public/` (`hugo`)
- `make update` — Update Hugo modules (`hugo mod get -u`)

## Architecture

**Configuration** is split across `config/_default/` (not the root `hugo.yml` which only has baseURL):
- `config.yml` — Site settings, outputs, pagination
- `params.yml` — Congo theme params (color scheme: ocean, dark mode default, Fathom analytics)
- `languages.en.yml` — Author info and social links
- `menus.en.yml` — Navigation structure
- `markup.yml` — Goldmark with unsafe HTML enabled
- `module.yml` — Congo theme import

**Content sections:**
- `content/_index.md` — Homepage (uses Congo "profile" layout)
- `content/art/` — Gallery using `{{< gallery >}}` and `{{< figure >}}` shortcodes
- `content/notes/` — Blog posts organized by year
- `content/debug/exhibit/` — Draft ThreeJS 3D page using custom `three` layout

**Custom layouts:**
- `layouts/_default/three.html` — Layout for ThreeJS/WebGL pages
- `layouts/shortcodes/` — `gallery.html`, `figure.html` (from hugo-easy-gallery), `load-three.html`, `load-photoswipe.html`

**Static assets** in `static/`:
- `js/exhibit.js` — ThreeJS 3D cube demo
- `js/load-photoswipe.js` — PhotoSwipe lightbox initialization (depends on jQuery)
- `css/` — Styles for gallery and ThreeJS

**Theme** is managed as a Hugo module (Go modules via `go.mod`), not as a git submodule. Run `make update` to update it.
