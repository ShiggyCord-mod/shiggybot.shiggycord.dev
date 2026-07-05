# ShiggyBot Docs

Documentation website for [ShiggyBot](https://github.com/kmmiio99o/ShiggyBot) — a modular Discord bot built with C# / .NET.

Built with React, TypeScript, Vite, MDX, and MUI.

## Prerequisites

- [Bun](https://bun.sh) (package manager and runtime)
- Git (with submodule support)

## Getting Started

```bash
# Clone with submodules
git clone --recurse-submodules https://github.com/kmmiio99o/shiggybot.shiggycord.dev
cd shiggybot.shiggycord.dev

# Or if already cloned:
git submodule update --init --remote

# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build
```

The dev server runs at `http://localhost:5173`.

## How It Works

The website embeds ShiggyBot's actual C# source code for display on the homepage. A prebuild script (`scripts/generate-cs-index.mjs`) scans the `ShiggyBot/` submodule and generates `src/data/csFiles.ts` containing every `.cs` file with its full source code.

This file is gitignored and regenerated automatically before `dev` and `build`.

## Project Structure

```
src/
  pages/            Documentation pages (MDX + TSX wrappers)
  components/       React components (Header, Sidebar, CodeWindow, etc.)
  data/             Auto-generated C# source index (gitignored)
  layouts/          Page layout components
  styles/           Global CSS and highlight.js theme
  i18n/             UI strings (strings.json)
  theme.ts          MUI theme (light/dark)
ShiggyBot/           Git submodule — C# bot source
scripts/             Build scripts (csFiles index generator)
```

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start dev server with hot reload |
| `bun run build` | Typecheck + production build to `dist/` |
| `bun run preview` | Preview the production build |

## License

GPL-3.0
