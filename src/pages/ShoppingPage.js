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
    <div className='page-content'>
      <h2 className='page-title'>{list.length > 0 ? 'Shopping List' : 'No items'}</h2>
      {list.length > 0 && (
        <div className='shopping-list'>
          {/* {renderShoppingList(list)} */}

          {list.map((item, index) => <ShoppingItem key={index} title={item.title} />)}
        </div>
      )}
    </div>
  )
}

export default ShoppingPage