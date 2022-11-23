import React, { useState } from 'react';

const ShoppingItem = ({title, done}) => {

  // let buttonElement = document.querySelector('button');
  // console.log(buttonElement);
  
  // buttonElement && buttonElement.addEventListener('click', () => {
  //   console.log('click');
  //   done = true;
  // });

  // function clickHandler() {
  //   console.log('click');
  //   done = true;
  // }

  // buttonElement && buttonElement.addEventListener('click', clickHandler);


  // useState()

  // console.log(useState());
  // console.log(useState()[0])
  // console.log(useState()[1])

  // const text = useState()[0];
  // const setText = useState()[1];

  // const [num, setNum] = useState(0);
  // const [elementTitle, setElementTitle] = useState(title);

  // function clickHandler() {
  //   setNum(num + 1);
  //   setElementTitle(title + ' labas');
  // }


  function doneHandler() {
    console.log('Done');
  }

  return (
    <div className='shopping-item'>
      {/* <p>{num}</p> */}
      {!done && <button onClick={doneHandler}>Done</button>}
      <span>{done && '✓ '}{title}</span>
    </div>
  )
}

export default ShoppingItem