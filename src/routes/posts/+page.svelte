<script>
  import * as m from '../../paraglide/messages'
  export let data
</script>

<div class='posts'>
  <h1 class='posts__heading'>{m.navLinkPublicAPI()}</h1>
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
    padding: .5rem;
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
