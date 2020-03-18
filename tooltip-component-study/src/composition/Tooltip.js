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

class TooltipClass extends React.Component {
  static defaultProps = {
    color: 'red', // green
  };
  render() {
    console.log('Using a class component!')
    console.log(this.props)
    return (
      <span className='Tooltip'>
        <span className='Tooltip-content'>
          {this.props.children}
        </span>
        <div className='Tooltip-message' style={{ color: this.props.color }}>
          {this.props.message}
        </div>
      </span>
    )
  }
}


// export default Tooltip;
export default TooltipClass;

