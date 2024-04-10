<script>
  export let data
  console.log(data)
</script>

<div class='posts-container'>
  {#each data.posts as post}
    <div class='post'>
      <h1 class='post__title'>
        {post.title}
      </h1>
      <p class='post__body'>
        {post.body}
      </p>
    </div>
  {/each}
</div>

<style>
  .posts-container {
    max-width: 960px;
    margin: auto;
  }
  .post {
    margin: 1rem;
    border: 1px solid lightblue;
    border-radius: .25rem;
    padding: 1rem;
  }

</style>
