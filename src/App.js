import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';

function App() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <Main />
    </div>
  );
}

export default App;
