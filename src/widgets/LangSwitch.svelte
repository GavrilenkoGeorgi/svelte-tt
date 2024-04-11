<script>
  const changeLang = ({ value }) => {
    window.location.href = `/${value}`
  }
</script>

<div class='language'>
  <button
    class='language__btn'
    on:click={({ target }) => changeLang(target)}
    value='en'
  >
    EN
  </button>
  <button
    class='language__btn'
    on:click={({ target }) => changeLang(target)}
    value='ukr'
  >
   UKR
  </button>
</div>

<style>
  .language {
    display: flex;
  }
  .language__btn {
    border: none;
    background-color: var(--color-lighter);
    padding: .25rem .5rem;
    border-radius: .25rem;
    margin: .25rem;
  }
  @media (width <= 844px) {
    .language {
      flex-direction: column;
      justify-content: center;
    }
    .language__btn {
      margin: .25rem 0;
    }
  }
</style>
