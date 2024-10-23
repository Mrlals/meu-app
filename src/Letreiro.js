import React, { useState, useEffect } from 'react';

function Letreiro() {
  const texto = 'Conheça a Fatec';
  const [indice, setIndice] = useState(0);
  const [textoAtual, setTextoAtual] = useState('');

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTextoAtual((prevTexto) => {
        const novoTexto = texto.substring(0, indice + 1);
        return novoTexto;
      });

      setIndice((prevIndice) => (prevIndice + 1) % texto.length);
    }, 200);

    return () => clearInterval(intervalo);
  }, [indice, texto]);

    return (
      <>
          <h3>{textoAtual}</h3>
      </>
    );
  }
  
  export default Letreiro;