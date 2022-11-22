import React from 'react'

const TodoItem = ({ title, done }) => {
  let progressText = done ? 'Done' : 'In progress';
  let doneClass = done ? 'todo-item done' : 'todo-item';

  return (
    <li className={doneClass}>{title} ({progressText})</li>
  )
}

export default TodoItem