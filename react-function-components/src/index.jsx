import React from 'react';
import ReactDOM from 'react-dom';

const CustomButton = function () {
  return <button>Click Me!</button>;
};

ReactDOM.render(<CustomButton />, document.querySelector('#root'));
