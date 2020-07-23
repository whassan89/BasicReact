import React from 'react';

import './App.css';
import Hello from './Hello.js';
import './Hello.css';

function App({name, age}) {
  return (
    <div className="myname">
     My name is {name} and age is {age}
      <br/>
      <Hello firstName={name}></Hello>

      </div>
  );
}

export default App;
