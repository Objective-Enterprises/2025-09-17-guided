import { useState } from 'react'

export default function TaskForm(props) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  function handleSubmit(event) {
    event.preventDefault()

    if (name === '' || category === '') {
      alert('Fill both fields')
      return
    }

    const newTask = { name, category, complete: false }
    const newTasks = [...props.tasks, newTask]
    props.setTasks(newTasks)
  }
  return (
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
  )
}