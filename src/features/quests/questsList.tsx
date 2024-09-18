import { useNewSelector } from "@/shared/hooks/storeActions";
// import { selectAllFriends } from "@/entities/friends";
import { selectAllQuests } from "@/entities/quests/questsSlice";
// import { PostAuthor } from "./postAuthor";
// import { TimeAgo } from "@/shared/ui/timeAgo";
// import { ReactionButton } from "@/shared/ui/reactionButton";

export const QuestsList = () => {
    /* @ts-ignore */
    // const friends = useSelector(state => state.friends)
    const quests = useNewSelector(selectAllQuests)

    console.log(quests)

    // const orderedPosts = quests.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedQuests = quests.map((quest) => (
        <article key={quest._id}>
            {/* <h3>{quest.idTelegram}</h3> */}
            {/* <p>{quest.avatar.substring(0, 100)}</p> */}
            <div className="postCredit">
                {/* <PostAuthor userId={quest.userId} /> */}
                {/* <TimeAgo timestamp={quest.date} />
                <ReactionButton quest={post} /> */}
            </div>
        </article>
    ))

    return (
        <section>
            <h2>Quests</h2>
            {renderedQuests}
        </section>
    )

}
