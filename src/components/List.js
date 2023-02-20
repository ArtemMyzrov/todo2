import Task from './Task'

const List = ({ tasks, delTask }) => {
  return tasks.map((task, id) => (
    <Task delTask={delTask} task={task} key={id} />
  ))
}

export default List
