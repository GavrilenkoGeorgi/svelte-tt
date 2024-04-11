<script>
  import * as m from '../paraglide/messages'
  import ThemeSwitch from '../components/ThemeSwitch.svelte'
  import LangSwitch from './LangSwitch.svelte'
</script>

<nav class='navbar'>
  <div class='navbar__container'>
    <a class='navbar__link' href='/'>{m.navLinkMain()}</a>
    <a class='navbar__link' href='/derived'>{m.navLinkStore()}</a>
    <a class='navbar__link' href='/posts'>{m.navLinkPublicAPI()}</a>
  </div>
  <div class='controls'>
    <LangSwitch />
    <ThemeSwitch />
  </div>
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid var(--color-lighter);
    margin-bottom: 3rem;
  }
  .controls {
    display: flex;
  }
  .navbar__link {
    padding: 0 1rem;
  }
  @media (width <= 844px) {
    .navbar__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .navbar__link {
      font-size: .9rem;
      margin: .25rem 0;
      padding-left: 0;
    }
    .controls {
      flex-direction: column;
    }
  }
</style>
