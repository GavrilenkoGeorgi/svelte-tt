export const load = async ({ fetch }) => {

  const fetchPosts = async () => {
    const res = await fetch('/api/posts')
    const { posts } = await res.json()
    return posts
  }

  return {
    posts: await fetchPosts()
  }
}
