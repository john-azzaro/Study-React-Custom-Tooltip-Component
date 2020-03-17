import React from 'react';
import './Split.css';

function Split(props) {
  const combinedClassName = `style ${props.className}`
  return (
    <div className={combinedClassName}>
      {props.children}
    </div>
  );
}


export default Split;