import { useState } from 'react'

export default function Home () {
  const [tasks, setTasks] = useState([])
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  function handleSubmit (event) {
    event.preventDefault()

    if (name === '' || category === '') {
      alert('Fill both fields')
      return
    }

    const newTask = { name, category, complete: false }
    const newTasks = [...tasks, newTask]
    setTasks(newTasks)
  }
  const rows = tasks.map((task, index) => {
    return (
      <tr key={index}>
        <td>{task.name}</td>
        <td>{task.category}</td>
        <td><button></button></td>
        <td><button></button></td>
      </tr>
    )
  })
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
          {rows}
        </tbody>
      </table>
    </>
  )
}