// import { useGetTodosQuery } from "@/entities/api/apiSlice"
// import { todoApiSlice } from? "@/entities/todo/todoApiSlice"
import { FormEvent, useState } from "react"

export const TodoList = () => {

  const [newTodo, setNewTodo] = useState('')

  /* @ts-ignore */
  // const { data: todos, isLoading, isSuccess, isError, error } = useGetTodosQuery()

  // const { data: todos, isLoading, isSuccess, isError, error } = todoApiSlice.useGetNewsQuery

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // addTodo
    setNewTodo('')
  }

  const newItemSelection =
    <form onSubmit={onSubmit}>
      <label htmlFor="new-todo">Enter a new todo item</label>
      <div className="new-todo">
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
        />
      </div>
      <button className="submit">+</button>
    </form>

  let content;

  // if (isLoading) {
  //   content = <p>Loading...</p>
  // } else if (isSuccess) {
  //   console.log(todos)
  //   content = JSON.stringify(todos)
  // } else if (isError) {
  //   content = <p>{error}</p>
  // }

  return (
    <main>
      <h1>ToDo</h1>
      {newItemSelection}
      {content}
    </main>
  )
}
