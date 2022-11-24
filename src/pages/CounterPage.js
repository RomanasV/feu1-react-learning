import React, { useState } from 'react'

const CounterPage = () => {
  const initialCount = 5;
  const [count, setCount] = useState(initialCount);
  const countClass = count > 4 ? 'color-green' : 'color-red';

  const counterHandler = num => setCount(prevState => prevState + num);
  const disableButton = condition => condition ? true : null;
  const counterInputHandler = event => setCount(event.target.value);

  return (
    <div style={{padding: '10px 30px 100px' }}>
      <div className={countClass}>{count}</div>
      <input type='number' value={count} onChange={counterInputHandler} />
      <div>
        <button onClick={() => counterHandler(-2)} disabled={disableButton(count < 3)}>-2</button>
        <button onClick={() => counterHandler(-1)} disabled={disableButton(count < 2)}>-1</button>
        <button onClick={() => counterHandler(1)} disabled={disableButton(count > 9)}>+1</button>
        <button onClick={() => counterHandler(2)} disabled={disableButton(count > 8)}>+2</button>
        <button onClick={() => setCount(initialCount)}>Reset</button>
      </div>
    </div>
  )
}

export default CounterPage