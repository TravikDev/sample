import { http, HttpResponse } from 'msw'

// const allPosts = new Map()

// export const handlers = [
//   // Intercept "GET http://example.com/user" requests...
//   http.get('http://example.com/user', () => {
//     // ...and respond to them using this JSON response.
//     return HttpResponse.json({
//       id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
//       firstName: 'John',
//       lastName: 'Maverick',
//     })
//   }),
//   http.get('/posts', () => {
//     console.log('Captured a "GET /posts" request')
//     return HttpResponse.json(Array.from(allPosts.values()))
//   }),
//   http.post('/posts', () => {
//     console.log('Captured a "POST /posts" request')
//   }),
//   // http.post('/posts', async ({ request }) => {
//   //   // Read the intercepted request body as JSON.
//   //   const newPost = await request.json()

//   //   // Push the new post to the map of all posts.
//   //   allPosts.set(newPost.id, newPost)

//   //   // Don't forget to declare a semantic "201 Created"
//   //   // response and send back the newly created post!
//   //   return HttpResponse.json(newPost, { status: 201 })
//   // }),
//   http.delete('/posts/:id', ({ params }) => {
//     console.log(`Captured a "DELETE /posts/${params.id}" request`)
//   }),
// ]

export const handlers = [
  http.get('/api/user', () => {
    // console.log('Handling GET /api/user');
    return HttpResponse.json([{ id: 1, name: "John" }])
  }),
  http.get('/api/todos', () => {
    console.log('Handling GET /api/user');
    return HttpResponse.json([
      { id: "1", userId: "1", title: "Title 1", completed: true },
      { id: "2", userId: "2", title: "Title 2", completed: true },
      { id: "3", userId: "3", title: "Title 3", completed: true },
    ])
  }),
];
