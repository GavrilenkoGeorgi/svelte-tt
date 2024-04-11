<script>
  import * as m from '../../paraglide/messages'
  import Form from '../../components/Form.svelte'
</script>

<h1>{m.navLinkStore()}</h1>
<Form />

<style>
  h1 {
    text-align: center;
  }
</style>
