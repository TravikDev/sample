import { createSlice } from "@reduxjs/toolkit";


// Define a type for the slice state
export interface PostsState {
    id: number,
    title: string,
    content: string,
}

const initialState: PostsState[] = [
    {
        id: 1,
        title: "New Title",
        content: "Some Content",
    },
    {
        id: 2,
        title: "2 New Title",
        content: "2 Some Content",
    },
    {
        id: 3,
        title: "3 New Title",
        content: "3 Some Content",
    },
]

const postsSlice = createSlice({
    name: "Posts",
    initialState,
    reducers: {
        // actions
    }
})

export const selectAllPosts = (state: PostsState[]) => state;

export default postsSlice.reducer