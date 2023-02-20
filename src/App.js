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
    setTask([...tasks, { title: text, isDone: false, id: uuidv4() }])
  }

  console.log(tasks)

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }

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
        <List tasks={tasks} delTask={deleteTask} />
      </div>
    </div>
  )
}

export default App
