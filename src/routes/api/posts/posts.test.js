import { describe, it, expect } from 'vitest'

describe('/api/posts', () => {
  it('get list of all posts', async () => {
    fetch('http://localhost:5173/api/posts').then((response) => {
      expect(response.status).toBe(200)
    })
  })
})

describe('/api/posts/[postId]', () => {
  it('get post by id', async () => {
    fetch('http://localhost:5173/api/posts/1').then((response) => {
      expect(response.status).toBe(200)
    })
  })
})
