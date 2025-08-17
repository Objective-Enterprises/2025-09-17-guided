import { useState } from 'react'
import TaskForm from './TaskForm'

export default function TaskList(props) {
  const rows = props.tasks.map((task, index) => {
    function handleComplete () {
      const newTasks = props.tasks.map((task, taskIndex) => {
        const target = index === taskIndex
        if (!target) {
          return task
        }
        const newTask = {...task, complete: true }
        return newTask
      })
      props.setTasks(newTasks)
    }
    function handleUndo () {
      const newTasks = props.tasks.map((task, taskIndex) => {
        const target = index === taskIndex
        if (!target) {
          return task
        }
        const newTask = {...task, complete: false }
        return newTask
      })
      props.setTasks(newTasks)
    }
    const nameClass = task.complete && 'complete'
    const statusButton = task.complete
      ? <button onClick={handleUndo}>Undo</button>
      : <button onClick={handleComplete}>Complete</button>
    function handleDelete () {
      const newTasks = props.tasks.filter((task, taskIndex) => {
        return taskIndex !== index
      })
      props.setTasks(newTasks)
    }
    return (
      <tr key={index}>
        <td className={nameClass}>{task.name}</td>
        <td>{task.category}</td>
        <td>{statusButton}</td>
        <td><button onClick={handleDelete}>Delete</button></td>
      </tr>
    )
  })
  return (
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
  )
}