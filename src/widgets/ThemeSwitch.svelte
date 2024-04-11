<script>
  import * as m from '../paraglide/messages'
  import { theme } from '$lib/themeStore'
</script>

<div class='theme'>
  <select bind:value='{$theme}' class='theme__select'>
    <option value='system'>{m.systemThemeName()}</option>
    <option value='light'>{m.lightThemeName()}</option>
    <option value='dark'>{m.darkThemeName()}</option>
  </select>
</div>

<style>
  .theme {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .theme__select {
    height: 1.5rem;
    margin: 0 .25rem;
  }
  @media (width <= 844px) {
    .theme__select {
      margin: .25rem 0;
    }
  }
</style>
