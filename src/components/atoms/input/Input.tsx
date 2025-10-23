import React from 'react'
import "./Input.css";

type InputProps = {
    type : "text" | "number" | "password";
    id? : string;
    name : string;
    value : string;
    placeholder : string;
    className? : string;
    onChange : (e:React.ChangeEvent <HTMLInputElement>) => void;
}

const Input:React.FC<InputProps> = ({type, id, name, value, placeholder, onChange, className}) => {
  return (
    <div>
      <input 
        type = {type}
        id = {id}
        name = {name}
        value = {value}
        placeholder = {placeholder}
        className = {className}
        onChange = {onChange}
      /> 
    </div>
  )
}

export default Input
