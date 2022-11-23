import React, { useState } from 'react';
import './TodoItem.css';

const TodoItem = ({ title, done }) => {
  const [isDone, setIsDone] = useState(done);

  let progressText = isDone ? 'Done' : 'In progress';
  let doneClass = isDone ? 'todo-item done' : 'todo-item';

  function clickHandler() {
    setIsDone(!isDone);
  }

  return (
    <li className={doneClass} onClick={clickHandler}>{title} ({progressText})</li>
  )
}

export default TodoItem