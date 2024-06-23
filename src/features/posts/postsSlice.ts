import { createSlice } from "@reduxjs/toolkit";

const initialState = [
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

    }
})

export default postsSlice.reducer