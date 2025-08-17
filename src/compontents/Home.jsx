import { useState } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

export default function Home () {
  const [tasks, setTasks] = useState([])
  const [selection, setSelection] = useState('')
  console.log('tasks', tasks)
  console.log('selection', selection)
  const categories = tasks.map(task => task.category)
  const set = new Set(categories)

  const unique = [...set]
  // const unique = []
  // for (const element of set) {
  //   unique.push(element)
  // }

  console.log('unique', unique)
  const options = unique.map(category => {
    return (
      <option key={category} value={category}>
        {category}
      </option>
    )
  })
  return (
    <>
      <h1>Task Manager</h1>
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <select onChange={event => setSelection(event.target.value)}>
        <option value=''>All</option>
        {options}
      </select>
      <TaskList tasks={tasks} setTasks={setTasks} selection={selection} />
    </>
  )
}