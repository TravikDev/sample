import { reactionAdded } from "@/entities/posts"
import { useNewDispatch } from "../hooks/storeActions"

import type { Post } from "@/features/posts/posts.types"

type ReactionType = keyof typeof reactionEmoji;

const reactionEmoji = {
    thumbsUp: '👍',
    thumbsDown: '👎',
} as const;

export const ReactionButton = ({ post }: { post: Post }) => {

    const dispatch = useNewDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name as ReactionType }))}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return <div>{reactionButtons}</div>
}
