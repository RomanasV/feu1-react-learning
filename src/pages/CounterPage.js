import React, { useState } from 'react'

const CounterPage = () => {
  const [count, setCount] = useState(5);
  const countClass = count > 4 ? 'color-green' : 'color-red';

  const counterHandler = (num) => setCount(prevState => prevState + num);

  return (
    <div style={{padding: '10px 30px 100px' }}>
      <div className={countClass}>{count}</div>
      <button onClick={() => counterHandler(-2)} disabled={count < 3 ? true : null}>-2</button>
      <button onClick={() => counterHandler(-1)} disabled={count < 2 ? true : null}>-1</button>
      <button onClick={() => counterHandler(1)} disabled={count > 9 ? true : null}>+1</button>
      <button onClick={() => counterHandler(2)} disabled={count > 8 ? true : null}>+2</button>
    </div>
  )
}

export default CounterPage