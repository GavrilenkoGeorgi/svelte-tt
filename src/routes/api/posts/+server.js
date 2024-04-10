export const GET = async ({ url }) => {

  const limit = Number(url.searchParams.get('limit') ?? '10')
  const skip = Number(url.searchParams.get('skip') ?? '0')

  const res = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`)
  const data = await res.json()

  return new Response(JSON.stringify(data, { status: 200 }))
}

export const POST = async () => {
  return new Response(JSON.stringify({ message: 'Success'}), { status: 201 })
}
