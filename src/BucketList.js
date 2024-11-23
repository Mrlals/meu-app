import React, { useState } from "react";

function BucketList() {
  const [myList, setMyList] = useState([
    { id: 1, name: "Big Bellies", checked: false },
    { id: 2, name: "Lunar Landscape", checked: false },
    { id: 3, name: "Terracotta Army", checked: true },
  ]);

  const toggleCheckbox = (id) => {
    setMyList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <h1>BucketList</h1>
      <h2>Art Bucket List</h2>

      <h3>My list of art to see:</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {myList.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleCheckbox(item.id)}
              />
              {item.name}
            </label>
          </li>
        ))}
      </ul>

      <h3>Your list of art to see:</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {myList.map((item) => (
          <li key={item.id}>
            <label>
              <input type="checkbox" checked={item.checked} readOnly />
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BucketList;
