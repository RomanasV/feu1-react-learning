import React, { useState } from 'react';

const ShoppingItem = ({title, done}) => {
  // const [num, setNum] = useState(0);
  // const [elementTitle, setElementTitle] = useState(title);

  // function clickHandler() {
  //   setNum(num + 1);
  //   setElementTitle(title + ' labas');
  // }

  const [isDone, setIsDone] = useState(done);

  function doneHandler() {
    setIsDone(true);
  }

  return (
    <div className='shopping-item'>
      {!isDone && <button onClick={doneHandler}>Done</button>}
      <span>{isDone && '✓ '}{title}</span>
    </div>
  )
}

export default ShoppingItem