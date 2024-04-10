<script>
  import '../app.pcss'
  import { theme } from '../stores/themeStore'
  import NavBar from '../components/NavBar.svelte';
</script>

<svelte:head>
  <meta name='color-scheme' content={$theme == 'system' ? 'light dark' : $theme}/>
  <link rel='stylesheet' href={`/theme/${$theme}.css`} />
</svelte:head>

<NavBar />
<slot></slot>
