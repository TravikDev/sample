import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "../api/apiSlice";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

interface User {
  _id: number;
  idTelegram: number;
  username: string;
  level: number;
  salary: number;
  rating: number;
  energy: number;
  coins: number;
  dateRegistartion: string;
  dateSalary: string;
  dateUpdated: string;
  dateOnline: string;
}

const usersAdapter = createEntityAdapter()

const initialState = usersAdapter.getInitialState()

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      // transformResponse: responseData => {
      //   return usersAdapter.setAll(initialState, responseData)
      // },
      // providesTags: (result, error, arg) => [
      //   { type: 'User', id: "LIST" },
      //   ...result.ids.map(id => ({ type: 'User', id }))
      // ]
    }),
    tap: builder.mutation({
      query: id => ({
        url: `/users/tap/${id}`,
        method: 'POST',
      }),
      // invalidatesTags: [
      //   { type: 'Post', id: "LIST" }
      // ]
    }),
  })
})


// Использование ReturnType для явного указания типа
// export const useGetUsersQuery: typeof usersApiSlice.useGetUsersQuery = usersApiSlice.useGetUsersQuery;
export const { 
  useGetUsersQuery,
  useTapMutation
/* @ts-ignore */
 } = usersApiSlice


// returns the query result object
/* @ts-ignore */
export const selectUsersResult = usersApiSlice.endpoints.getUsers.select()

// // Creates memoized selector
const selectUsersData = createSelector(
  selectUsersResult,
  usersResult => usersResult.data // normalized state object with ids & entities
)

// //getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds
  /* @ts-ignore */
} = usersAdapter.getSelectors(state => selectUsersData(state) ?? initialState)

// // import { RootState } from "@/app/store"
// import { createSlice } from "@reduxjs/toolkit"

// export interface User {
//   id: string,
//   name: string,
//   surname: string,
// }

// export interface UsersState {
//   users: User[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: User[] = [
//   { id: '0', name: 'Mike', surname: 'Vazovsky' },
//   { id: '1', name: 'Dave', surname: 'Gray' },
//   { id: '2', name: 'Michael', surname: 'Jackson' },
// ]

// const usersApiSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {
//     // setOne(state, action) {
//     //   // state.action
//     // },
//     // update(state, action) {
//     //   // state.action
//     // },
//     // delete(state, action) {
//     //   // state.action
//     // }
//   }
// })

// export const selectAllUsers = (state: UsersState) => state.users



// export default usersSlice.reducer