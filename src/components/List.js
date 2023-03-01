import Task from './Task'

const List = ({ tasks, delTask, toggleTaskCompleted, isDone }) => {
  return tasks.map((task, id, comp) => (
    <Task
      delTask={delTask}
      task={task}
      key={task.id}
      isDone={task.isDone}
      toggleTaskCompleted={toggleTaskCompleted}
    />
  ))
}

export default List
