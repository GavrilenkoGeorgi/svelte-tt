export const load = async ({ params, fetch }) => {
  const fetchPost = async (id) => {
    const res = await fetch(`/api/posts/${id}`)
    const data = await res.json()
    return data
  }

  return {
    post: await fetchPost(params.postId)
  }
}
