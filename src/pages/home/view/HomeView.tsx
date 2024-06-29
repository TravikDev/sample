import { Counter } from "../../../features/counter/counter";
import { PostsList } from "@/features/posts/postsList";

export default function HomeView() {
    return (
        <div>
            <h1>HomeView</h1>
            <PostsList />
            <Counter />
        </div>
    )
}
