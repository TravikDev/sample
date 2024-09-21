// import { selectAllPosts } from "@/entities/posts"
// import { useNewSelector } from "@/shared/hooks/storeActions"
// import type { PostsState } from "@/entities/posts"
import { PostAdd } from "@/features/posts/postAdd"
import { PostsList } from "@/features/posts/PostsList"

export const PostsView = () => {


  // The `state` arg is correctly typed as `RootState` already
  // const posts = useNewSelector(selectAllPosts)
  // const dispatch = useNewDispatch()

  // console.log(count[1])

  return (
    <>
      <PostAdd />
      <PostsList />
    </>
  )
}
