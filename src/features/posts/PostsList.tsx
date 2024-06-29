// import { useSelector } from "react-redux";
import { useAppSelector } from "@/shared/hooks/storeActions";
import type { PostsState } from "@/entities/posts";

export const PostsList = () => {
    /* @ts-ignore */
    // const posts = useSelector(state => state.posts)
    const posts = useAppSelector((state): PostsState[] => state.posts)

    console.log(posts)
    const renderedPosts = posts.map((post: any) => <div key={post.id}><h3>{post.title}</h3><p>{post.content.substring(0, 100)}</p></div>)

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )

}
