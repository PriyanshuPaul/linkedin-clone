import React from "react";
import './InputOption.css'
function InputOption({Icon,title,color}) {
  return (
    <div className="input-option">
        <Icon style={{color:color}}/>
        <h1>{title}</h1>
    </div>
  )
}
export default InputOption