import Task from './Task'

const List = ({ tasks, delTask }) => {
  return tasks.map((task, id) => (
    <Task delTask={delTask} task={task} key={task.id} />
  ))
}

export default List
