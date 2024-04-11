# Svelte test task

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## What's missing

1. Themes with replaceable components/styles (system, light/dark themes are present and customisable)
2. Proper tests for the public API (info about using vitest for testing API responses is very scarce, maybe other testing libraries can be used to test this functionality)
3. Changing language requires page reload (this seems like a fixable issue, but again Paraglide JS that is used is rather new, so stackoverflow isn't very helpful yet)
4. FSD project structure is done as close as possible to the given recommendations (Svelte enforces rather 'hardcoded' folder structure for routing, other than that all new components can be placed and separated as needed)

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
