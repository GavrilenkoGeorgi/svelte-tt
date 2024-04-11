<script>
  import * as m from '../paraglide/messages'
  import ThemeSwitch from '../components/ThemeSwitch.svelte'
  import LangSwitch from './LangSwitch.svelte'
</script>

<nav>
  <div class='navbar'>
    <a class='navbar__link' href='/'>{m.navLinkMain()}</a>
    <a class='navbar__link' href='/derived'>{m.navLinkStore()}</a>
    <a class='navbar__link' href='/posts'>{m.navLinkPublicAPI()}</a>
  </div>
  <LangSwitch />
  <ThemeSwitch />
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }

  a {
    padding: 0 1rem;
  }
</style>
