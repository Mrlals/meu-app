import React from 'react';

function Item({ name, isPacked }) {
  return (
    <li>
      {name} {isPacked && '✔'}
    </li>
  );
}

export default function PackingList() {
  return (
    <ul>
      <Item name="Toothbrush" isPacked={true} />
      <Item name="Shampoo" isPacked={false} />
      <Item name="Sunscreen" isPacked={true} />
    </ul>
  );
}
