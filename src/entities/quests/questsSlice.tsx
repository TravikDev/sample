import { Quest } from "@/features/quests/quests.types";
import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";


export interface QuestsState {
    quests: Quest[];
    loading: boolean;
    error: string | null;
}

// interface ReactionAddedPayload {
//     postId: string;
//     reaction: keyof Quest['reactions'];
// }

const initialState: Quest[] = [
    // {
    //     _id: '0',
    //     userId: '0',
    //     title: "Собери 3 ежедневные награды",
    //     content: "4 Some Content",
    //     salary: 1000,
    //     date: sub(new Date(), { minutes: 10 }).toISOString(),
    // },
    // {
    //     _id: '1',
    //     userId: '1',
    //     title: "Подписаться на нас и Telegram",
    //     content: "Some Content",
    //     salary: 123,
    //     date: sub(new Date(), { minutes: 10 }).toISOString(),
    // },
    {
        _id: '2',
        userId: '2',
        title: "Подписаться на наш канал",
        content: "2 Some Content",
        salary: 321,
        date: sub(new Date(), { minutes: 10 }).toISOString(),
    },
    {
        _id: '3',
        userId: '3',
        title: "Пригласи 3 друзей",
        content: "3 Some Content",
        salary: 2111,
        date: sub(new Date(), { minutes: 10 }).toISOString(),
    },
    // {
    //     _id: '4',
    //     userId: '4',
    //     title: "Собери 3 ежедневные награды",
    //     content: "4 Some Content",
    //     salary: 1000,
    //     date: sub(new Date(), { minutes: 10 }).toISOString(),
    // }
    // {
    //     _id: '3',
    //     userId: '3',
    //     title: "3 New Title",
    //     content: "3 Some Content",
    //     date: sub(new Date(), { minutes: 10 }).toISOString(),
    //     reactions: {
    //         thumbsUp: 0,
    //         thumbsDown: 0,
    //     },
    // },
]

const questsSlice = createSlice({
    name: "quests",
    initialState,
    reducers: {
        // postAdded: {
        //     reducer(state, action: PayloadAction<Quest>) {
        //         state.push(action.payload)
        //     },
        //     prepare(title, content, userId) {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 title,
        //                 content,
        //                 userId,
        //                 date: new Date().toISOString(),
        //                 reactions: {
        //                     thumbsUp: 0,
        //                     thumbsDown: 0,
        //                 },
        //             }
        //         }
        //     }
        // },
        // reactionAdded(state, action: PayloadAction<ReactionAddedPayload>) {
        //     const { postId, reaction } = action.payload
        //     const existingPost = state.find(post => post.id === postId)
        //     if (existingPost) {
        //         existingPost.reactions[reaction]++
        //     }
        // }
    }
})

export const selectAllQuests = (state: QuestsState) => state.quests;

// export const { postAdded, reactionAdded } = questsSlice.actions

export default questsSlice.reducer