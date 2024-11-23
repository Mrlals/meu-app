import React, { useState } from 'react';

function CounterList() {
  const [counters, setCounters] = useState([0, 0, 0]);

  const incrementCounter = (index) => {
    setCounters((prevCounters) =>
      prevCounters.map((count, i) => (i === index ? count + 1 : count))
    );
  };

  return (
    <div>
      <h2>Counter List</h2>
      <ul>
        {counters.map((count, index) => (
          <li key={index}>
            Count: {count}{' '}
            <button onClick={() => incrementCounter(index)}>Increment</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setCounters([...counters, 0])}>Add Counter</button>
    </div>
  );
}

export default CounterList;
