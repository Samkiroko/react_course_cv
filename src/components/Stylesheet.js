import React from 'react';
import './myStyle.css';

function Stylesheet(props) {
  let className = props.primary ? 'primary' : '';
  return (
    <div>
      <h1 className={`${className} font-xl`}>My style sheet </h1>
    </div>
  );
}

export default Stylesheet;
