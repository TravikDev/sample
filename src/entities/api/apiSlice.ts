import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

interface Post {
    id: number
    name: string
  }

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5173' }),
    endpoints: (builder) => ({
        getTodos: builder.query<Todo[], null>({
            query: () => 'todos'
        }),
        getPost: builder.query<Post, number>({
            // inferred as `number` from the `QueryArg` type
            //         v
            queryFn: (arg) => {
              const post: Post = {
                id: arg,
                name: 'getRandomName',
              }
              // For the success case, the return type for the `data` property
              // must match `ResultType`
              //              v
              return { data: post }
            },
          }),
    })
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
/* @ts-ignore */
export const {  } = apiSlice
// const useGetPokemonByNameQuery = apiSlice.endpoints.getTodos