<script>
  export let data
  console.log(data)
</script>

<div class='posts'>
  <h1 class='posts__heading'>Public API posts</h1>
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
  .posts {
    max-width: 960px;
    margin: auto;
  }
  .posts__heading {
    text-align: center;
  }
  .post {
    margin: 1rem;
    border: 1px solid lightblue;
    border-radius: .25rem;
    padding: 1rem;
  }
</style>
