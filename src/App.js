import React from 'react';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';

import './App.css';

function App() {
  return (
    <div className="App">
      <p>Indecision App</p>
      <Action />
      <Options />
      <AddOption />
    </div>
  );
}

export default App;
