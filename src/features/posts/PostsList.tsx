import { useNewSelector } from "@/shared/hooks/storeActions";
import { selectAllPosts } from "@/entities/posts";
import { PostAuthor } from "./postAuthor";
import { TimeAgo } from "@/shared/ui/timeAgo";
import { ReactionButton } from "@/shared/ui/reactionButton";

export const PostsList = () => {
    /* @ts-ignore */
    // const posts = useSelector(state => state.posts)
    const posts = useNewSelector(selectAllPosts)

    // console.log(posts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map((post) => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <div className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
                <ReactionButton post={post} />
            </div>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )

}
