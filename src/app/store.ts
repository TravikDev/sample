import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import postsSlice from "../features/posts/postsSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        posts: postsSlice,
    }
})