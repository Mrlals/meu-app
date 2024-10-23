import React, { useState, useEffect } from 'react';

function Relogio() {

  const [horaAtual, setHoraAtual] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
        <h3>{horaAtual.toLocaleTimeString()}</h3>
    </>
  );
}
  
export default Relogio;
  