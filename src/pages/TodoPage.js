import React from 'react'
import TodoItem from '../components/TodoItem/TodoItem';

const TodoPage = () => {
  let todoList = [
    {
      title: 'Task1',
      done: false
    },
    {
      title: 'Task2',
      done: true
    },
    {
      title: 'Task3',
      done: false
    },
    {
      title: 'Task4',
      done: true
    },
    {
      title: 'Task5',
      done: true
    },
    {
      title: 'Task6',
      done: false
    },
  ];

  let pageTitle = todoList.length > 0 ? 'Todo List:' : 'No items...';

  return (
    <div className='main-content'>
      <h2 className='page-title'>{pageTitle}</h2>
      {todoList.length > 0 && (
        <ul className='todo-list'>
          {todoList.map((item, index) => <TodoItem key={index} done={item.done} title={item.title} />)}
        </ul>
      )}
    </div>
  )
}

export default TodoPage