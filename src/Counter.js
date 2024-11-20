import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementByThree = () => {
    setCount(count + 3);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>{count}</h1>
      <button onClick={incrementByThree}>+3</button>
    </div>
  );
}

export default Counter;
