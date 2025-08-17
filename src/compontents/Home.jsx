import { useState } from 'react'

export default function Home () {
  const [tasks, setTasks] = useState([])
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  function handleSubmit (event) {
    event.preventDefault()
    const newTask = { name, category, complete: false }
    const newTasks = [...tasks, newTask]
    setTasks(newTasks)
  }
  console.log('tasks', tasks)
  return (
    <>
      <h1>Task Manager</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder='category'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button>Add Task</button>
      </form>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Category</td>
            <td>Status</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </>
  )
}