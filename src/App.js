import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';

function App() {
  return (
    <div className="App">
        <div className="homepage-container" style={{ width: '100%' }}>
          <Homepage />
        </div>
    </div>
  );
}

export default App;
