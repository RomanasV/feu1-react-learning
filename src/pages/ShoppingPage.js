import React from 'react'
import ShoppingItem from '../components/ShoppingItem/ShoppingItem';

const ShoppingPage = () => {
  let list = [
    {
      title: 'Bread',
      done: false,
    },
    {
      title: 'Butter',
      done: false,
    },
    {
      title: 'Eggs',
      done: false,
    }
  ];

  // function renderShoppingList(arr) {
  //   let listElement = arr.map((item, index) => <ShoppingItem key={index} title={item.title} />);

  //   return listElement;
  // }

  return (
    <div>
      <h1>Shopping List</h1>
      <div className='shopping-list'>
        {/* {renderShoppingList(list)} */}

        {list.map((item, index) => <ShoppingItem key={index} title={item.title} />)}
      </div>
    </div>
  )
}

export default ShoppingPage