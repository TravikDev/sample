import { Post } from "@/features/posts/posts.types";
import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";


export interface PostsState {
    posts: Post[];
    loading: boolean;
    error: string | null;
}

interface ReactionAddedPayload {
    postId: string;
    reaction: keyof Post['reactions'];
}

const initialState: Post[] = [
    {
        id: '1',
        userId: '1',
        title: "New Title",
        content: "Some Content",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            thumbsDown: 0,
        },
    },
    {
        id: '2',
        userId: '2',
        title: "2 New Title",
        content: "2 Some Content",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            thumbsDown: 0,
        },
    },
    {
        id: '3',
        userId: '3',
        title: "3 New Title",
        content: "3 Some Content",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            thumbsDown: 0,
        },
    },
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action: PayloadAction<Post>) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            thumbsDown: 0,
                        },
                    }
                }
            }
        },
        reactionAdded(state, action: PayloadAction<ReactionAddedPayload>) {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
})

export const selectAllPosts = (state: PostsState) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions

export default postsSlice.reducer