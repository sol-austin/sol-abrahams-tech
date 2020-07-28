import React from 'react';
import './App.css';
import AnimatedSwitch from './AnimatedSwitch';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AnimatedSwitch />
      </BrowserRouter>
    </div>
  );
}

export default App;
