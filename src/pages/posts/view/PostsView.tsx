import { selectAllPosts } from "@/entities/posts"
import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeActions"
import type { PostsState } from "@/entities/posts"

export const PostsView = () => {

  
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector(selectAllPosts)
    // const dispatch = useAppDispatch()

    // console.log(count[1])

  return (
    <div>PostsView</div>
  )
}
