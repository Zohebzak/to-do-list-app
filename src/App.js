import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Input} from './Input'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>To Do list</p>
        <Input />
      </header>
    </div>
  );
}

export default App;
