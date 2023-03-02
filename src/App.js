import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import './App.css'
import List from './components/List'

function App() {
  const [tasks, setTask] = useState([])
  const [text, setText] = useState('')

  const addText = () => {
    addTask(text)
    setText('')
  }

  const addTask = (text) => {
    if (text.length === 0) {
      return
    }
    if (tasks.filter((e) => e.title === text).length > 0) {
      return
    }
    const newTask = { title: text, isDone: false, id: uuidv4() }
    setTask([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, isDone: !task.isDone }
      }
      return task
    })

    setTask(updatedTasks)
  }

  const taskIsDone = tasks.filter((task) => task.isDone).length
  const countCompledTask = taskIsDone !== 1 ? 'tasks' : 'task'

  return (
    <div className="container">
      <div className="App">
        <div id="myDIV" className="header">
          <h2>Task List</h2>
          <div className="taskForm">
            <input
              onChange={(e) => setText(e.target.value)}
              value={text}
              type="text"
              id="myInput"
              placeholder="Enter a new task.."
            />
            <span onClick={addText} className="addBtn">
              Add
            </span>
          </div>
        </div>
        <List
          toggleTaskCompleted={toggleTaskCompleted}
          tasks={tasks}
          delTask={deleteTask}
        />
      </div>
      {taskIsDone === 0 ? (
        ''
      ) : (
        <h2 className="title-compled">
          You completed {taskIsDone} {countCompledTask}
        </h2>
      )}
    </div>
  )
}

export default App
