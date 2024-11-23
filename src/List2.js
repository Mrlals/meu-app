import React, { useState } from 'react';

function List2() {
  const [items, setItems] = useState(['Initial Item']);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      setItems((prevItems) => [...prevItems, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (indexToRemove) => {
    setItems((prevItems) => prevItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <h2>List2</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter new item"
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List2;
