import React, { useState } from 'react';

function List3() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);

  const handleDragStart = (index) => {
    const draggedItem = items[index];
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
    setItems((prevItems) => [...prevItems, draggedItem]);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const newItems = [...items];
    const draggedItem = newItems.pop();
    newItems.splice(index, 0, draggedItem);
    setItems(newItems);
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div>
      <h2>List3</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={handleDragOver}
            style={{
              padding: '5px',
              margin: '5px 0',
              border: '1px solid black',
              cursor: 'grab',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List3;
