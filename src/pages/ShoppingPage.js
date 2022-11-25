import React, { useState } from "react";
import ShoppingItem from "../components/ShoppingItem/ShoppingItem";

const ShoppingPage = () => {
  let list = [
    {
      title: "Bread",
      done: false,
    },
    {
      title: "Butter",
      done: true,
    },
    {
      title: "Eggs",
      done: false,
    },
  ];

  const [todoList, setTodoList] = useState(list);
  const [todoInput, setTodoInput] = useState("");
  const [todoInputDone, setTodoInputDone] = useState(false);

  // function renderShoppingList(arr) {
  //   let listElement = arr.map((item, index) => <ShoppingItem key={index} title={item.title} />);

  //   return listElement;
  // }

  const addItemHandler = (event) => {
    event.preventDefault();
    // const inputValue = event.target.elements.shoppingItem.value;
    // const inputDone = event.target.elements.shoppingItemDone.checked;

    // const newItem = {
    //   title: inputValue,
    //   done: inputDone,
    // };

    setTodoList((prevState) => [
      { title: todoInput, done: todoInputDone },
      ...prevState,
    ]);

    setTodoInput('');
    setTodoInputDone(false);
  };

  return (
    <div className="page-content">
      <h2 className="page-title">
        {todoList.length > 0 ? "Shopping List" : "No items"}
      </h2>

      <form className="shopping-form" onSubmit={addItemHandler}>
        <div className="form-control">
          <label htmlFor="shopping-item">Add an item:</label>
          <input
            type="text"
            name="shoppingItem"
            id="shopping-item"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="shopping-item-done">Done:</label>
          <input
            type="checkbox"
            name="shoppingItemDone"
            id="shopping-item-done"
            checked={todoInputDone}
            onChange={(e) => setTodoInputDone(e.target.checked)}
          />
        </div>
        <button type="submit">Add</button>
      </form>

      {todoList.length > 0 && (
        <div className="shopping-list">
          {/* {renderShoppingList(list)} */}

          {todoList.map((item, index) => (
            <ShoppingItem key={index} title={item.title} done={item.done} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShoppingPage;
