import React from 'react';
import './Tooltip.css';

function Tooltip(props) {
  return (
    <span className="Tooltip" >                                                
      <span className="Tooltip-content">
        {props.children}
      </span>
      <div className="Tooltip-message" style={{ color: props.color }}>                                      
        {props.message}
      </div>
    </span>
  );
}

class TooltipClass extends React.Component {}

export default Tooltip;

