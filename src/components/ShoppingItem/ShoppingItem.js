import React, { useState } from 'react';

const ShoppingItem = ({title, done}) => {
  const [isDone, setIsDone] = useState(done);

  function doneHandler() {
    setIsDone(!isDone);
  }

  return (
    <div className='shopping-item'>
      <span>{isDone && '✓ '}{title}</span>
      <button onClick={doneHandler}>{isDone ? 'Remove' : 'Add'}</button>
    </div>
  )
}

export default ShoppingItem