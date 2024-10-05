// import { Post } from "@/features/posts/posts.types";
import { createSlice } from "@reduxjs/toolkit";
// import { sub } from "date-fns";
import { Friend } from "./friends.dto";


export interface FriendsState {
    friends: Friend[];
    loading: boolean;
    error: string | null;
}

// interface ReactionAddedPayload {
//     postId: string;
//     reaction: keyof Post['reactions'];
// }

const initialState: Friend[] = [
    {
        _id: 1,
        idTelegram: 1019382743,
        avatar: "New Title",
    },
    {
        _id: 2,
        idTelegram: 2102948392,
        avatar: "2 New Title",
    },
    {
        _id: 3,
        idTelegram: 3482839402,
        avatar: "2 New Title",
    },
    {
        _id: 4,
        idTelegram: 4230194837,
        avatar: "2 New Title",
    },
    {
        _id: 5,
        idTelegram: 5029384023,
        avatar: "2 New Title",
    },
]

const friendsSlice = createSlice({
    name: "friends",
    initialState,
    reducers: {

    }
})

export const selectAllFriends = (state: FriendsState) => state.friends;

// export const { postAdded, reactionAdded } = postsSlice.actions

export default friendsSlice.reducer