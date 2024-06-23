import { useSelector } from "react-redux";

export const PostsList = () => {
    /* @ts-ignore */
    const posts = useSelector(state => state?.posts)

    console.log(posts)
    return posts.map((post: any) => <div key={post.id}>{post.id}: {post.title}. {post.content}</div>)
}
