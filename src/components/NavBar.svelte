<script>
  import ThemeSwitch from '../components/ThemeSwitch.svelte'
</script>

<nav>
  <div class='navbar'>
    <a class='navbar__link' href='/'>Main page</a>
    <a class='navbar__link' href='/derived'>Derived store example</a>
    <a class='navbar__link' href='/posts'>Public API posts</a>
  </div>
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
