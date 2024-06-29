import { selectAllUsers } from "@/entities/users/usersSlice"
import { useSelector } from "react-redux"

type PropsWithUserId = {
    userId: string
}

export const PostAuthor = ({ userId }: PropsWithUserId) => {

    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId)

    return <span>by {author ? author.name : 'Unknown author'}</span>
}
