import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button type={props.type} className={`button ${!props.canClick? 'cant-click':''}`} onClick={props.onClick}>
            {props.children}
    </button>
  );
};

export default Button;
