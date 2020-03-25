import React from 'react';
import './App.css';
import ProductPanel from './components/ProductPanel';

function App() {
  return (
    <div className="App">
      <div className="title-box">
          <span className="title">Change Flavour</span>
      </div>
      <ProductPanel/>
    </div>
  );
}

export default App;
