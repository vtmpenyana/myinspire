import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Factorization from './components/Factorization/Factorization';
import Questions from './components/Factorization/Questions';

function App() {
  return (
    <div className="App tc">
      <Navigation />
      <Factorization />
      <Questions />
    </div>
  );
}

export default App;
