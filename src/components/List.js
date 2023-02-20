import Task from './Task'

const List = ({ tasks }) => {
  return tasks.map((task, index) => <Task task={task} key={index} />)
}

export default List
