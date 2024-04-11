<script>
  import * as m from '../paraglide/messages'
  import { theme } from '../stores/themeStore'
</script>

<select bind:value='{$theme}'>
  <option value='system'>{m.systemThemeName()}</option>
  <option value='light'>{m.lightThemeName()}</option>
  <option value='dark'>{m.darkThemeName()}</option>
</select>
