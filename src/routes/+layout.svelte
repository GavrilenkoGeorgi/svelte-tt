<script>
  import '../app.pcss'
  import { theme } from '$lib/themeStore'
  import NavBar from '../pages/components/NavBar.svelte'
  import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit'
  import { i18n } from '$lib/i18n.js'
</script>

<svelte:head>
  <meta name='color-scheme' content={$theme == 'system' ? 'light dark' : $theme}/>
  <link rel='stylesheet' href={`/theme/${$theme}.css`} />
</svelte:head>

<ParaglideJS {i18n}>
  <NavBar />
  <slot />
</ParaglideJS>
