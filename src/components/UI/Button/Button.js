import React from 'react';
import classes from './Button.css'
const button = (props) =>(
 
    <button
      style = {{height: 20, width:40}}// ={[classes.Button, classes[props.btnType]].join(' ')}
      onClick={props.clicked}>{props.childern}
    </button>

);
export default button;