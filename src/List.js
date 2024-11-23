import React from 'react';

function List() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div>
      <h2>List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
