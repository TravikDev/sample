// import { RootState } from "@/app/store"
import { createSlice } from "@reduxjs/toolkit"

export interface User {
  id: string,
  name: string,
  surname: string,
}

export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: User[] = [
  { id: '0', name: 'Mike', surname: 'Vazovsky' },
  { id: '1', name: 'Dave', surname: 'Gray' },
  { id: '2', name: 'Michael', surname: 'Jackson' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // setOne(state, action) {
    //   // state.action
    // },
    // update(state, action) {
    //   // state.action
    // },
    // delete(state, action) {
    //   // state.action
    // }
  }
})

export const selectAllUsers = (state: UsersState) => state.users



export default usersSlice.reducer