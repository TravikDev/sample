import { createSlice } from "@reduxjs/toolkit"
// import { apiSlice } from "../api/apiSlice"

export interface Profile {
    userId: string,
    username: string,
    clicks: number,
    rank: number,
    moneyPerHour: number,
}

export interface ProfileState {
    profile: Profile;
    loading: boolean;
    error: string | null;
}

const initialState: Profile = {
    userId: '1',
    username: 'Name',
    clicks: 1243,
    rank: 4283,
    moneyPerHour: 0.12
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addOneClick(state) {
            state.clicks++
        }
    }
})

export const selectProfile = (state: ProfileState) => state.profile

export const { addOneClick } = profileSlice.actions

export default profileSlice.reducer