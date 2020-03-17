import React from 'react';

function Split(props) {
  const combinedClassName = `style ${props.className}`
  return(
    <div className={combinedClassName}>
      {props.children}
    </div>
  );
}


export default Split;