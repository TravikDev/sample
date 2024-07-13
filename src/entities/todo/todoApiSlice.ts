// import { apiSlice } from "../api/apiSlice";
// import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
// import type { EndpointBuilder } from "@reduxjs/toolkit/query";
// import { User } from "../users/usersSlice";
// import type { User } from "../types";

// export const todoApiSlice = apiSlice.injectEndpoints({
//   endpoints: () => ({
    // getNews: builder.query<User[], void>({
    //   query: () => 'api/users',
    //   keepUnusedDataFor: 10,
    // }),
    // createNews: builder.mutation<User, Partial<User>>({
    //   query: (body) => ({
    //     url: 'api/users',
    //     method: 'POST',
    //     body,
    //   }),
    // }),
//   }),
//   overrideExisting: false,
// });

// Явное указание типов для хуков
// type UseGetNewsQueryHook = ReturnType<typeof todoApiSlice.useGetNewsQuery>;
// type UseCreateNewsMutationHook = ReturnType<typeof todoApiSlice.useCreateNewsMutation>;

// export todoApiSlice
