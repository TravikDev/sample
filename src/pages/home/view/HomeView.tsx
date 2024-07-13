import { useHelmet } from "@/shared/hooks/useHelmet";
// import { Counter } from "../../../features/counter/counter";
// import { PostsList } from "@/features/posts/postsList";
import Clicker from "@/features/clicker/clicker";

export default function HomeView() {

    const helmet = useHelmet({ title: 'Title', description: 'Description', keywords: 'keywords' })

    return (
        <>
            {helmet}
            {/* <h1>Tap-Toy</h1> */}
            <Clicker />
            {/* <PostsList /> */}
            {/* <Counter /> */}
        </>
    )
}
