import { useNewSelector } from "@/shared/hooks/storeActions";
import { selectAllFriends } from "@/entities/friends";
// import { PostAuthor } from "./postAuthor";
// import { TimeAgo } from "@/shared/ui/timeAgo";
// import { ReactionButton } from "@/shared/ui/reactionButton";

export const FriendsList = () => {
    /* @ts-ignore */
    // const friends = useSelector(state => state.friends)
    const friends = useNewSelector(selectAllFriends)

    console.log(friends)

    // const orderedPosts = friends.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedFriends = friends.map((friend) => (
        <article key={friend._id}>
            <h3>{friend.idTelegram}</h3>
            <p>{friend.avatar.substring(0, 100)}</p>
            <div className="postCredit">
                {/* <PostAuthor userId={friend.userId} /> */}
                {/* <TimeAgo timestamp={friend.date} />
                <ReactionButton friend={post} /> */}
            </div>
        </article>
    ))

    return (
        <section>
            <h2>Friends</h2>
            {renderedFriends}
        </section>
    )

}
