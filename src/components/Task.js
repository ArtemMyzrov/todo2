import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'

const Task = ({ task }) => {
  return (
    <ul className="ulTask">
      <li>
        <AiFillCheckCircle className="iconsCheck" />
        {task.title}
        <AiFillCloseCircle className="iconsClose" />
      </li>
    </ul>
  )
}

export default Task
