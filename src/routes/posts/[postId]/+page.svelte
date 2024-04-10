<script>
  export let data
</script>

<div class='post'>
  <h1 class='post__title'>{data.post.title}</h1>
  <p class='post__body'>{data.post.body}</p>
</div>

<style>
  .post {
    border: 1px solid silver;
    max-width: 960px;
    margin: 1rem auto;
    padding: 1rem;
  }
</style>
