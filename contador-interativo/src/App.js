import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Contador from './Contador';
import Home from './Home'; // Crie um componente para a página inicial
import './App.css';

function App() {
  return (
    <div className="App">
      <Contador />
    </div>
  );
}

const Apphome = () => {
  return (
    <Router>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Página Inicial</Link>
        <Link to="/contador" style={styles.link}>Contador Interativo</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contador" element={<Contador />} />
      </Routes>
    </Router>
  );
};

const styles = {
  nav: {
    backgroundColor: '#f8f9fa',
    padding: '10px',
    textAlign: 'center',
  },
  link: {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#007BFF',
    fontSize: '18px',
  },
};

export default App;
