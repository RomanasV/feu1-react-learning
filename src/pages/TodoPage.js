import React, { useState } from 'react'
import TodoItem from '../components/TodoItem/TodoItem';

const TodoPage = () => {
  let initialTodos = [
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

  const [todoList, setTodoList] = useState(initialTodos);

  let pageTitle = todoList.length > 0 ? 'Todo List:' : 'No items...';

  const submitHandler = (event) => {
    event.preventDefault();
    let input = event.target.elements['todo-input'].value;

    let todoData = {
      title: input,
      done: false
    }

    setTodoList((prevState) => [todoData, ...prevState]);
  }

  return (
    <div className='main-content'>
      <h2 className='page-title'>{pageTitle}</h2>

      <form onSubmit={submitHandler}>
        <label htmlFor='todo-input'>Enter your todo</label>
        <input type='text' id='todo-input' />
        <input type='submit' value='Add Todo' />
      </form>

      {todoList.length > 0 && (
        <ul className='todo-list'>
          {todoList.map((item, index) => <TodoItem key={index} done={item.done} title={item.title} />)}
        </ul>
      )}
    </div>
  )
}

export default TodoPage