import React, { useState } from 'react';
import hex2rgb, { isDarkRgb } from './helpers/hex2rgb';

import './App.css';

function App() {
  const [rgb, setRgb] = useState('');
  const [darkRgb, setDarkRgb] = useState('');
  const onChange = e => {
    const h = e.target.value;
    setRgb(hex2rgb(h));
    setDarkRgb(hex2rgb(h, -30));
  };
  return (
    <div className="App" style={{ backgroundColor: rgb }}>
      <div className="container">
        <input
          onChange={onChange}
          className="input"
          maxLength="7"
          size="10"
          type="text"
        />
        <div className="output" style={{ backgroundColor: darkRgb, color:  isDarkRgb(darkRgb) ? 'white' : 'black'}}>
          {rgb}
        </div>
      </div>
    </div>
  );
}

export default App;
