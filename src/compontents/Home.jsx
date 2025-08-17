import { useState } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import CategoryFilter from './CategoryFilter'

export default function Home () {
  const [tasks, setTasks] = useState([])
  const [selection, setSelection] = useState('')
  return (
    <>
      <h1>Task Manager</h1>
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <CategoryFilter tasks={tasks} setSelection={setSelection} />
      <TaskList tasks={tasks} setTasks={setTasks} selection={selection} />
    </>
  )
}