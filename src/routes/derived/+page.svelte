<script>
  import * as m from '$lib/paraglide/messages'
  import Form from '../../features/form/Form.svelte'
</script>

<h1>{m.navLinkStore()}</h1>
<Form />

<style>
  h1 {
    text-align: center;
  }
</style>
