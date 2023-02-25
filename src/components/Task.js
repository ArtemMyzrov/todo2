import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'

const Task = ({ task, delTask }) => {
  return (
    <ul className="ulTask" id="ulTask">
      <li className="ulLi" id="ulLi">
        <AiFillCheckCircle className="iconsCheck" />
        {task.title}
        <AiFillCloseCircle
          className="iconsClose"
          onClick={() => delTask(task.id)}
        />
      </li>
    </ul>
  )
}

export default Task
