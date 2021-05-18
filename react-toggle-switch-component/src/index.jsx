import React from 'react';
import ReactDOM from 'react-dom';

const toggleSwitch = (
<label className="switch">
  <input type="checkbox" />
    <span className="slider round"></span>
  </label>

);

ReactDOM.render(toggleSwitch, document.querySelector('#root'));
