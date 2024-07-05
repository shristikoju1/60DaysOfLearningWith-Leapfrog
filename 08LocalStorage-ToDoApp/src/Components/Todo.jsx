import React, { useEffect, useState } from "react";
import TodoImg from ".././assets/todo-img.png";
import "./../App.css";
import deleteImg from ".././assets/delete.png";
import plusImg from ".././assets/plus.png";

// To get the data from local storage
const getLocalItems = () => {
  const list = localStorage.getItem('lists');
  return list ? JSON.parse(list) : [];
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItems());

  const addItem = () => {
    if (!inputData.trim()) {
      // Optionally, handle the case when input is empty
      return;
    }
    setItems([...items, inputData.trim()]);
    setInputData("");
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, id) => index !== id);
    setItems(updatedItems);
  };

  const removeAll = () => {
    setItems([]);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  };

  // Add data to local storage
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(items));
  }, [items]);

  return (
    <div className="main-div">
      <figure>
        <img src={TodoImg} alt="todoimg" />
        <figcaption>Add Your List Here</figcaption>
      </figure>

      <div className="addItems">
        <input
          type="text"
          placeholder="Add Items...."
          className="inputWithButton"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <img className="add-btn" src={plusImg} alt="plusImg" onClick={addItem} />
      </div>

      <div className="showItems">
        {items.map((elem, index) => (
          <div className="eachItem" key={index}>
            <h3>{elem}</h3>
            <img
              className="delete-btn"
              src={deleteImg}
              alt="delete-img"
              onClick={() => deleteItem(index)}
            />
          </div>
        ))}
      </div>

      <div className="button">
        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
          <span>CHECK LIST</span>
        </button>
      </div>
    </div>
  );
};

export default Todo;
