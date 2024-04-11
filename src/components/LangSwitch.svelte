<script>
  const changeLang = ({ value }) => {
    window.location.href = `/${value}`
  }
</script>

<div>
  <button
    on:click={({ target }) => changeLang(target)}
    value='en'
  >
    EN
  </button>
  <button
    on:click={({ target }) => changeLang(target)}
    value='ukr'
  >
   UKR
  </button>
</div>
