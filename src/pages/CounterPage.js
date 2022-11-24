import React, { useState } from 'react'

const CounterPage = () => {
  const [count, setCount] = useState(5);

  const plusOneHandler = () => {
    // setCount((prevState) => {
    //   return prevState + 1;
    // });

    setCount(prevState => prevState + 1);
  }

  const plusTwoHandler = () => {
    setCount(prevState => prevState + 2);
  }

  const minusOneHandler = () => {
    setCount(prevState => prevState - 1);
  }

  const minusTwoHandler = () => {
    setCount(prevState => prevState - 2);
  }

  return (
    <div style={{padding: '10px 30px 100px' }}>
      <div>{count}</div>
      <button onClick={minusTwoHandler}>-2</button>
      <button onClick={minusOneHandler}>-1</button>
      <button onClick={plusOneHandler}>+1</button>
      <button onClick={plusTwoHandler}>+2</button>
    </div>
  )
}

export default CounterPage