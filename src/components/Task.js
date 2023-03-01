import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'

const Task = ({ task, delTask, toggleTaskCompleted }) => {
  console.log(task)

  return (
    <>
      <ul className="ulTask" id="ulTask">
        <li className="ulLi" id="ulLi">
          <AiFillCheckCircle
            className="iconsCheck"
            onClick={() => toggleTaskCompleted(task.id)}
          />
          {task.title}
          <AiFillCloseCircle
            className="iconsClose"
            onClick={() => delTask(task.id)}
          />
        </li>
      </ul>
    </>
  )
}

export default Task
