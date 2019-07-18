import React from 'react'
import Task from './Task'

const TaskList = (props) => {
  return(
    props.tasks.map(task => <Task
      key={task.id}
      onRemoveTask={props.onRemoveTask}
      task={task}/>) : null
  )
}

export default TaskList
