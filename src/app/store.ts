import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../entities/counter/counterSlice";
import postsSlice from "../entities/posts/postsSlice";
import type { Store } from "@reduxjs/toolkit";

export const store: Store = configureStore({
    reducer: {
        counter: counterSlice,
        posts: postsSlice,
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// export type RootState = ReturnType<typeof rootReducer>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// hooks > useDispatch / useSelector
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // Export a hook that can be reused to resolve types
