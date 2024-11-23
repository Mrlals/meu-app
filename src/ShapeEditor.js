import React, { useState } from 'react';

function ShapeEditor() {
  const [shapes, setShapes] = useState([]);

  const addShape = (type) => {
    setShapes((prevShapes) => [...prevShapes, type]);
  };

  return (
    <div>
      <h2>Shape Editor</h2>
      <button onClick={() => addShape('circle')}>Add Circle</button>
      <button onClick={() => addShape('square')}>Add Square</button>
      <div
        style={{
          width: '300px',
          height: '300px',
          border: '1px solid black',
          position: 'relative',
          marginTop: '10px',
        }}
      >
        {shapes.map((shape, index) => (
          <div
            key={index}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: shape === 'circle' ? '50%' : '0',
              backgroundColor: shape === 'circle' ? 'blue' : 'green',
              position: 'absolute',
              left: `${Math.random() * 250}px`,
              top: `${Math.random() * 250}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ShapeEditor;
