// src/Home.js
import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Bem-vindo ao Meu Site!</h1>
      <p>Este é o site principal. Clique no link acima para acessar o contador interativo.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '50px',
  },
};

export default Home;