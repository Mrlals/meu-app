import React, { useState } from 'react';
import './Contador.css';

function Contador() {
  const [homens, setHomens] = useState(32);
  const [mulheres, setMulheres] = useState(49);
  const total = homens + mulheres;

  const incrementarHomens = () => setHomens(homens + 1);
  const decrementarHomens = () => setHomens(homens > 0 ? homens - 1 : 0);

  const incrementarMulheres = () => setMulheres(mulheres + 1);
  const decrementarMulheres = () => setMulheres(mulheres > 0 ? mulheres - 1 : 0);

  const resetarContadores = () => {
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div className="contador-pessoas">
      <h1>Total</h1>
      <div className="total">
        <input type="text" value={total} readOnly />
        <button onClick={resetarContadores}>
          <span role="img" aria-label="resetar">🔄</span>
        </button>
      </div>

      <div className="contadores">
        <div className="contador-homens">
          <img src="https://cdn-icons-png.flaticon.com/512/236/236831.png" alt="Homens" />
          <div className="controls">
            <button onClick={incrementarHomens} className="increment">
              <span role="img" aria-label="incrementar">➕</span>
            </button>
            <button onClick={decrementarHomens} className="decrement">
              <span role="img" aria-label="decrementar">➖</span>
            </button>
          </div>
          <p>Homens</p>
          <div className="count">{homens}</div>
        </div>

        <div className="contador-mulheres">
          <img src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png" alt="Mulheres" />
          <div className="controls">
            <button onClick={incrementarMulheres} className="increment">
              <span role="img" aria-label="incrementar">➕</span>
            </button>
            <button onClick={decrementarMulheres} className="decrement">
              <span role="img" aria-label="decrementar">➖</span>
            </button>
          </div>
          <p>Mulheres</p>
          <div className="count">{mulheres}</div>
        </div>
      </div>
    </div>
  );
}

export default Contador;