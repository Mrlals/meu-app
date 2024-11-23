import React, { useState } from 'react';

function MovingDot() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      style={{
        width: '300px',
        height: '300px',
        border: '1px solid black',
        position: 'relative',
        margin: '20px auto',
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Ponto fixo na posição inicial */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '10px',
          height: '10px',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* Ponto que se move com o mouse */}
      <div
        style={{
          position: 'absolute',
          top: `${position.y}px`,
          left: `${position.x}px`,
          width: '10px',
          height: '10px',
          backgroundColor: 'blue',
          borderRadius: '50%',
        }}
      />
    </div>
  );
}

export default MovingDot;
