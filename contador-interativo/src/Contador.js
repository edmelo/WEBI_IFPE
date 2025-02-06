import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div style={styles.contadorContainer}>
      <h2>Contador Interativo</h2>
      <p>Valor: {contador}</p>
      <button style={styles.botao} onClick={incrementar}>Incrementar</button>
      <button style={styles.botao} onClick={decrementar}>Decrementar</button>
    </div>
  );
};

const styles = {
  contadorContainer: {
    textAlign: 'center',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  },
  botao: {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Contador;