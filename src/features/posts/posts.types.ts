// Define a type for the slice state
export interface Post {
    id: string
    userId: string
    title: string
    content: string
    date: string
    reactions: {
        thumbsUp: number,
        thumbsDown: number,
        [key: string]: number;
    }
}
