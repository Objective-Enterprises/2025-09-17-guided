import { useState } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

export default function Home () {
  const [tasks, setTasks] = useState([])
  console.log('tasks', tasks)
  return (
    <>
      <h1>Task Manager</h1>
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  )
}