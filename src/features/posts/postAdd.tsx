import { ChangeEvent, FormEvent, useState } from "react"
import { useNewDispatch } from "@/shared/hooks/storeActions"
import { postAdded } from "@/entities/posts"
import { useSelector } from "react-redux"
import { selectAllUsers } from "@/entities/users/usersSlice"

export const PostAdd = () => {

	// init
	const dispatch = useNewDispatch()

	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [userId, setUserId] = useState('')

	const users = useSelector(selectAllUsers)


	// const [[first, second], setNew] = useState([{ id: 1 }, { id: 2 }])

	const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
	const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)
	const onChangeAuthor = (e: ChangeEvent<HTMLSelectElement>) => setUserId(e.target.value)

	const onSubmitAddPost = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log('clicked')
		if (title && content) {
			dispatch(postAdded(title, content, userId))

			setTitle('')
			setContent('')
		}
	}

	const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

	const usersOptions = users.map(user => (
		<option key={user.id} value={user.id}>
			{/* {user.name} {user.surname} */}
		</option>
	))

	return (
		<section>
			<h2>Add a New Post</h2>
			<form onSubmit={onSubmitAddPost}>
				<label htmlFor="postTitle">Post Title:</label>
				<input
					type="text"
					id="postTitle"
					name="postTitle"
					value={title}
					onChange={onChangeTitle}
				/>
				<label htmlFor="postAuthor">Author:</label>
				<select id="postAuthor" value={userId} onChange={onChangeAuthor}>
					<option value=''></option>
					{usersOptions}
				</select>
				<label htmlFor="postContent">Content:</label>
				<textarea
					id="postContent"
					name="postContent"
					value={content}
					onChange={onChangeContent}
				/>
				<button type="submit" disabled={!canSave}>Add</button>
			</form>
		</section>
	)
}
